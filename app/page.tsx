import Link from "next/link";

export default function HomePage() {
	return (
		<main className="flex h-screen flex-col justify-center text-center">
			<h1 className="mb-4 text-2xl font-bold">Welcome to Beatrun Docs</h1>
			<p className="text-fd-muted-foreground">
				This is a simple docs site for Jonny's fork of Beatrun.<br></br>
				You can open <Link href="/docs" className="text-fd-foreground font-semibold underline">/docs</Link> and see the documentation.
			</p>
		</main>
	);
}
