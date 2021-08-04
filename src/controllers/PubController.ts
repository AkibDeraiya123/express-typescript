import { Request, Response } from 'express';
import { Controller, ClassMiddleware, Get } from '@overnightjs/core';
import { authMiddleware } from '../middleware/auth';

@Controller('pub/proxy')
@ClassMiddleware(authMiddleware)
export class PubController {
    @Get('bpm/start')
    private bpmStart(req: Request, res: Response) {
        res.status(200).json({
            message: "Done",
        });
    }
}
