import { Request, Response } from 'express';
import { Controller, Get } from '@overnightjs/core';

@Controller('api/user')
export class UserController {
    @Get('auth')
    private authUser(req: Request, res: Response) {
        req.session.authUser = 1;
        res.status(200).json({
            message: "Done",
        });
    }
}
