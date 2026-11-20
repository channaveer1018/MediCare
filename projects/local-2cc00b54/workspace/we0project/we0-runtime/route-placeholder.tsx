import React, { useCallback, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useI18n } from './i18n';

interface RoutePlaceholderProps {
	/** 嵌套在父布局内时使用，避免占满整屏 */
	variant?: "fullscreen" | "embedded";
}

const RoutePlaceholder: React.FC<RoutePlaceholderProps> = ({
	variant = "fullscreen",
}) => {
	const { pathname } = useLocation();
	const { t } = useI18n();
	const [sent, setSent] = useState(false);

	const shellClass =
		variant === "fullscreen"
			? "min-h-screen bg-background"
			: "min-h-[min(50vh,28rem)]";

	const handleGenerate = useCallback(() => {
		const msg = t('routePlaceholder.generateMsg', { pathname });
		try {
			if (window.parent && window.parent !== window) {
				window.parent.postMessage(
					{ type: 'we0-generate-page', pathname, message: msg },
					'*',
				);
			}
		} catch (e) {}
		setSent(true);
	}, [pathname, t]);

	return (
		<div
			className={`flex flex-col items-center justify-center p-6 ${shellClass}`}
		>
			<div className="w-full max-w-lg space-y-6 rounded-lg border border-border bg-card p-8 shadow-sm">
				<div className="space-y-1">
					<p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
						{t('routePlaceholder.label')}
					</p>
					<code className="block break-all rounded-md bg-muted px-3 py-2 text-sm font-mono text-foreground">
						{pathname}
					</code>
				</div>

				<div className="text-sm leading-relaxed text-card-foreground">
					<p>{t('routePlaceholder.desc', { pathname })}</p>
				</div>

				<div className="flex flex-col gap-3">
					<button
						onClick={handleGenerate}
						disabled={sent}
						className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
					>
						{sent ? '✓ ' : ''}{t('routePlaceholder.generateBtn')}
					</button>

					<Link
						to="/"
						className="text-sm font-medium text-primary underline-offset-4 hover:underline"
					>
						{t('routePlaceholder.backHome')}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RoutePlaceholder;
