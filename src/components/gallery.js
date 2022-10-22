import React, { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";

const Gallery = () => {
  const [images, setImages] = useState(null);
  useEffect(() => {
    const newImages = [];
    for (let i = 1; i < 53; i++) {
      newImages.push({
        itemImageSrc: `http://localhost:3000/gallery/${i}.jpg`,
        thumbnailImageSrc: `http://localhost:3000/gallery/${i}.jpg`,
        alt: `Image-${i}`,
        title: `Image-${i}`,
      });
    }
    setImages(newImages);
  }, []);

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
