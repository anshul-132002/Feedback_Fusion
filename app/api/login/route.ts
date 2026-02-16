import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  return NextResponse.json(
    {
      message: "Login successful",
      success: true,
      email,
    },
    { status: 200 }
    
  );
}
