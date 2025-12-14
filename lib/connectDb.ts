import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI;

// async function dbConnect() {
//   if (!MONGODB_URI) {
//     throw new Error('Please define the MONGODB_URI environment variable');
//   }
//   await mongoose.connect(MONGODB_URI);
//   return mongoose;
// }
// export default dbConnect;

const connection = {
    isConnected: 0,
}

const connectDb = async () => {
    if (connection.isConnected) {
        return;
    }
    try {
        const db = await mongoose.connect(MONGODB_URI!);
        connection.isConnected = db.connections[0].readyState;
        console.log("Database connected");
    } catch (error) {
        console.log("Database connection error", error);
    }
}
export default connectDb;