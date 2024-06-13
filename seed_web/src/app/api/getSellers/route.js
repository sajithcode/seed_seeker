import {Seller} from "@/app/models/Seller";
const {mongoose} = require('mongoose');
import { NextResponse } from "next/server";

const connectToDatabase = async () => {
    if (mongoose.connections[0].readyState) {
        return;
    }

    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

export async function GET(req) {

    connectToDatabase();
    return Response.json(
        await Seller.find()
    );

}