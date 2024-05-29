import mongoose from "mongoose";
import { Seed } from "../../models/Seeds";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        mongoose.connect(process.env.MONGO_URL);
        const data = await req.json();

        const seedItem = await Seed.create(data);

        console.log({ seedItem });

        return NextResponse.json({data: data}, {status: 201});
    } catch (error) {
        console.error('Error creating seed item:', error);
        return NextResponse.json({error: error}, {status: 500});
    }
}

export async function GET() {
    mongoose.connect(process.env.MONGO_URL);

    return Response.json(
        await Seed.find()
    );

}
