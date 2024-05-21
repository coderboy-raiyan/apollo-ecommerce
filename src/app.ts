import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    cors({
        origin: ['*'],
        credentials: true,
    })
);

app.get('/', (req: Request, res: Response) => {
    res.status(httpStatus.OK).json({ success: true, message: 'Server is healthy!' });
});

app.use('/api', router);

// Not found
app.use(notFound);

// global Error Handler
app.use(globalErrorHandler);

export default app;
