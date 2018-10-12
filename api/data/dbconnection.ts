import * as pg from 'pg';
//const connectionString = 'postgresql://postgres:Sahil@123@localhost/MyDB'

export default class  DbConnection{
      
   private  static client:pg.Client;
   constructor(connectionString:string){
     DbConnection.client=new pg.Client(connectionString);
    }
    open(){
    DbConnection.client.connect(err => {
        if (err) {
            return console.error("Could not connect to postgres", err);
        }
        console.log("Connected ");
    }) };

   static get(){
    return this.client;
     }

    static close(){
     this.client.end();
    }

}
