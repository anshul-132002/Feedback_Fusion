import { STATUS_ORDER } from "@/app/data/status-data";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { userId } = await auth()
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }
        //check if user is admin or not 
        const user = await prisma.user.findUnique({
            where: {
                clerkUserId: userId
            }
        })
        if (!user || user.role !== "admin") {
            return NextResponse.json({ error: "admin access required" }, { status: 403 })
        }
        const { status } = await request.json()
        const { id: postId } = await params
        const numericPostId = Number(postId)
        //validate status
        if (!STATUS_ORDER.includes(status)) {
            return NextResponse.json({ error: "Invalid status" }, { status: 400 })
        }
        //UPDATE POST 
        const updatePost = await prisma.post.update({
            where: {
                id: numericPostId
            },
            data: {
                status
            },
            include: {
                author: true,
                votes: true
            }
        })
        return NextResponse.json(updatePost)
    } catch (error) {
        console.error("Error updating post:", error)
        return NextResponse.json({ error: "Failed to update post" }, { status: 500 })
    }
}
