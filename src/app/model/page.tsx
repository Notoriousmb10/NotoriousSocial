import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    id: string;
    fullName: string;
    email: string;
    image: string;
}

const userSchema: Schema = new Schema({
    id: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true },
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;