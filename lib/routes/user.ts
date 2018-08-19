import * as express from 'express';
import { User } from 'models/user';
import { Purchase } from 'models/purchase';
import * as mysql from 'mysql';

export class UserRoutes {

    constructor() {}

    routes(app: express.Application): void {
        const router = express.Router();
    
        router.get('/user-details/:username', function(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.locals.connection.query('SELECT * FROM User WHERE UserName = ?;', req.params.username, function (userError, userResults, userFields) {
                if (userError) throw userError;

                const userId = userResults[0].UserId;

                if (!userId) throw 'No user found';

                const detailsQuery = `
                    SELECT * FROM Todo WHERE UserId = ${userId};
                    SELECT * FROM Grocery WHERE UserId = ${userId};
                    SELECT * FROM Bill WHERE UserId = ${userId};
                    SELECT * FROM BillPayment WHERE UserId = ${userId};
                    SELECT * FROM Account WHERE UserId = ${userId};
                    SELECT * FROM Purchase WHERE UserId = ${userId};
                `;

                res.locals.connection.query(detailsQuery, function(detailsError, detailsResults, detailsFields) {
                    if (detailsError) throw detailsError;

                    const todos = detailsResults[0];
                    const groceries = detailsResults[1];
                    const bills = detailsResults[2];
                    const billPayments = detailsResults[3];
                    const accounts = detailsResults[4];
                    const purchases = detailsResults[5];

                    const user: User = userResults[0];
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