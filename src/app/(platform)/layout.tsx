import type { ReactNode } from "react";

import AppShell from "@/components/platform/AppShell";

interface PlatformLayoutProps {
  children: ReactNode;
}

export default function PlatformLayout({
  children,
}: PlatformLayoutProps) {
  return <AppShell>{children}</AppShell>;
}
