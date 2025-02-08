import { Navigation } from "@/components/navigation";
import { Form } from "@/components/form";
import { Cards } from "@/components/cards";

export default async function Page() {
	return (
		<>
			<Navigation />
			<main>
				<Form />
				<Cards />
			</main>
		</>
	);
}
