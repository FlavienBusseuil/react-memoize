"use client";

import { fibonacci } from "@/utils/fibonacci";
import { memo, useState } from "react";

const ChildComponent = memo(
	function ChildComponent() {
		const start = Date.now();
		const fiboResult = fibonacci(36);
		const renderTime = Date.now() - start;
		console.log(`Child render time: ${renderTime}ms`);

		return <>{fiboResult}</>;
	}
	// (prevProps, nextProps) => false
);

export function WithMemo() {
	const [isActive, setIsActive] = useState(true);

	return (
		<>
			<div
				className={`rounded-xl p-4 text-white ${
					isActive ? "bg-red-400" : "bg-slate-400"
				}`}
				onClick={() => setIsActive(!isActive)}
			/>
			{/* Without memo this component would have rendered each time isActive change state */}
			<ChildComponent />
		</>
	);
}
