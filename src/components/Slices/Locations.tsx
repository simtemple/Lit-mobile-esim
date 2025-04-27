const locations = [
	{
		title: "United States",
		description: "Unlimited Data Plans",
		imageUrl: "/flags/us.svg"
	},
	{
		title: "Turkey",
		description: "Unlimited Data Plans",
		imageUrl: "/flags/tr.svg"
	},
	{
		title: "Malaysia",
		description: "Unlimited Data Plans",
		imageUrl: "/flags/my.svg"
	},
	{
		title: "Spain",
		description: "Unlimited Data Plans",
		imageUrl: "/flags/es.svg"
	},
	{
		title: "Thailand",
		description: "Unlimited Data Plans",
		imageUrl: "/flags/th.svg"
	},
	{
		title: "United Arab Emirates",
		description: "Unlimited Data Plans",
		imageUrl: "/flags/ae.svg"
	}
]

export default function Locations () {
	return (
		<section id={"locations"} className={"bg-gray-50 pt-24 pb-32"}>
			<div className={"mx-auto max-w-7xl px-6 lg:px-8"}>
				<div className={"mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"}>
					<div className={"mx-auto max-w-3xl space-y-5 lg:max-w-none"}>
						<p className={"text-3xl font-bold tracking-tight text-dark sm:text-3xl lg:text-4xl"}>
							Top eSIM Destinations
						</p>
						<p className={"text-xl text-gray-700"}>
							Discover our most popular countries for instant, high-speed eSIM connectivity.
						</p>
					</div>
				</div>
				<ul role="list" className={"pt-16 mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"}>
					{locations.map((location: any) => (
						<li key={location.title}>
							<img className={"mx-auto h-24 w-24 rounded-full -shadow-lg"} src={location.imageUrl} alt={location.title} />
							<h3 className={"mt-6 text-base font-semibold leading-7 tracking-tight text-dark"}>{location.title}</h3>
							<p className={"text-sm leading-6 text-gray-600"}>{location.description}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
