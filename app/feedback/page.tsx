import { GradientHeader } from "@/components/gradientHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { ArrowRight, Icon, Map, Plus } from "lucide-react";
import Link from "next/link";
import { getCategoryDesign } from "../data/category-data";
import { Badge } from "@/components/ui/badge";
import FeedbackList from "@/components/feedbacklist";
import { Prisma } from "@/generated/prisma/client";
type PostWithRelations = Prisma.PostGetPayload<{
    include: {
        author: true;
        votes: true;
    };
}>;
export default async function RoadmapPage() {
    // Get the useId from clerk auth
    const { userId } = await auth();

    const posts = await prisma.post.findMany({
        include: {
            author: true,
            votes: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    const categories = await prisma.post.groupBy({
        by: ["category"],
        _count: true,
    });
    return (
        <div className="min-h-screen bg-background transition-colors p-5 flex flex-col gap-4">
            <GradientHeader title="Community Feedback" subtitle="Explore,vote and contribute to the features that matter most to you. Your voice shapes our product future">
                <div className="flex items-center justify-center mt-8 gap-4">
                    <Button asChild size={"lg"} className="bg-white text-blue-600 hover:bg-gray-100 font-semibold h-12 px-8">
                        <Link href="/feedback/new">
                            <Plus className="ml-2 w-4 h-4" />
                            New Feedback
                        </Link>
                    </Button>
                    <Button asChild size={"lg"} className="bg-white text-black hover:bg-gray-100 font-semibold h-12 px-8">
                        <Link href="/roadmap">View Roadmap
                            <Map className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </GradientHeader>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/*category sidebar */}
                <div className="lg:col-span-1">

                    <Card>
                        <CardHeader>
                            <CardTitle>Categories</CardTitle>
                            <CardDescription>
                                Browse feedback by category
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {categories.map((cat) => {
                                    const design = getCategoryDesign(cat.category);
                                    const Icon = design.icon;

                                    return (
                                        <div
                                            key={cat.category}
                                            className="group flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-all duration-200 ease-in-out cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`p-2 rounded-lg  ${design.light} ${design.border}`}
                                                >
                                                    <Icon className={`h-4 w-4 ${design.text} `} />
                                                </div>
                                                <span className="font-medium text-sm">
                                                    {cat.category}
                                                </span>
                                            </div>
                                            <Badge
                                                variant="outline"
                                                className={`${design.light} ${design.text} border-none`}
                                            >
                                                {cat._count}
                                            </Badge>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                {/*main content */}
                <div className="lg:col-span-3">
                    <FeedbackList initialPosts={posts as PostWithRelations[]} userId={userId} />
                </div>
            </div>


        </div>
    );
}