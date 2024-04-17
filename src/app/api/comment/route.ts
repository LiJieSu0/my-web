import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        hello:"worldddd",
    });
}

export async function POST(req:Request){
    const data=await req.json();
    console.log("Post received");
    console.log(JSON.stringify(data));
    return NextResponse.json(data);
}