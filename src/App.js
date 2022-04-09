import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/Nav/Nav";
import Banner from "./components/footer-banner/Banner";
import Card from "./components/Products/Products";
import ProductsSlider from "./components/carousel/Slider";
import BannerItem from "./components/banner-item/BannerItem";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <BannerItem />
      <ProductsSlider />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
