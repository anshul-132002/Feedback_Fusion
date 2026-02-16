import AdminFeedbackTable from "@/components/admin-feedback-table";
import { GradientHeader } from "@/components/gradientHeader";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
    const { userId } = await auth();
    if (!userId) {
        redirect("/sign-in")
    }
    const user = await prisma.user.findUnique({
        where: {
            clerkUserId: userId,
        },
    });
    if (user?.role !== "admin" || !user) {
        redirect("/")
    }
    const posts = await prisma.post.findMany({
        include: {
            author: true,
            votes: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return (
        <div className="container mx-auto p-5 flex flex-col gap-4 ">
            <GradientHeader
                title="Admin Dashboard"
                subtitle="Manage feedbacks and update their status"
            />
            <AdminFeedbackTable posts={posts} />
        </div>
    );
}