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
                    console.log(details);

                    user.ToDos = details[0];
                    user.Groceries = details[1];
                    user.Bills = details[2];
                    user.BillPayments = details[3];
                    user.Accounts = details[4];
                    user.Purchases = details[5];
                    user.Password = '';

                    res.status(200).send(user);
                });
            });
        });

        app.use('/api/v1/user/', router);
    }
}