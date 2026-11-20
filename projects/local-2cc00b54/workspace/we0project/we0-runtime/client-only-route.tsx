import { useEffect, useState, type ReactNode } from "react";
import { LazyRoute, defaultLazyRouteFallback } from "./lazy-route";

export interface ClientOnlyRouteProps {
	children: ReactNode;
	fallback?: ReactNode;
}

/**
 * Keeps browser-only routes out of SSR while preserving identical server and
 * initial client markup for hydration. Prefer pairing with {@link lazyRoute}
 * (or wrap raw React.lazy children — this still provides Suspense).
 */
export const ClientOnlyRoute = ({
	children,
	fallback = defaultLazyRouteFallback,
}: ClientOnlyRouteProps) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <>{fallback}</>;
	}

	return <LazyRoute fallback={fallback}>{children}</LazyRoute>;
};
