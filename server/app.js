import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path from 'path';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(logger('dev'));

// static 파일 설정
app.use(express.static(path.resolve('../client/public')));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log('http://localhost:3000'));
