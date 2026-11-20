import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useI18n } from "@/i18n";

type FinishResult = { next?: string; failed?: boolean };

const inflight = new Map<string, Promise<FinishResult>>();

// 只换一次码
function finishLogin(code: string, state: string) {
  const key = `${state}:${code}`;
  const existing = inflight.get(key);
  if (existing) return existing;
  const task = fetch("/api/auth/we0/finish", {
    method: "POST",
    credentials: "include",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ code, state }),
  })
    .then(async (response) => {
      const body = await response.json().catch(() => ({}));
      if (!response.ok || !body?.success || !body?.data?.next) return { failed: true };
      return { next: String(body.data.next) };
    })
    .catch(() => ({ failed: true }));
  inflight.set(key, task);
  return task;
}

// we0 回跳加载
const We0AuthCallbackPage: React.FC = () => {
  const [params] = useSearchParams();
  const { locale } = useI18n();
  const zh = locale.startsWith("zh");
  const [error, setError] = useState("");
  const next = params.get("next") || "/";

  useEffect(() => {
    const code = params.get("code") || "";
    const state = params.get("state") || "";
    const oauthError = params.get("error") || "";
    if (oauthError || !code || !state) {
      setError(zh ? "登录没有完成，请重新发起。" : "Sign-in did not finish. Please try again.");
      return;
    }

    let active = true;
    finishLogin(code, state).then((result) => {
      if (!active) return;
      if (result.next) {
        window.location.replace(result.next);
        return;
      }
      setError(zh ? "登录没有完成，请重新发起。" : "Sign-in did not finish. Please try again.");
    });
    return () => {
      active = false;
    };
  }, [params, zh]);

  const retry = () => {
    window.location.assign(`/api/auth/we0/start?redirect=${encodeURIComponent(next)}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {zh ? "身份验证" : "Authentication"}
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-card-foreground">
          {zh ? "正在登录" : "Signing in"}
        </h1>
        {error ? (
          <>
            <p className="mt-4 text-sm text-red-600">{error}</p>
            <Button type="button" className="mt-6 w-full" onClick={retry}>
              {zh ? "重新登录" : "Try again"}
            </Button>
          </>
        ) : (
          <>
            <div className="mx-auto mt-8 h-8 w-8 animate-spin rounded-full border-2 border-muted border-t-foreground" />
            <p className="mt-4 text-sm text-muted-foreground">
              {zh ? "正在通过 we0 登录，请稍候。" : "Continuing with we0. Please wait."}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default We0AuthCallbackPage;
