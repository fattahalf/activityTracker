export function Form() {
	return (
		<form className="space-y-2 mx-auto bg-white p-6 rounded-lg shadow-md">
			<div className="flex flex-col">
				<label
					htmlFor="activityName"
					className="my-1">
					Activity Name
				</label>
				<input
					type="text"
					name="activityName"
					id="activityName"
					className="border border-gray-500 rounded-lg px-3 py-2 col-span-2 w-full"
				/>
			</div>
			<div className="flex flex-col">
				<label
					htmlFor="activityCategory"
					className="my-1">
					Category
				</label>
				<select
					id="activityCategory"
					className="border border-gray-500 rounded-md px-3 py-2 col-span-2 w-full bg-white">
					<option value="">Select Category</option>
					<option value="work">Work</option>
					<option value="exercise">Exercise</option>
					<option value="study">Study</option>
					<option value="entertainment">Entertainment</option>
					<option value="social">Social</option>
				</select>
			</div>
			<div className="flex flex-col">
				<label
					htmlFor="activityDescription"
					className="my-1">
					Description
				</label>
				<input
					type="text"
					name="activityDescription"
					id="activityDescription"
					className="border border-gray-500 rounded-lg px-3 py-2 col-span-2 w-full"
				/>
			</div>
			<div className="flex flex-col">
				<label
					htmlFor="activityDate"
					className="my-1">
					Date
				</label>
				<input
					type="date"
					name="activityDate"
					id="activityDate"
					className="border border-gray-500 rounded-lg px-3 py-2 col-span-2 w-full"
				/>
			</div>
			<div className="flex flex-col">
				<label
					htmlFor="activityTime"
					className="my-1">
					Time
				</label>
				<input
					type="time"
					name="activityTime"
					id="activityTime"
					className="border border-gray-500 rounded-lg px-3 py-2 col-span-2 w-full"
				/>
			</div>
			<div className="flex flex-col">
				<label
					htmlFor="activityPlace"
					className="my-1">
					Place
				</label>
				<input
					type="text"
					name="activityPlace"
					id="activityPlace"
					className="border border-gray-500 rounded-lg px-3 py-2 col-span-2 w-full"
				/>
			</div>
		</form>
	);
}
