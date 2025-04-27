import { PropsWithChildren } from "react";
import Container from "@/components/Container";

export default function MdxLayout ({ children }: PropsWithChildren) {
	return ( 
		<section className={"mx-auto max-w-prose prose prose-lg- font-mono py-12"}>
			<Container>
				{children}
			</Container>
		</section>
	)
}