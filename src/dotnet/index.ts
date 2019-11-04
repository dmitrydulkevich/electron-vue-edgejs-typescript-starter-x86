import * as edge from 'electron-edge-js';
import { Func } from 'electron-edge-js';
import * as path from 'path';
import DotnetResponse from './dotnet-responce';

const dotnetDir = path.join(path.resolve(), getDotnetDir());

console.log('dotnet:', path.resolve());

function getDotnetDir() {
    if (process.env.NODE_ENV === 'production') {
        return 'resources/src/dotnet';
    }

    return 'src/dotnet';
}

class IdReader {
    initReader: Func<any, any>;
    readDocument: Func<any, any>;

    private readonly idReaderDir = path.join(dotnetDir, 'id-reader');
    private readonly pathToSdk = 'dlls/MMMReaderDotNet40.dll';

    constructor() {
        this.initReader = this.getInitReaderFunc();
        this.readDocument = this.getReadDocumentFunc();
    }

    private getInitReaderFunc() {
        return edge.func({
            source: path.join(this.idReaderDir, 'InitReader.csx'),
            references: [path.join(dotnetDir, this.pathToSdk)]
        });
    }

    private getReadDocumentFunc() {
        return edge.func({
            source: path.join(this.idReaderDir, 'ReadDocument.csx'),
            references: [path.join(dotnetDir, this.pathToSdk)]
        });
    }
}

const idReader = new IdReader();

export { idReader };

export default DotnetResponse;
