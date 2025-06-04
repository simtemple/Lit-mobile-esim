import { Metadata } from "next";

export const metadata: Metadata = {
	other: {
		"apple-itunes-app": "app-argument=https://hypesim.app/refer/[code]"
	}
};

// { params }: { params: { code: string } }
export default function Page () {
	return <h1>Thank you</h1>
}
