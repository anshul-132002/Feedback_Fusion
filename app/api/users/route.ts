import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json({
        name:"John Doe",
        age:30,
        email:"john@gmail.com",
        phone:"123-456-7890"
    });
}