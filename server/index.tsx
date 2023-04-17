/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';

// игнорируем импорты `.scss`
require('ignore-styles');

// транспилируем на лету импорты
require('@babel/register')({
  configFile: path.resolve(__dirname, '../../babel.config.js'),
});

// импортируем express-сервер
require('./server.js');
