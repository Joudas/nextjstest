import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const take = searchParams.get("take") ?? "10";
    console.log(take)
    return NextResponse.json({ message: 'Seed Executed' })
}
