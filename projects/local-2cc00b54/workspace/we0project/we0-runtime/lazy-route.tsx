import {
	lazy,
	Suspense,
	type ComponentType,
	type ReactNode,
} from "react";

export const defaultLazyRouteFallback = (
	<div className="min-h-screen bg-background p-8">
		<div className="space-y-4">
			<div className="h-12 w-full animate-pulse rounded-md bg-primary/10" />
			<div className="h-64 w-full animate-pulse rounded-md bg-primary/10" />
			<div className="h-32 w-full animate-pulse rounded-md bg-primary/10" />
		</div>
	</div>
);

export interface LazyRouteProps {
	children: ReactNode;
	fallback?: ReactNode;
}

/**
 * Suspense boundary for React.lazy() route elements.
 * Prefer {@link lazyRoute} so callers cannot forget this wrapper.
 */
export const LazyRoute = ({
	children,
	fallback = defaultLazyRouteFallback,
}: LazyRouteProps) => {
	return <Suspense fallback={fallback}>{children}</Suspense>;
};

type LazyRouteModule<P extends object> = { default: ComponentType<P> };

/**
 * Creates a route element that always pairs React.lazy with Suspense.
 * Use in routes as: `{ path: "/x", element: <Page /> }` — do not wrap again.
 */
export function lazyRoute<P extends object = Record<string, never>>(
	factory: () => Promise<LazyRouteModule<P>>,
	fallback: ReactNode = defaultLazyRouteFallback,
): ComponentType<P> {
	const LazyComponent = lazy(factory) as ComponentType<P>;

	const LazyRoutePage = (props: P) => (
		<LazyRoute fallback={fallback}>
			<LazyComponent {...props} />
		</LazyRoute>
	);

	const moduleId = String(factory);
	LazyRoutePage.displayName = `LazyRoute(${moduleId.slice(0, 80)})`;
	return LazyRoutePage;
}
