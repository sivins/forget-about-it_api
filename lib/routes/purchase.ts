import * as express from 'express';
import { User } from 'models/user';
import { Purchase } from 'models/purchase';
import * as mysql from 'mysql';

export class PurchaseRoutes {

    constructor() {}

    routes(app: express.Application): void {
        const router = express.Router();

        router.put('/purchase/:purchase', function(req: express.Request, res: express.Response, next: express.NextFunction) {
            const purchase: Purchase = req.params.purchase;

            if (!purchase || !purchase.AccountId || !purchase.UserId || !purchase.Amount) {
                throw 'Invalid purchase object';
            }

            const query = mysql.escape(`
                INSERT INTO Purchase (UserId, PurchaseCategoryId, AccountId, Description, Amount, PurchaseDate, EnteredStamp)
                VALUES (${purchase.UserId}, ${purchase.PurchaseCategoryId}, ${purchase.AccountId}, ${purchase.Description}, ${purchase.Amount}, ${purchase.PurchaseDate}, CURRENT_TIMESTAMP());
            `);

            res.locals.connection.query(query, req.params.username, function (err, results, fields) {
                if (err) throw err;

                res.status(200).send();
            });
        });

        router.patch('/purchase/:purchase', function(req: express.Request, res: express.Response, next: express.NextFunction) {
            const purchase: Purchase = req.params.purchase;

            if (!purchase || !purchase.PurchaseId || !purchase.AccountId || !purchase.UserId || !purchase.Amount) {
                throw 'Invalid purchase object';
            }

            const query = mysql.escape(`
                UPDATE Purchase SET 
                    PurchaseCategoryId = ${purchase.PurchaseCategoryId},
                    Description = ${purchase.Description},
                    Amount = ${purchase.Amount},
                    PurchaseDate = ${purchase.PurchaseDate},
                    UpdatedStamp = ${purchase.UpdatedStamp}
                WHERE PurchaseId = ${purchase.PurchaseId}
            `);

            res.locals.connection.query(query, req.params.username, function (err, results, fields) {
                if (err) throw err;

                res.status(200).send();
            });
        });

        router.delete('/purchase/:purchaseId', function(req: express.Request, res: express.Response, next: express.NextFunction) {
            if (!req.params.purchaseId) throw 'Invalid PurchaseId';

            const query = mysql.escape(`
                DELETE FROM Purchase
                WHERE PurchaseId = ${req.params.purchaseId}
            `);

            res.locals.connection.query(query, req.params.username, function (err, results, fields) {
                if (err) throw err;

                res.status(200).send();
            });
        });

        app.use('/api/v1/purchase/', router);
    }
}
