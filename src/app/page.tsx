import { Metadata } from "next";
import Hero from "@/components/Slices/Hero";
import Brands from "@/components/Slices/Brands";
import Faq from "@/components/Slices/Faq";
import Features from "@/components/Slices/Features";
import Locations from "@/components/Slices/Locations";
import React from "react";

export const metadata: Metadata = {
	title: "Instant Mobile Access Across the Globe "
}

export default function Page () {
	return (
		<main>
			<Hero />
			<Brands />
			<Features />
			<Locations />
			<Faq />
		</main>
	);
}
