"use client";

import { GradientHeader } from "@/components/gradientHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, MessageSquare, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-950 transition-colors p-5">
      {/* Hero Section */}
      <GradientHeader
        title="Shape the future of our products"
        subtitle="Feedback Fusion is where your ideas come to life. Suggest features, vote on what matters most, and follow our public roadmap."
      >
        <div className="flex items-center justify-center mt-8 gap-4">
          <Button asChild size={"lg"} className="bg-white text-black hover:bg-gray-100 font-semibold h-12 px-8">
            <Link href="/feedback/new">
              Submit Feedback <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size={"lg"} className="bg-white text-black hover:bg-gray-100 font-semibold h-12 px-8">
            <Link href="/roadmap">View Roadmap</Link>
          </Button>
        </div>
      </GradientHeader>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl ">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Submit Ideas",
                description: "Share your suggestions and feature requests with the community."
              },
              {
                icon: BarChart3,
                title: "Vote & Prioritize",
                description: "Upvote ideas you love to help us understand what matters most."
              },
              {
                icon: Users,
                title: "Track Progress",
                description: "Follow our public roadmap to see what we're working on next."
              },
              {
                icon: Zap,
                title: "See Results",
                description: "Watch as your feedback transforms into real features and improvements."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all hover:shadow-lg">
                <feature.icon className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "1,234+", label: "Suggestions" },
              { value: "8,901+", label: "Votes Cast" },
              { value: "256+", label: "Features Shipped" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
