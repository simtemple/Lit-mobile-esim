import { CheckCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About HypeSIM"
}

export default function Page () {
	return (
		<>
			<div className={"px-6 pt-3 pb-16 sm:py-24 lg:px-8"}>
				<div className={"mx-auto max-w-3xl text-base leading-7 text-gray-700"}>
					<p className={"text-base font-semibold leading-7 text-tremor-brand uppercase"}>Who are we?</p>
					<h1 className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">About HypeSIM</h1>
					<p className="mt-6 text-xl leading-8">
						HypeSIM delivers instant, affordable eSIM solutions directly through our dedicated iOS app, connecting travelers and digital nomads effortlessly around the globe.
					</p>
					<div className="mt-10 max-w-2xl">
						<p>
							Experience the future of mobile connectivity with HypeSIM. Our platform offers seamless eSIM activation, global coverage, and cost-effective plans tailored to your travel needs. Whether you're exploring new destinations or managing business trips, HypeSIM ensures you stay connected without hassle.
						</p>
						<ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
							<li className="flex gap-x-3">
								<CheckCircle className="mt-1 h-5 w-5 flex-none text-tremor-brand" aria-hidden="true" />
								<span>
									<strong className="font-semibold text-gray-900">Instant eSIM activation: </strong> Get online within minutes after purchase, no waiting or paperwork required.
								</span>
							</li>
							<li className="flex gap-x-3">
								<CheckCircle className="mt-1 h-5 w-5 flex-none text-tremor-brand" aria-hidden="true" />
								<span>
									<strong className="font-semibold text-gray-900">Global coverage: </strong> Access data plans in over 190+ countries seamlessly through a single app.
								</span>
							</li>
							<li className="flex gap-x-3">
								<CheckCircle className="mt-1 h-5 w-5 flex-none text-tremor-brand" aria-hidden="true" />
								<span>
									<strong className="font-semibold text-gray-900">Affordable plans: </strong> Enjoy competitively priced data packages with no hidden fees or contracts.
								</span>
							</li>
						</ul>
						<p className={"mt-8"}>
							Join HypeSIM and experience seamless connectivity wherever you go — trusted by travelers, professionals, and adventurers worldwide.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
