
interface GradientHeaderProps {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
}
export const GradientHeader = ({
    title,
    subtitle,
    children
}: GradientHeaderProps) => {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-6">

            <div className="relative z-10">
                <h1 className="text-4xl font-bold">{title}</h1>
                {subtitle && <p className="mt-2 text-xl font-semibold text-blue-100 max-w-xl">{subtitle}</p>}
                {children}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-25">
            </div>
        </div>
    )
}


{
    /*
         <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
//         <div className="space-y-8">
//           <div className="space-y-4">
//             <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-gray-800 rounded-full">
//               <span className="text-blue-700 dark:text-blue-400 font-semibold text-sm">
//                 ✨ Welcome to LandingHub
//               </span>
//             </div>

//             <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
//               Build Amazing Landing Pages
//             </h1>

//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
//               Create stunning, conversion-optimized landing pages without
//               any coding. Launch your next big idea in minutes.
//             </p>
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-8 py-6 h-auto hover:from-blue-700 hover:to-purple-700">
//               Get Started Free
//               <ArrowRight className="ml-2 w-5 h-5" />
//             </Button>

//             <Button
//               variant="outline"
//               className="text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 text-lg px-8 py-6 h-auto hover:bg-gray-50 dark:hover:bg-gray-900"
//             >
//               Watch Demo
//             </Button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-6 pt-4">
//             {[
//               ["10K+", "Active Users"],
//               ["50M+", "Pages Created"],
//               ["99.9%", "Uptime"],
//             ].map(([value, label]) => (
//               <div key={label}>
//                 <p className="text-3xl font-bold text-gray-900 dark:text-white">
//                   {value}
//                 </p>
//                 <p className="text-gray-600 dark:text-gray-400 text-sm">
//                   {label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Visual */}
//         <div className="relative h-96 lg:h-full">
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl blur-3xl opacity-20"></div>
//           <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl h-80 lg:h-96 flex items-center justify-center text-white">
//             <div className="text-center space-y-4">
//               <BarChart3 className="w-16 h-16 mx-auto opacity-80" />
//               <p className="text-lg font-semibold">Beautiful Dashboard</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>

{/* Features Section */ }
//   <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
//     <div className="max-w-7xl mx-auto">
//       <div className="text-center space-y-4 mb-16">
//         <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
//           Powerful Features
//         </h2>
//         <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//           Everything you need to create and launch landing pages that
//           convert
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {[
//           {
//             icon: Zap,
//             title: "Lightning Fast",
//             description: "Pages load in milliseconds. Optimized for speed.",
//           },
//           {
//             icon: Globe,
//             title: "Global Reach",
//             description: "Deploy worldwide with our global CDN.",
//           },
//           {
//             icon: BarChart3,
//             title: "Analytics Ready",
//             description: "Track visitors and conversions easily.",
//           },
//         ].map((feature, index) => {
//           const Icon = feature.icon;
//           return (
//             <div
//               key={index}
//               className="group p-8 rounded-xl border border-gray-200 dark:border-gray-800 
//                          bg-white dark:bg-gray-900
//                          hover:border-blue-400 hover:shadow-lg transition-all"
//             >
//               <Icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
//               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 {feature.description}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   </section>

{/* Benefits Section */ }
//   <section className="py-20 px-4 sm:px-6 lg:px-8">
//     <div className="max-w-7xl mx-auto space-y-8">
//       {[
//         "No coding required – drag & drop builder",
//         "Mobile responsive by default",
//         "24/7 customer support",
//         "Secure & compliant",
//       ].map((benefit, index) => (
//         <div key={index} className="flex items-center gap-4">
//           <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
//           <p className="text-lg text-gray-700 dark:text-gray-300">
//             {benefit}
//           </p>
//         </div>
//       ))}
//     </div>
//   </section>

{/* CTA Section */ }
//   <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
//     <div className="max-w-4xl mx-auto text-center space-y-8">
//       <h2 className="text-4xl lg:text-5xl font-bold text-white">
//         Ready to Launch Your Landing Page?
//       </h2>
//       <p className="text-xl text-blue-100 dark:text-blue-200">
//         Join thousands of businesses creating beautiful landing pages
//       </p>
//       <Button className="bg-white text-blue-600 text-lg px-8 py-6 h-auto hover:bg-gray-100 font-semibold">
//         Get Started Now
//         <ArrowRight className="ml-2 w-5 h-5" />
//       </Button>
//     </div>
//   </section>
// */
// }