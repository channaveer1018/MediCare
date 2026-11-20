import React, { useEffect, useMemo, useState } from "react";
import { useRoutes } from "react-router-dom";
import type { We0AppConfig, We0Provider } from "./define-app";

const composeProviders = (
	providers: We0Provider[] | undefined,
	children: React.ReactNode,
) =>
	(providers ?? []).reduceRight(
		(nextChildren, Provider) => <Provider>{nextChildren}</Provider>,
		children,
	);

const ClientEffects: React.FC<{
	effects?: We0AppConfig["clientEffects"];
}> = ({ effects }) => {
	useEffect(() => {
		if (!effects?.length || typeof window === "undefined") {
			return;
		}

		const cleanups = effects
			.map((effect) => effect())
			.filter((cleanup): cleanup is () => void => typeof cleanup === "function");

		return () => {
			cleanups.forEach((cleanup) => cleanup());
		};
	}, [effects]);

	return null;
};

export const We0AppShell: React.FC<{
	config: We0AppConfig;
}> = ({ config }) => {
	const element = useRoutes(config.routes);
	const [authDialogOpen, setAuthDialogOpen] = useState(false);
	const slots = config.slots ?? {};
	const AuthDialog = slots.AuthDialog;
	const Toaster = slots.Toaster;
	const bootstrap = slots.bootstrap ?? [];

	const content = useMemo(
		() =>
			composeProviders(
				slots.providers,
				<>
					<ClientEffects effects={config.clientEffects} />
					{bootstrap.map((Bootstrap, index) => (
						<Bootstrap key={Bootstrap.displayName ?? Bootstrap.name ?? index} />
					))}
					{element}
					{AuthDialog ? (
						<AuthDialog
							open={authDialogOpen}
							onOpenChange={setAuthDialogOpen}
						/>
					) : null}
					{Toaster ? <Toaster /> : null}
				</>,
			),
		[
			AuthDialog,
			Toaster,
			authDialogOpen,
			bootstrap,
			config.clientEffects,
			element,
			slots.providers,
		],
	);

	return <>{content}</>;
};

export const withErrorBoundary = (
	config: We0AppConfig,
	children: React.ReactNode,
) => {
	const ErrorBoundary = config.slots?.ErrorBoundary;
	return ErrorBoundary ? <ErrorBoundary>{children}</ErrorBoundary> : children;
};
