import React, { createContext, useContext } from "react";
import type { SsrDataStore } from "./create-ssr-page";

const SsrDataContext = createContext<SsrDataStore>({});

export const getBrowserSsrData = (): SsrDataStore => {
	if (typeof window === "undefined") {
		return {};
	}

	return window.__SSR_DATA__ ?? {};
};

export const SsrDataProvider: React.FC<{
	data?: SsrDataStore;
	children: React.ReactNode;
}> = ({ data, children }) => (
	<SsrDataContext.Provider value={data ?? {}}>
		{children}
	</SsrDataContext.Provider>
);

export const useSsrData = <TStore extends SsrDataStore = SsrDataStore>() =>
	useContext(SsrDataContext) as TStore;

export const usePageSsrData = <TData,>(key: string): TData | undefined => {
	const data = useSsrData();
	return data[key] as TData | undefined;
};
