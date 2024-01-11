import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";

// NOT RENDERING THE CAROUSEL
const Home = () => {
    return(
        <div className="home">
            <MainCarousel />
            <ShoppingList />
            <Subscribe />
        </div>    
    );
};

export default Home;