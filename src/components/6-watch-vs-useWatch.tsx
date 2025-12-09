import React, { useCallback } from "react";
import {
	FormProvider,
	useForm,
	useFormContext,
	useWatch,
} from "react-hook-form";

function FirstNameInput() {
	const { control, register } = useFormContext();
	const firstName = useWatch({
		control,
		name: "firstName",
	});

	return (
		<div>
			<label>First Name (useWatch): </label>
			<input {...register("firstName")} className="text-black" />
			<p>value : {firstName}</p>
		</div>
	);
}

function LastNameInput() {
	// watch: returns all or specific field values, re-runs on every render, do not trigger re-render when value changes
	const { watch, register } = useFormContext();
	const lastName = watch("lastName");

	return (
		<div>
			<label>Last Name (watch): </label>
			<input {...register("lastName")} className="text-black" />
			<p>value : {lastName}</p>
		</div>
	);
}

export function WatchVsUseWatchDemo() {
	const form = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
		},
	});

	return (
		<FormProvider {...form}>
			<div>
				<FirstNameInput />
				<LastNameInput />
			</div>
		</FormProvider>
	);
}
