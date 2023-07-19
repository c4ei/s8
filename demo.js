/*
cd /home/dev/www/facebook/s8
node demo.js
*/

const { Client } = require('@threadsjs/threads.js');
// import { Client } from '../src/threads.js';
// import dotenv from 'dotenv';
// ######################################################################
const mysql = require('mysql2/promise'); // mysql2 모듈 사용
// const bitcoin = require('bitcoinjs-lib');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const dotenv = require('dotenv');
dotenv.config();
// MySQL 데이터베이스 연결 설정
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
};
const pool = mysql.createPool(dbConfig);
// ######################################################################

(async () => {
	const client = new Client();
	// You can also specify a token: const client = new Client({ token: 'token' });
	// await client.login(process.env.USER_NAME, process.env.PASSWORD);
	// await client.users.fetch(60592010785).then(user => {
	// 	console.log(user);
	// });

    // await client.feeds.fetch("c4ei_net").then(user => {
    //     console.log(user);
	// });
    // client.feeds.fetchThreads

    await client.users.search("c4ei_net", 10).then(user => {
        console.log(user);
    });

})();
