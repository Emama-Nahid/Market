const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGODB_CONNECTION_URI || "mongodb+srv://Admin:admin123@cluster0.lc8hf.mongodb.net/?retryWrites=true&w=majority", {})

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB