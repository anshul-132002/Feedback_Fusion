import { toast } from "sonner";

export async function SubmitFeedback(
    prevState: { success: boolean; error: string },
    formData: FormData
) {
    const title = formData.get("title");
    const category = formData.get("category");
    const description = formData.get("description");

    if (!title || !category || !description) {
        return { success: false, error: "All fields are required" };
    }

    const loading = toast.loading("Submitting feedback...");

    try {
        const response = await fetch("/api/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                category,
                description
            })
        });
        if (!response.ok) {
            toast.error("Failed to submit feedback", {
                id: loading
            });
            return { success: false, error: "Failed to submit feedback" };
        }

        toast.success("Feedback submitted successfully", {
            id: loading
        });

        return { success: true, error: "" }; // ✅ consistent type
    } catch (error) {
        toast.error("Failed to submit feedback", {
            id: loading
        });
        return { success: false, error: "Failed to submit feedback" };
    }
}