import { NextRequest } from "next/server";

// backend route handler
export default async function POST(req: NextRequest){
    // extract the body
    const body = await req.json();

    // store the body in the database

    console.log(body);

    return Response.json({
        message: "You are logged in"
    })
}
