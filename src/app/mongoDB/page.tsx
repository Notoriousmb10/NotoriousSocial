import mongoose from "mongoose";

declare global {
    var mongoose: {
        conn: mongoose.Connection | null;
        promise: Promise<mongoose.Connection> | null;
    };
}

const MONGODB_URL = process.env.MONGODB_URL || 'your_mongodb_connection_string';

if (!MONGODB_URL) {
    throw new Error('Please define the MONGODB_URL environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export const connectDB = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts: mongoose.ConnectOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
            return mongoose.connection;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
};