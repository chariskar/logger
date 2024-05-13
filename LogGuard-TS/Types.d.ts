type PluginType = Formatter | Log | CreateLogFile  | Close | LoadJson | LogFileName | any
import {WriteStream} from 'fs'

interface Plugin {
    execute(...args: any[]): any;
}

interface Formatter extends Plugin {
    func: (...args: any[]) => any;
    params: [
        level: string,
        message: string,
        timestamp: string,
        format: Settings['Formats'],
        context?: undefined];
    returnType: string;
}

interface Log extends Plugin{
    func: (...args: any[]) => any;
    params: [
        timestamp: string,
        message: string,
        LogFile: WriteStream,
    ];
    returnType: void;
}

interface LogFileName extends Plugin{
    func: (...args: any[]) => any;
    params: [
        path: string,
        type: string];
    returnType: string;
}

interface CreateLogFile extends Plugin{
    func: (...args: any[]) => any;
    params: [
            endsWith: boolean,
            logFileName: string,
            combineLoggers: boolean,
            openLoggers: {},
            logFilePath: string
        ]
    returnType: WriteStream;
}


interface Close extends Plugin{
    func: (...args: any[]) => any;
    params: [
        logFile: WriteStream,
        openloggers: {},
        logFileName: string
    ]
    returnType: void

}

interface LoadJson {
    func: (...args: any[]) => any;
    params: [path: string];
    returnType: {};
}

interface Settings{
    LogLevels: {
        [key: string]: number;
    };
    Formats: {
        [key: string]: string;
    };
}


export {
    PluginType,
    Plugin,
    Settings,
    Log,
    CreateLogFile,
    LoadJson,
    Close,
    Formatter,
    LogFileName
};
// E.O.F.