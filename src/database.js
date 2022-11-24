import mongoose from 'mongoose';
import config from './config';

(async () => {

   try {
      const db = await mongoose.connect(config.mongodb_url);
      console.log('conectado con:', db.connection.name);
   } catch (error) {
      console.error(error);  
   }
})();