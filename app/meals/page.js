import Link from "next/link";

const MealsPage = () => {
    return (
        <main style={{ textAlign: "center" }}>
            <h1>Meals Page</h1>
            <Link style={{ color: "white" }} href="/meals/share">
                Go to meals share page
            </Link>
        </main>
    );
};

export default MealsPage;
