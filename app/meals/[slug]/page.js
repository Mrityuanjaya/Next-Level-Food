const MealItemPage = ({ params }) => {
    return (
        <main>
            <h1>Meal Item: {params.slug}</h1>
        </main>
    );
};

export default MealItemPage;
