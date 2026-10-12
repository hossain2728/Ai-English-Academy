import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { loadThreads, newThreadId } from "@/lib/threads";

export const Route = createFileRoute("/_app/chat/")({
  component: IndexRedirect,
});

function IndexRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    const list = loadThreads();
    const id = list[0]?.id ?? newThreadId();
    navigate({ to: "/chat/$threadId", params: { threadId: id }, replace: true });
  }, [navigate]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="text-sm text-muted-foreground">লোড হচ্ছে...</div>
    </div>
  );
}
