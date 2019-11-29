import {Catch, ExceptionFilter, HttpException, ArgumentsHost, Logger} from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost){
        const ctx = host.switchToHttp(); //retrieve http arguments
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        
        const errorResponse = {
            code: status,
            timestamp: new Date().toString(),
            path: request.url,
            method: request.method,
            message: exception.message.error
        };
        Logger.error(
            `${request.method} ${request.url}`,
            JSON.stringify(errorResponse),
        )
        response.status(status).json(errorResponse)
    }
}