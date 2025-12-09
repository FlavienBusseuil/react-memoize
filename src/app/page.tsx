"use client";

import { NoMemo } from "@/components/1-NoMemo";
import { WithMemo } from "@/components/2-WithMemo";
import { WithUseMemo } from "@/components/3-WithUseMemo";
import { WithUseCallback } from "@/components/4-WithUseCallback";
import { WatchVsUseWatchDemo } from "@/components/6-watch-vs-useWatch";

export default function Home() {
	return (
		<main className="flex min-h-screen gap-2 items-center p-24 text-3xl">
			{/* <NoMemo /> */}
			{/* <WithMemo /> */}
			{/* <WithUseMemo /> */}
			<WithUseCallback />
			{/* <WatchVsUseWatchDemo /> */}
		</main>
	);
}
