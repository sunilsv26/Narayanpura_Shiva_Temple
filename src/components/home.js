import React, { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";

const Home = () => {
  const [images, setImages] = useState(null);
  useEffect(() => {
    const newImages = [];
    for (let i = 1; i < 7; i++) {
      newImages.push({
        itemImageSrc: `http://localhost:3000/home/${i}.jpg`,
        thumbnailImageSrc: `http://localhost:3000/home/${i}.jpg`,
        alt: `Image-${i}`,
        title: `Image-${i}`,
      });
    }
    setImages(newImages);
  }, []);

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  const itemTemplate = (item) => {
    return (
      <img
        src={`${item && item.itemImageSrc}`}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item && item.alt}
        style={{ width: "100%" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={`${item.thumbnailImageSrc}`}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item.alt}
      />
    );
  };

  return (
    <div className="home grid m-0">
      <Galleria
        className="col-12 md:col-6"
        value={images}
        item={itemTemplate}
        autoPlay
        showThumbnails={false}
        circular
      />
      <div className="col-12 md:col-6">
        <h1>ABOUT</h1>
        <p>
          The Shiva temple is located in Narayanapur village in Bidar district.
          The temple is about 4 km from Basavakalyan town.The temple is an
          excellent example of Kalyani Chalukyan construction.
        </p>
      </div>
      <div className="col-12">
        <h1>ARCHITECTURE</h1>
        <p>
          The temple is constructed as trikutachala i.e. containing three
          parts/rooms. The garbhagriha and two pillared mandapams. Many images
          of Narasimha slaying Hiranyakashipu, different forms of Vishnu and
          Lakshmi can be found in the temple. This may suggest that the temple
          might once been dedicated to Vishnu.The inner ceiling of the temple
          contains intricate floral designs. Two broken makara torana is kept on
          either side at the entrance of the temple. The outside wall of the
          temple has beautiful Salabhanjika statues around them. The inner
          ceilings of the temple have beautiful floral designs. Due to damaged
          ceiling water enters through roof of the temple. To prevent them a new
          roof with concrete has been constructed in recent times. There is a
          well near the temple. Next to the well there is a second temple
          building in dilapidated condition.
        </p>
        <h1>CELEBRATION</h1>
        <p>
          In the month of August every year there would be a grand celebration
          with processing of the deity around the village.
        </p>
      </div>
    </div>
  );
};

export default Home;
