import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Support Center"
}

export default function Page () {
	return (
		<div className={"px-6 py-24 lg:px-8 space-y-8"}>
			<div className={"mx-auto max-w-3xl space-y-5 px-4 text-center sm:px-6 lg:px-8 lg:max-w-none"}>
				<p className={"text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl"}>
					Support Center
				</p>
				<p className={"text-xl text-gray-700"}>
					Any questions or issues?
				</p>
			</div>
			<iframe src={"https://go.crisp.chat/chat/embed/?website_id=1bbabc7d-380a-4f1c-bdab-f70ce181cf5d"} className={"w-full h-[600px]"}/>
			{/*<Form />*/}
		</div>
	)
}