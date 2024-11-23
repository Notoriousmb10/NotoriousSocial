import User from '../../model/page';
import { connectDB } from '../../mongoDB/page';



const handler = async (req: any, res: any) => {
    const { id, fullName, email, image } = req.body;

    try {
        await connectDB();
        const user = new User({
            id,
            fullName,
            email,
            image,
        });

        await user.save();
        res.status(201).json({ message: 'User added' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}


export default handler;
