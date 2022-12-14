import React, { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";
import GalletyPhotos from "../assets/data/gallery.json";

const Gallery = () => {
  const [images, setImages] = useState(GalletyPhotos);

  const itemTemplate = (item) => {
    return (
      <img
        src={`${item && item.itemImageSrc}`}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item && item.alt}
        style={{ maxHeight: "300px" }}
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
        style={{ width: "80px", height: "60px" }}
      />
    );
  };

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 6,
    },
    {
      breakpoint: "768px",
      numVisible: 5,
    },
    {
      breakpoint: "560px",
      numVisible: 3,
    },
  ];

  return (
    <div className="gallery grid m-0 p-2">
      <h1>GALLERY</h1>
      <Galleria
        className="w-full"
        value={images}
        item={itemTemplate}
        circular
        autoPlay
        thumbnail={thumbnailTemplate}
        numVisible={10}
        responsiveOptions={responsiveOptions}
      />
    </div>
  );
};

export default Gallery;
