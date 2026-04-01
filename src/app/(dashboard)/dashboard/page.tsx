// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

// export default async function DashboardPage() {
//   const { sessionClaims } = await auth();

//   // আপনার metadata থেকে রোলটি বের করে আনা হচ্ছে
//   const role = sessionClaims?.metadata?.role;

//   // ১. ইউজার যদি Admin হয়, তাকে /dashboard/admin এ পাঠান
//   if (role === "admin") {
//     redirect("/dashboard/admin");
//   }

//   // ২. ইউজার যদি সাধারণ User হয়, তাকে /dashboard/user এ পাঠান
//   if (role === "user") {
//     redirect("/dashboard/user");
//   }

//   // ৩. যদি কোনো রোল সেট করা না থাকে (নতুন ইউজার), তবে তাকে হোম বা প্রোফাইলে পাঠান
//   redirect("/");
// }


import { auth } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const { sessionClaims } = await auth();
  const role = sessionClaims?.metadata?.role || "user"; 

  return (
    <div className=" p-8 rounded-lg shadow-sm border ">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Welcome to your Dashboard! 🚀
      </h1>
      <p className="text-gray-600 mb-6">
        You are currently logged in as: <span className="font-mono bg-blue-100 text-blue-700 px-2 py-1 rounded">{role}</span>
      </p>

      
      
      
      
    </div>
  );
}