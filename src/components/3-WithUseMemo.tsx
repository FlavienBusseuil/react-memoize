"use client";

import { fibonacci } from "@/utils/fibonacci";
import { useMemo, useState } from "react";

export function WithUseMemo() {
	const [isRed, setIsRed] = useState(false);
	const [fiboInput, setFiboInput] = useState(36);

	const start = Date.now();
	const fiboResult = useMemo(() => fibonacci(fiboInput), [fiboInput]);
	console.log(Date.now() - start);

	return (
		<>
			<input
				type="number"
				className="rounded-xl p-4 w-24 text-black"
				value={fiboInput}
				onChange={(e) => setFiboInput(Number(e.currentTarget.value))}
			/>
			<div
				onClick={() => setIsRed(!isRed)}
				className={`rounded-xl p-4 text-white ${
					isRed ? "bg-red-400" : "bg-slate-400"
				}`}
			>
				{fiboResult}
			</div>
		</>
	);
}
