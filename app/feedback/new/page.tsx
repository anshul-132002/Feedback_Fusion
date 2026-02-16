"use client"

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CATEGORIES_TYPES } from "@/app/data/category-data";
import { useActionState } from "react";
import { SubmitFeedback } from "./action";
import { useRouter } from "next/navigation";

const initialState = {
    error: "",
    success: false
};

export default function NewFeedbackPage() {
    const router = useRouter();
    const [category, setCategory] = useState(CATEGORIES_TYPES[0]);
    // ✅ Correct order
    const [state, action, isPending] = useActionState(
        SubmitFeedback,
        initialState
    );
    useEffect(() => {
        if (state.success) {
            router.push("/feedback");
            router.refresh();
        }
    }, [state.success, router]);
    return (
        <div className="min-h-screen justify-center items-center pt-20 px-4 max-w-2xl mx-auto space-y-6">
            <Link href="/feedback">
                <Button variant="ghost" size={"lg"}>
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back to Feedback
                </Button>
            </Link>

            <Card>
                <CardHeader>
                    <CardTitle>New Feedback</CardTitle>
                    <CardDescription>
                        Share your ideas and suggestions with the community
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form action={action}>
                        <div className="space-y-4">

                            {/* Title */}
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    placeholder="Enter feedback title"
                                    required
                                />
                            </div>

                            {/* Category */}
                            <div className="space-y-2">
                                <Label>Category</Label>
                                <Select value={category} onValueChange={setCategory}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {CATEGORIES_TYPES.map((cat) => (
                                            <SelectItem key={cat} value={cat}>
                                                {cat}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <input type="hidden" name="category" value={category} />
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    name="description"
                                    id="description"
                                    placeholder="Enter feedback description"
                                    required
                                />
                            </div>

                            {/* Error Message */}
                            {state.error && (
                                <p className="text-red-500 text-sm">{state.error}</p>
                            )}

                            <div className="flex gap-2">
                                <Button variant="outline" asChild>
                                    <Link href="/feedback">Back</Link>
                                </Button>

                                <Button type="submit" disabled={isPending}>
                                    {isPending ? "Submitting..." : "Submit Feedback"}
                                </Button>
                            </div>

                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}