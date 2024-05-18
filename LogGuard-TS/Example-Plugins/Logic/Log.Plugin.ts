import type { Log } from "../../Types";
import * as fs from 'fs'

export default class log implements Log {
    func(message: string,logFile: fs.WriteStream){
        logFile.write(message)
    };
    params: [message: string,logFile: fs.WriteStream];
    returnType: void;
    execute(message: string,logFile: fs.WriteStream) {
        this.func(message,logFile)
    }

}
// E.O.F.