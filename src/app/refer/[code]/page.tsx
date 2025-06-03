// export const metadata: Metadata = {
// 	other: {
// 		"apple-itunes-app": "app-id=id6475045151, app-argument=https://hypesim.app/refer/[code]"
// 	}
// };

export default function Page ({ params }: { params: { code: string } }) {
	return <h1>Referral code: {params.code}</h1>
}
