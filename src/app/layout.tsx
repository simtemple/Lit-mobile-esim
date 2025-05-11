import React from "react";
import type { Metadata, Viewport } from "next";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import { Flex } from "@tremor/react";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

import "./globals.scss";

export const metadata: Metadata = {
	title: {
		template: "HypeSIM | %s",
		default: "Instant Mobile Access Across the Globe.",
	},
	description: "Instant global eSIM plans for travelers and digital nomads. Affordable, reliable, and available directly through our iOS app.",
	keywords: ["eSIM", "global eSIM", "travel eSIM", "instant eSIM", "HypeSIM", "iOS eSIM", "affordable data plans"],
	authors: [{ name: "HypeSIM Team", url: "https://hypesim.io" }],
	creator: "HypeSIM",
	openGraph: {
		title: "HypeSIM | Instant Mobile Access Across the Globe.",
		description: "Stay connected worldwide with HypeSIM. Affordable and reliable eSIM plans, activated instantly via our app.",
		url: "https://hypesim.io",
		siteName: "HypeSIM",
		images: [
			{
				url: "/images/og.png"
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "HypeSIM - Instant eSIM for Global Travelers",
		images: ["/images/preview.png"]
	}
};

export const viewport: Viewport = {
	themeColor: "#171717",
}

export default function RootLayout ({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html className={"h-full"} lang={"en"}>
			<body className={"h-auto bg-gray-50- overflow-x-hidden"}>
				<Flex flexDirection={"col"} alignItems={"stretch"} className={"h-full"}>
					<div className={"sticky- top-0 z-10"}>
						<Banner/>
						<Header/>
					</div>
					<main role={"main"} className={"flex-1"}>
						{children}
					</main>
					<Toaster position={"bottom-right"} />
					<Footer/>
				</Flex>
				{/*<ChatBox />*/}
			</body>
		</html>
	);
}