"use client";

import Container from "./Container";
import { Badge, Button, Flex, Metric } from "@tremor/react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { clsx } from "clsx";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import MobileNav from "./MobileNav";
import AppStoreButton from "@/components/AppStoreButton";

const navigation = [
	{
		title: "Home",
		href: "/",
		description: "Return to the homepage.",
		excludeMobile: true
	},
	{
		title: "Buy eSIM Plans",
		href: "#features",
		scroll: true,
		description: "Discover all our features in detail."
	},
	{
		title: "Frequently Asked Questions",
		href: "#faq",
		scroll: true,
		description: "Answer any questions you may have."
	},
	{
		title: "Contact Us",
		href: "/contact",
		description: "Get in touch with our team."
	},
];

export default function Header () {
	const pathname = usePathname();
	const router = useRouter();
	return (
		<header className={"relative py-2"}>
			<Container>
				<Flex justifyContent={"between"} alignItems={"center"} className={"h-16 gap-4"}>
					<Link href={"/"} className={"mr-auto"}>
						<Flex className={"gap-3"}>
							<svg className={"h-6"} viewBox="0 0 472 635" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M213.111 633.732C183.45 629.354 156.786 621.308 134.034 609.869C92.5877 589.034 59.9674 559.249 35.8542 520.223C-21.1927 427.899 -9.17834 307.817 64.8588 230.323C84.9082 209.338 115.311 186.913 154.283 164.37C179.917 149.539 193.468 139.887 204.08 128.9C217.193 115.321 219.632 110.148 219.569 96.0461C219.514 83.3712 216.218 72.6341 208.322 59.4113C203.161 50.7659 188.319 34.3001 181.472 29.6206C178.889 27.8552 176.771 25.6508 176.766 24.7236C176.761 23.7952 179.181 20.3956 182.146 17.1698C200.567 -2.88122 225.102 -5.38018 255.273 9.72473C281.541 22.8759 300.436 41.8141 312.945 67.5287C328.361 99.2188 330.152 134.985 318.168 171.78C305.7 210.061 281.23 241.638 231.216 283.985C186.282 322.031 182.411 326.092 172.857 345.216C163.505 363.936 160.96 387.931 166.162 408.336C177.829 454.105 224.853 483.056 271.968 473.478C309.804 465.786 338.496 438.146 350.807 397.53C353.977 387.069 354.354 383.667 354.454 364.64C354.545 347.086 354.028 340.896 351.457 328.827C347.079 308.276 340.26 285.275 332.584 265.161C328.965 255.677 325.677 246.911 325.279 245.681C324.29 242.621 331.221 241.263 347.294 241.368C362.097 241.465 372.818 244.038 386.07 250.674C428.887 272.115 462.716 325.834 470.34 384.488C472.873 403.974 471.329 437.074 466.998 456.161C446.936 544.566 378.546 610.91 287.143 630.635C276.459 632.942 268.473 633.568 245.5 633.903C229.868 634.13 215.293 634.053 213.111 633.732Z" className={"fill-current"}/>
							</svg>
							<Metric className={"text-xl  whitespace-nowrap"}>Lit Mobile</Metric>
							<Badge className={"bg-tremor-brand text-tremor-brand-inverted font-medium hidden-sm:block"}>eSIM</Badge>
						</Flex>
					</Link>

					<Flex justifyContent={"center"} className={"hidden mr-auto h-full lg:flex gap-6"}>
						{navigation.map((category: any, index: number) => (
							category.scroll ? (
								<span
									key={index}
									className={"relative cursor-pointer text-sm font-medium hover-underline-animation"}
									onClick={() => {
										if (pathname === "/") {
											const id = category.href.slice(1);
											const element = document.getElementById(id);
											if (element) window.scrollTo({
												top: element.getBoundingClientRect().top + window.scrollY,
												behavior: "smooth"
											});
										}
										else router.push("/" + category.href);
									}}>
									{category.title}
								</span>
							) : (
								<Link
									href={category.href}
									key={index}
									className={clsx(
										"relative text-sm font-medium hover-underline-animation",
										pathname === category.href && "active"
									)}>
									{category.title}
								</Link>
							)
						))}
					</Flex>
					<Flex className={"basis-0 gap-3 sm:hidden"}>
						<MobileNav navigation={navigation.filter((item) => !item.excludeMobile)} />
					</Flex>
					<Flex justifyContent={"end"} className={"basis-0 gap-3 hidden sm:flex"}>
						<AppStoreButton className={"h-[38px]"} />
						<Link href={"/contact"}>
							<Button className={"bg-tremor-brand border-tremor-brand"} icon={Mail}>
							Contact Us
							</Button>
						</Link>
					</Flex>
				</Flex>
			</Container>
		</header>
	)
}
