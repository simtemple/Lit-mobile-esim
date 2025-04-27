import { DollarSign, Globe, Layers, LifeBuoy, Rocket, Zap } from "lucide-react"
import Container from "@/components/Container";

const features = [
	{
		name: "Global Coverage",
		description: "Stay connected in over 190 countries with our extensive worldwide network.",
		icon: Globe,
	},
	{
		name: "Instant Activation",
		description: "Get online within minutes after purchase with our easy and instant eSIM activation process.",
		icon: Zap,
	},
	{
		name: "Affordable Rates",
		description: "Enjoy budget-friendly data plans without hidden fees, perfect for travelers and digital nomads.",
		icon: DollarSign,
	},
	{
		name: "Flexible Plans",
		description: "Choose from a wide range of data packages to suit your specific travel needs and duration.",
		icon: Layers,
	},
	{
		name: "High-Speed Data",
		description: "Experience reliable, fast mobile data wherever you go, with 4G LTE and 5G availability in many regions.",
		icon: Rocket,
	},
	{
		name: "24/7 Customer Support",
		description: "Get help whenever you need it with our responsive and friendly support team.",
		icon: LifeBuoy,
	}
]

export default function Features () {
	return (
		<section id={"features"} className={"bg-white py-12 sm:pt-20 sm:pb-28"}>
			<Container className={"!max-w-6xl"}>
				<div className={"mx-auto max-w-3xl space-y-5 px-4 text-center sm:px-6 lg:px-8 lg:max-w-none"}>
					<h2 className={"text-base font-semibold uppercase leading-7 text-tremor-brand"}>Instant &amp; Reliable</h2>
					<p className={"text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl"}>
						Our Features
					</p>
					<p className={"text-xl text-gray-700"}>
						Unleashing the full potential of our service.
					</p>
				</div>
				<div className={"mt-16 sm:mt-20 lg:mt-24"}>
					<dl className={"grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 lg:gap-y-16"}>
						{features.map((feature) => (
							<div key={feature.name} className={"relative pl-16"}>
								<dt className={"text-base font-semibold leading-7 text-dark"}>
									<div className={"absolute left-0 top-0"}>
										<feature.icon className={"w-full h-8 stroke-5 -drop-shadow-md text-tremor-brand"} aria-hidden="true" />
									</div>
									{feature.name}
								</dt>
								<dd className={"mt-2 text-base leading-7 text-gray-600"}>{feature.description}</dd>
							</div>
						))}
					</dl>
				</div>
			</Container>
		</section>
	)
}
