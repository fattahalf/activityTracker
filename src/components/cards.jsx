export async function Cards() {
	const res = await fetch("https://v1.appbackend.io/v1/rows/bkGtYB3YGRjb");
	const { data } = await res.json();

	return data.map(item => {
		return (
			<div className="inline-grid grid-cols-3 gap-4">
				<div
					key={item._id}
					className="mx-4 my-2 p-4 border rounded-lg shadow">
					<h3 className="font-bold">{item.title}</h3>
					<p>{item.description}</p>
				</div>
			</div>
		);
	});
}
