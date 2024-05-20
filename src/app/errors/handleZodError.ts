import { ZodError } from 'zod';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

function handleZodError(error: ZodError): TGenericErrorResponse {
    const errors: TErrorSources = error.issues.map((issue) => {
        return {
            path: issue.path[issue.path.length - 1],
            message: issue.message,
        };
    });
    const statusCode = 500;
    const message = 'Validation Error';
    return { statusCode, message, errorSources: errors };
}

export default handleZodError;
