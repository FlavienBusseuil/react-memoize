"use client";

import { NoMemo } from "@/components/1-NoMemo";
import { WithMemo } from "@/components/2-WithMemo";
import { WithUseCallback } from "@/components/4-WithUseCallback";

export default function Home() {
	return (
		<main className="flex min-h-screen gap-2 items-center p-24 text-3xl">
			{/* <NoMemo /> */}
			{/* <WithUseMemo /> */}
			<WithMemo />
			{/* <WithUseCallback /> */}
		</main>
	);
}
