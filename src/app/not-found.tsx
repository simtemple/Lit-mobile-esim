// "use client";

import { Flex } from "@tremor/react";

export const metadata = {
	title: "Page Not Found",
};

export default function Page () {
	return ( 
		<Flex justifyContent={"center"} alignItems={"center"} className={"min-h-full px-6 py-24 sm:py-32 lg:px-8"}>
			<div className="text-center">
				<p className={"text-base font-semibold"}>Error 404</p>
				<h1 className={"mt-4 text-3xl font-bold tracking-tight sm:text-5xl"}>Page Not Found</h1>
				<p className={"mt-6 text-base leading-7 text-gray-600"}>Sorry, we couldn’t find the page you’re looking for.</p>
				{/*<Flex justifyContent={"center"} alignItems={"center"} className={"mt-10 gap-x-6"}>*/}
				{/*	<Link href={"/"}>*/}
				{/*		<Button icon={ArrowLeft} size={"xl"}>Go back home</Button>*/}
				{/*	</Link>*/}
				{/*</Flex>*/}
			</div>
		</Flex>
	)
}
