import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB database connected successfully');
    } catch (error) {
        console.error(error);
    }
}

export default connectDatabase;