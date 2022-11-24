import { config } from 'dotenv';
config();

export default {
    mongodb_url: process.env.MONGODB_URI 
}