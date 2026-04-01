import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import LayoutClient from "./layout-client";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return <LayoutClient>{children}</LayoutClient>;
}