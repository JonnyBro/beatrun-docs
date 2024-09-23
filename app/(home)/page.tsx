import Link from "next/link";

export default function HomePage() {
	return (
		<main className="flex h-screen flex-col justify-center text-center">
			<h1 className="mb-4 text-2xl font-bold">Jonny's Beatrun fork Documentation</h1>
			<p className="text-fd-muted-foreground">
				<Link href="/docs" className="text-fd-foreground font-semibold underline">
					Go here
				</Link>
			</p>
		</main>
	);
}
