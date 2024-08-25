import Link from "next/link";

export default function Home() {
    return (
        <main style={{ textAlign: "center" }}>
            <h1>
                <Link style={{ color: "white" }} href="/meals">
                    Go To Meals Page
                </Link>
            </h1>
            <h1>
                <Link style={{ color: "white" }} href="/community">
                    Go To Community Page
                </Link>
            </h1>
        </main>
    );
}
