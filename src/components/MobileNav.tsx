import React, { Fragment } from "react";
import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import Link from "next/link";
import { Menu } from "lucide-react";

interface MobileNavProps
{
	navigation: any[]
}

export default function MobileNav ({ navigation }: MobileNavProps) {
	return (
		<Popover className={"relative- lg:hidden"}>
			<PopoverButton className={"inline-flex items-center font-semibold leading-6"}>
				<Menu className={"w-8"} />
			</PopoverButton>
			<Transition
				as={Fragment}
				enter={"transition ease-out duration-200"}
				enterFrom={"opacity-0 translate-y-1"}
				enterTo={"opacity-100 translate-y-0"}
				leave={"transition ease-in duration-150"}
				leaveFrom={"opacity-100 translate-y-0"}
				leaveTo={"opacity-0 translate-y-1"}>
				<PopoverPanel className={"absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4"}>
					{({ close }) => (
						<div className={"w-screen max-w-sm flex-auto rounded-3xl bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"}>
							{navigation.map((item: any, index: number) => (
								<div key={index} className={"relative rounded-lg p-4 hover:bg-gray-50"}>
									<Link href={item.href} scroll onClick={() => close()} className={"font-semibold text-gray-900"}>
										{item.title}
										<span className={"absolute inset-0"} />
									</Link>
									<p className={"mt-1 text-gray-600"}>{item.description}</p>
								</div>
							))}
						</div>
					)}
				</PopoverPanel>
			</Transition>
		</Popover>
	)
}
