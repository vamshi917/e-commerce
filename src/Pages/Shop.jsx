import Hero from "../Components/Hero/Hero";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Offer from "../Components/Offer/Offer";
import Popular from "../Components/Popular/Popular";
// import LogicalJs from "../Components/Javas/LogicalJs"


const Shop = () => {
  return (
    <>
      {/* <LogicalJs /> */}
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
      <NewsLetter />
    </>
  );
};

export default Shop;
