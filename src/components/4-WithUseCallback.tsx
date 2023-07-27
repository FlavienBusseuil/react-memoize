"use client";

import { memo, useCallback, useEffect, useState } from "react";

let nbRender = 0;

const ChildComponent = memo(function ChildComponent({
	onClick,
}: {
	onClick: () => void;
}) {
	nbRender++;

	return (
		<div
			className={`rounded-xl p-4 text-white bg-slate-400 cursor-pointer`}
			onClick={onClick}
		>
			{`render (${nbRender})`}
		</div>
	);
});

export function WithUseCallback() {
	const [isActive, setIsActive] = useState(true);
	const handleClick = () => console.log("click !");
	// const handleClick = useCallback(() => console.log("click !"), []);

	return (
		<>
			<div
				className={`rounded-xl p-4 text-white cursor-pointer ${
					isActive ? "bg-red-400" : "bg-blue-400"
				}`}
				onClick={() => setIsActive(!isActive)}
			>
				Change state
			</div>
			{/* Without useCallback this component would have rendered each time isActive change state */}
			<ChildComponent onClick={handleClick} />
		</>
	);
}
