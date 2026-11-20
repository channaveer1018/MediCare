import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useI18n } from "@/i18n";

// 跳转 we0 登录
export function We0LoginButton({ redirect }: { redirect?: string }) {
  const { locale } = useI18n();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("/api/auth/we0")
      .then((response) => response.json())
      .then((body) => {
        if (active) setEnabled(Boolean(body?.data?.enabled));
      })
      .catch(() => {
        if (active) setEnabled(false);
      });
    return () => {
      active = false;
    };
  }, []);

  if (!enabled) return null;

  const startLogin = () => {
    const next = redirect && redirect.startsWith("/") && !redirect.startsWith("//")
      ? redirect
      : `${window.location.pathname}${window.location.search}`;
    window.location.assign(`/api/auth/we0/start?redirect=${encodeURIComponent(next || "/")}`);
  };

  return (
    <Button type="button" variant="outline" className="mb-4 w-full" onClick={startLogin}>
      {locale.startsWith("zh") ? "使用 we0 登录" : "Continue with we0"}
    </Button>
  );
}
