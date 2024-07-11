import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const ImageSlider = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            style={{ maxHeight: "650px" }}
            className="d-block w-100"
            src="images/wp14.jpg"
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>FRESH SKIN CARE PACKS</h3>
            <p>
              [FRESH PRODUCTS] Sensorial Skincare Proven Results. Backed by
              science since 1991
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ maxHeight: "650px" }}
            className="d-block w-100"
            src="images/wp9.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>SPA LUXETIQUE WORLD</h3>
            <p>
              [Natural Nourishing Ingredients] Natural ingredients such as
              Lavender oil and Aloe will calm and relieve your skin.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ maxHeight: "650px" }}
            className="d-block w-100"
            src="images/wp8.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
