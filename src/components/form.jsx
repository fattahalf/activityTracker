import { Input } from "@heroui/react";
import { DatePicker } from "@heroui/date-picker";
import { Textarea } from "@heroui/input";
import { Button } from "@heroui/react";

export function Form() {
	return (
		<form className="mx-4 my-2 p-4 border rounded-lg shadow">
			<div className="grid gap-4">
				<Input
					type="text"
					label="Activity"
					labelPlacement="outside"
					description="Give your story a title"
					placeholder="Story Title"
				/>
				<Textarea
					labelPlacement="outside"
					label="Story"
					placeholder="Tell us about your stories today"
				/>
				<DatePicker
					isRequired
					labelPlacement="outside"
					label="Story taken Date"
				/>
				<div className="flex justify-center">
					<Button
						color="primary"
						className="w-32">
						Submit my story
					</Button>
				</div>
			</div>
		</form>
	);
}
