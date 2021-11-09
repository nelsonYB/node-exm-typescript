import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPath = {
        users: '/api/users'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000'; 

        // Initial method
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {

        try {
            await db.authenticate();
            console.log('Database online');
            
        } catch (error: any) {
            throw new Error(error);
        }

    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Parsebody
        this.app.use( express.json() );

        // Public folder
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.apiPath.users, userRoutes )
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server runing on port ' + this.port);
            
        })
    }


}

export default Server;