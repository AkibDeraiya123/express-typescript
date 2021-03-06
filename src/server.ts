import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import * as controllers from './controllers';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

declare module "express-session" {
    interface Session {
        authUser: number;
    }
}

class BackendServer extends Server {

    private readonly SERVER_STARTED = 'Example server started on port: ';

    constructor() {
        super(true);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(session({
            secret: 'someSecrete',
            resave: true
        }));
        this.setupControllers();
    }

    private setupControllers(): void {
        const ctlrInstances = [];
        for (const name in controllers) {
            if (controllers.hasOwnProperty(name)) {
                const controller = (controllers as any)[name];
                ctlrInstances.push(new controller());
            }
        }
        super.addControllers(ctlrInstances);
    }

    public start(port: number): void {
        this.app.get('*', (req, res) => {
            res.send(this.SERVER_STARTED + port);
        });
        this.app.listen(port, () => {
            Logger.Imp(this.SERVER_STARTED + port);
        });
    }
}

export default BackendServer;
