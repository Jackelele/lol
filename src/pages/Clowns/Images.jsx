import * as React from "react";
import { PackingInfiniteGrid } from "@egjs/react-infinitegrid";
import { images } from "../../clownsImageData"; // Import the generated array

const Item = ({ src, alt }) => (
  <div className="item" style={{ width: "250px" }}>
    <div className="thumbnail">
      <img src={src} alt={alt} />
    </div>
  </div>
);

export default function Images() {
  return (
    <PackingInfiniteGrid className="container" gap={5}>
      {images.map((src, index) => (
        <Item key={index} src={src} alt={`Clown ${index + 1}`} />
      ))}
    </PackingInfiniteGrid>
  );
}
