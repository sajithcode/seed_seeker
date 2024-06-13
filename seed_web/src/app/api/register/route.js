import { Seller } from "../../models/Seller";
import { User } from "../../models/User";
import mongoose from "mongoose";

export async function POST(req) {
    const body = await req.json();
    mongoose.connect(process.env.MONGO_URL);

    let createdEntity;
    if (body.type === 'seller') {
        createdEntity = await Seller.create(body)
    } else {
        createdEntity = await User.create(body)
    }
    return Response.json(createdEntity);
}