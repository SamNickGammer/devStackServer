require('dotenv').config();

let PORT = process.env.PORT || 5003;
let MONGODB_URI =
  'mongodb+srv://samnick:57489Raj@stackunderflow.3q0luft.mongodb.net/?retryWrites=true&w=majority';
let SECRET =
  '3bef1727e198d338fae7f685887f144cb0fb23323cc3ba8998c6830152de317a585372bd1d8ede7b8007bc1eb065b8d56783ce562db1a0276dcbff835a9942cd';

module.exports = {
  PORT,
  MONGODB_URI,
  SECRET,
};
