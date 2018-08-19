import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mysql from 'mysql';
import * as config from '../config';
import { Routes } from './routes';

export class App {

    public app: express.Application;
    public routesModule: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.connectDb();
        this.routesModule.routes(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // Add headers
        this.app.use(function (req, res, next) {

            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            // res.setHeader('Access-Control-Allow-Credentials', true);

            // Pass to next layer of middleware
            next();
        });
    }

    private connectDb(): void {
        this.app.use(function (req, res, next) {
            res.locals.connection = mysql.createConnection(config.mysql_connection);
            res.locals.connection.connect();
            next();
        });
    }

    private routes(): void {
        const router = express.Router();
    
        router.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.status(200).send({
                message: 'Hello World!'
            })
        });

        this.app.use('/', router)
    }
}

export default new App().app;