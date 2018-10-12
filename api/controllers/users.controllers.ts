import * as pg from "pg";
import { Request, Response } from "express";
import dbcon from '../data/dbconnection';

export default class UsersController{
    constructor(){
     
    }  
    UserLogin=(req:Request,res:Response)=>{
        console.log("I am Called");
        var client:pg.Client = dbcon.get();
        var emailId = req.body.emailId;
        var password = req.body.password;
        console.log(emailId);
        console.log(password);
        const query = {
            // give the query a unique name
            name: 'login-authentication',
            text: 'SELECT * FROM userdata WHERE email = $1 AND password=$2',
            values: [emailId,password]
          }
          
       client.query(query)
          .then(obj => {
          console.log(obj.rows);
          if(obj.rows[0]!=null)
          {
          delete obj.rows[0].password;
          }
          res.send(obj.rows[0]);      
          })
          .catch(e => {
          console.log(e.stack); 
        })
    }
}