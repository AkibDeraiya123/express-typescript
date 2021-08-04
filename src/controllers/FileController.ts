import { Request, Response } from 'express';
import { Controller, ClassMiddleware, Get, Post } from '@overnightjs/core';
import { authMiddleware } from '../middleware/auth';
import { FileOperations } from '../lib/fileOperations';

@Controller('api/file')
@ClassMiddleware(authMiddleware)
export class FileController {
    @Post('save/:id')
    private async saveJSonToFile(req: Request, res: Response) {
        await FileOperations.saveToFile(req.params.id, req.body);
        res.status(200).json({
            message: "Done",
        });
    }

    @Get('get/:id')
    private async readFileJson(req: Request, res: Response) {
        const fileContent = await FileOperations.readFile(req.params.id);

        res.status(200).json({
            data: fileContent ? JSON.parse(fileContent) : {},
        });
    }
}
