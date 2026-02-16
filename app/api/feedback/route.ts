import { prisma } from "@/lib/prisma";
import syncUser from "@/lib/sync-user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const dbUser = await syncUser();
        if (!dbUser) return new NextResponse("Unauthorized", { status: 401 });
        const body = await request.json();
        const { title, description, category } = body;
        if (!title || !description || !category) {
            return new NextResponse("Missing required fields", { status: 400 });
        }
        const post = await prisma.post.create({
            data: {
                title,
                description,
                category,
                authorId: dbUser.id
            }
        })
        return NextResponse.json(post);
    } catch (error) {
        console.error("Error creating post:", error);
        return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
    }

}

export async function GET() {
    try {
        const posts = await prisma.post.findMany({
            include: {
                author: true,
                votes: true
            },
            orderBy: {
                createdAt: "desc"
            }
        })
        return NextResponse.json(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
}