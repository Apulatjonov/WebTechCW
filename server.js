const mongose = require('mongoose');
require('dotenv').config();

const connection = async () => {
    try{

        const conn = await mongose.connect(process.env.MONGO_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('MongoDB Connected!');
    }catch(e){
        console.log(e);
        process.exit(1);
    }
}

module.exports = connection;