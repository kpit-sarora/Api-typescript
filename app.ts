import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import router from './api/routes';
import * as cors from 'cors'
import DbConnection from './api/data/dbconnection';

class App {
    private connectionString:string ='postgresql://postgres:Sahil@123@localhost/MyDB';
  constructor() {
    this.app = express();
    this.config();
    new DbConnection(this.connectionString).open();
  }

  public app: express.Application;

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use('/api',router);
  }

}

export default new App().app;