import * as fs from 'fs-extra';
import * as path from 'path';

export class FileOperations {
    static saveToFile(id: string, json: any) {
        const destinationPath = path.join(__dirname, '../assets', `${id}.json`);
        fs.writeFile(destinationPath, JSON.stringify(json));
        return '';
    }

    static async readFile(id: string) {
        const destinationPath = path.join(__dirname, '../assets', `${id}.json`);
        const fileContent = await fs.readFile(destinationPath, 'utf-8');
        return fileContent;
    }
}