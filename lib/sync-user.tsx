import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "./prisma";

export default async function syncUser() {
    try {
        // get clerk user
        const clerkUser = await currentUser();
        if (!clerkUser) return null;
        const email = clerkUser.emailAddresses[0].emailAddress;
        const userId = clerkUser.id;
        const firstName = clerkUser.firstName;
        const lastName = clerkUser.lastName;
        const imageUrl = clerkUser.imageUrl;
        if (!email) throw new Error("Email not found");
        let dbUser = await prisma.user.findUnique({
            where: {
                clerkUserId: userId
            }
        })
        if (dbUser) {
            //update existing user
            dbUser = await prisma.user.update({
                where: {
                    clerkUserId: userId
                },
                data: {
                    email,
                    name: `${firstName || ""} ${lastName || ""}`,
                    image: imageUrl
                }
            })
        } else {
            const userCount = await prisma.user.count()
            const isFirstUser = userCount === 0;
            //create new user
            dbUser = await prisma.user.create({
                data: {
                    clerkUserId: userId,
                    email,
                    name: `${firstName || ""} ${lastName || ""}`,
                    image: imageUrl,
                    role: isFirstUser ? "admin" : "user"
                }
            })
        }
        return dbUser;

    } catch (error) {
        console.error("Error syncing user:", error);
        throw error;
    }
}