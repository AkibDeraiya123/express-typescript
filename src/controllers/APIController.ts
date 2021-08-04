import { Request, Response } from 'express';
import { Controller, ClassMiddleware, Get } from '@overnightjs/core';
import { authMiddleware } from '../middleware/auth';

@Controller('api/proxy')
@ClassMiddleware(authMiddleware)
export class APIController {
    @Get('adu-ms/get')
    private getAduMs(req: Request, res: Response) {
        res.status(200).json({
            message: "Done",
        });
    }
};