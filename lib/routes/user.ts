import * as express from 'express';
import { User } from 'models/user';
import db = require('../db');

export class UserRoutes {

    constructor() {}

    routes(app: express.Application): void {
        const router = express.Router();
    
        router.get('/:username', function(req: express.Request, res: express.Response, next: express.NextFunction) {
            db.user.findByName(req.params.username).then((user: User) => {
                console.log(user);

                db.user.details(user.UserId).then((details) => {
                    const todos = details[0];
                    const groceries = details[1];
                    const bills = details[2];
                    const billPayments = details[3];
                    const accounts = details[4];
                    const purchases = details[5];

                    user.Password = '';
                    user.ToDos = todos;
                    user.Groceries = groceries;
                    user.Bills = bills;
                    user.BillPayments = billPayments;
                    user.Accounts = accounts;
                    user.Purchases = purchases;

                    res.status(200).send(user);
                });
            });
        });

        app.use('/api/v1/user/', router);
    }
}