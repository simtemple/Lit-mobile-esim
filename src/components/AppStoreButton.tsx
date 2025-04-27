"use client";

import React from "react";
import { toast } from "sonner";

export default function AppStoreButton ({ className }: { className?: string }) {
	return (
		<img
			alt={"AppStore"}
			className={className}
			onClick={() => toast.success("Coming soon on the App Store!")}
			src={"/images/AppStore.svg"}
		/>
	);
}