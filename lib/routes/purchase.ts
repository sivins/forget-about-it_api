import * as express from 'express';
import { Purchase } from 'models/purchase';
import * as mysql from 'mysql';

export class PurchaseRoutes {

    constructor() {}

    routes(app: express.Application): void {
        const router = express.Router();

        router.put('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
            const purchase: Purchase = req.body;

            if (!purchase || !purchase.AccountId || !purchase.UserId || !purchase.Amount) {
                throw 'Invalid purchase object';
            }

            const query = `
                INSERT INTO Purchase (UserId, PurchaseCategoryId, AccountId, Description, Amount, PurchaseDate, EnteredStamp)
                VALUES (
                    ${mysql.escape(purchase.UserId)},
                    ${mysql.escape(purchase.PurchaseCategoryId)},
                    ${mysql.escape(purchase.AccountId)},
                    ${mysql.escape(purchase.Description)},
                    ${mysql.escape(purchase.Amount)},
                    ${mysql.escape(purchase.PurchaseDate)},
                    CURRENT_TIMESTAMP());
                `;

            res.locals.connection.query(query, req.params.username, function (err, results, fields) {
                if (err) throw err;

                res.status(200).send();
            });
        });

        router.patch('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
            const purchase: Purchase = req.body;

            if (!purchase || !purchase.PurchaseId || !purchase.AccountId || !purchase.UserId || !purchase.Amount) {
                throw 'Invalid purchase object';
            }

            const query = `
                UPDATE Purchase SET
                    PurchaseCategoryId = ${mysql.escape(purchase.PurchaseCategoryId)},
                    Description = ${mysql.escape(purchase.Description)},
                    Amount = ${mysql.escape(purchase.Amount)},
                    PurchaseDate = ${mysql.escape(purchase.PurchaseDate)},
                    UpdatedStamp = CURRENT_TIMESTAMP()
                WHERE PurchaseId = ${mysql.escape(purchase.PurchaseId)}
            `;

            res.locals.connection.query(query, req.params.username, function (err, results, fields) {
                if (err) throw err;

                res.status(200).send();
            });
        });

        router.delete('/:purchaseId', function(req: express.Request, res: express.Response, next: express.NextFunction) {
            if (!req.params.purchaseId) throw 'Invalid PurchaseId';

            const query = `DELETE FROM Purchase WHERE PurchaseId = ${mysql.escape(req.params.purchaseId)}`;

            res.locals.connection.query(query, req.params.username, function (err, results, fields) {
                if (err) throw err;

                res.status(200).send();
            });
        });

        app.use('/api/v1/purchase/', router);
    }
}
