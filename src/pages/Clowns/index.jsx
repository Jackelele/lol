import * as React from "react";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import Navbar from "../../components/NavBar";
import { images } from "../../clownsImageData"; // Import the generated array

const Item = ({ src, alt }) => (
  <div className="item" style={{ width: "350px" }}>
    <div className="thumbnail">
      <img src={src} alt={alt} />
    </div>
  </div>
);

export default function Clowns() {
  return (
    <>
      <Navbar />
      {/* Container to align title with grid */}
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 10px" }}>
        <div className="flex justify-between items-center h-24 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Clowns
          </h1>
        </div>
        <section style={{ paddingTop: "60px" }}>
          <MasonryInfiniteGrid
            className="container"
            style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }} // Ensure the grid is centered
            gap={35}
          >
            {images.map((src, index) => (
              <Item key={index} src={src} alt={`Clown ${index + 1}`} />
            ))}
          </MasonryInfiniteGrid>
        </section>
      </div>
    </>
  );
}

