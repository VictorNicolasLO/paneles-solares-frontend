import * as dotenv from 'dotenv';
import * as fs from 'fs';
export const Configuration = dotenv.parse(
  fs.readFileSync(`.env.${process.env.NODE_ENV || 'dev'}`)
);
