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
		template: "Litmobile | %s",
		default: "Instant Mobile Access Across the Globe.",
	},
	description: "Instant global eSIM plans for travelers and digital nomads. Affordable, reliable, and available directly through our iOS app.",
	keywords: ["eSIM", "global eSIM", "travel eSIM", "instant eSIM", "LitmobileSIM", "iOS eSIM", "affordable data plans"],
	authors: [{ name: "Litmobile Team", url: "https://litmobile.net" }],
	creator: "Litmobile",
	openGraph: {
		title: "Litmobile | Instant Mobile Access Across the Globe.",
		description: "Stay connected worldwide with Litmobile. Affordable and reliable eSIM plans, activated instantly via our app.",
		url: "https://litmobile.net",
		siteName: "Litmobile",
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
		title: "Litmobile - Instant eSIM for Global Travelers",
		images: ["/images/preview.png"]
	},
	other: {
		"apple-itunes-app": "app-id=id6746370915"
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
