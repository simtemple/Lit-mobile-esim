import { Metadata } from "next";
import Form from "./Form";

export const metadata: Metadata = {
	title: "Contact Us"
}

export default function Page () {
	return (
		<div className={"px-6 py-24 lg:px-8"}>
			<div className={"mx-auto max-w-3xl space-y-5 px-4 text-center sm:px-6 lg:px-8 lg:max-w-none"}>
				<p className={"text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl"}>
					Contact Us
				</p>
				<p className={"text-xl text-gray-700"}>
					Get in Touch - We're Here to Help.
				</p>
			</div>
			<Form />
		</div>
	)
}