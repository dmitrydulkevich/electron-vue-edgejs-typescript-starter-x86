import * as egde from 'electron-edge-js';
import { Func } from 'electron-edge-js';
import * as path from 'path';
import DotnetResponse from './dotnet-responce';

class IdReader {
    private readonly dotnetDir = path.join(path.resolve(), 'src/dotnet');
    private readonly idReaderDir = path.join(this.dotnetDir, 'id-reader');
    private readonly pathToSdk = 'dlls/MMMReaderDotNet40.dll';

    initReader: Func<any, any>;
    readDocument: Func<any, any>;

    constructor() {
        this.initReader = this.getInitReaderFunc();
        this.readDocument = this.getReadDocumentFunc();
    }

    private getInitReaderFunc() {
        return egde.func({
            source: path.join(this.idReaderDir, 'InitReader.csx'),
            references: [path.join(this.dotnetDir, this.pathToSdk)]
        });
    }

    private getReadDocumentFunc() {
        return egde.func({
            source: path.join(this.idReaderDir, 'ReadDocument.csx'),
            references: [path.join(this.dotnetDir, this.pathToSdk)]
        });
    }
}

const idReader = new IdReader();

export {
    idReader
};

export default DotnetResponse;
