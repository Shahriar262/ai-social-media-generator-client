import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar"; // আমরা আগের ধাপে যে Sidebar কথা বলেছিলাম

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ১. চেক করা ইউজার লগইন আছে কি না
  const { userId, sessionClaims } = await auth();

  // ২. যদি লগইন না থাকে, তবে তাকে লগইন পেজে পাঠিয়ে দাও
  if (!userId) {
    redirect("/sign-in");
  }

  // ৩. মেটাডাটা থেকে রোল বের করা
  const role = sessionClaims?.metadata?.role || "user";

  return (
    <div className="flex min-h-screen bg-slate-950">
      {/* বাম পাশে সাইডবার (আমরা কিছুক্ষণ আগে যেটা নিয়ে কথা বললাম) */}
      <aside className="fixed inset-y-0 left-0 w-64 hidden md:block border-r border-white/5 bg-slate-900/50 backdrop-blur-xl">
        <Sidebar role={role} />
      </aside>

      {/* ডান পাশে মেইন কন্টেন্ট এলাকা */}
      <main className="flex-1 md:pl-64 flex flex-col pt-20">
        <div className="p-8 max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}