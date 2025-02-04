import { Navigation } from "@/components/navigation";
import { Form } from "@/components/form";

export default function Page() {
	return (
		<>
			<Navigation />
			<main className="flex justify-center my-2">
				<Form />
			</main>
		</>
	);
}
