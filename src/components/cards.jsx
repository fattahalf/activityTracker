import { revalidatePath } from "next/cache";

export async function Cards() {
	const res = await fetch("https://v1.appbackend.io/v1/rows/bkGtYB3YGRjb");
	const { data } = await res.json();

	async function deleteStory(formData) {
		"use server";

		const id = formData.get("id");
		await fetch("https://v1.appbackend.io/v1/rows/bkGtYB3YGRjb", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([id]),
		});

		revalidatePath("/");
	}

	return (
		<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
			{data.map(item => (
				<div
					key={item._id}
					className="break-inside-avoid mb-5 p-4 border rounded-lg shadow bg-white">
					<form action={deleteStory}>
						<input
							name="id"
							type="text"
							defaultValue={item._id}
							hidden
						/>
						<div className="flex justify-between mb-2">
							<h3 className="font-bold mt-1">{item.title}</h3>
							<button
								className="text-gray-500 hover:text-gray-700 focus:outline-none"
								aria-label="Close">
								✕
							</button>
						</div>
					</form>
					<p>{item.description}</p>
					<p className="text-gray-400">{item.date}</p>
				</div>
			))}
		</div>
	);
}
