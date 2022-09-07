
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const mongoose = require("mongoose");
require("dotenv").config();
const { DB_PASSWORD, DB_NAME, DB_USERNAME} = process.env;
  

const database = async () => {
  const db = await mongoose.connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@bobsburgers.kc6a0tc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`);
  console.log("Database is connected to", db.connection.name);
};

database();

module.exports = mongoose;

