import * as express from 'express';
import { UserRoutes } from './user';
import { PurchaseRoutes } from './purchase';

export class Routes {

    public userRoutes: UserRoutes = new UserRoutes();
    public purchaseRoutes: PurchaseRoutes = new PurchaseRoutes();

    constructor() {}

    routes(app: express.Application): void {
        this.userRoutes.routes(app);
        this.purchaseRoutes.routes(app);
    }
}