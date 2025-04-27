import { Flex } from "@tremor/react";

export default function Banner () {
	return (
		<Flex justifyContent={"center"} className={"text-center gap-6 bg-neutral-900  text-tremor-brand-inverted py-2 sm:py-2.5 px-2 sm:px-3.5"}>
			<p className={"text-xs sm:text-sm leading-6"}>
				<strong className={"font-semibold"}>Referral Program</strong>
				{" — "}
				Invite your friends and earn 21% back! They also get 21% off their first order. Start sharing and saving!
			</p>
		</Flex>
	)
}
