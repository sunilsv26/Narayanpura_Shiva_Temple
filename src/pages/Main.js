import React from "react";
import Navigation from "../components/navigation";
import MenuItems from "../assets/data/menuItems.json";
import Home from "../components/home";
import Gallery from "../components/gallery";
import Map from "../components/map";

const Main = () => {
  return (
    <>
      <Navigation items={MenuItems} />
      <div className="section-container">
        <section id="home" className="section">
          <Home />
        </section>
        <section id="gallery" className="section">
          <Gallery />
        </section>
        <section id="map" className="section">
          <Map />
        </section>
      </div>
    </>
  );
};

export default Main;
