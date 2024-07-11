import React from "react";

const Brands = () => {
  return (
    <div>
      <section className="newsletter">
        <fieldset class="block-title wow fadeIn" data-wow-delay="200ms">
          <legend data-wow-delay="100ms">Featured Brands</legend>
        </fieldset>
      </section>
      <br />
      <br />
      <section class="slider-brand-wrapper">
        <div
          id="slide_brand"
          class="owl-carousel slide_brand owl-theme"
          style={{ opacity: "1", display: "block" }}
        >
          <div class="owl-wrapper-outer">
            <div
              class="owl-wrapper"
              style={{ width: "1400px", display: "block" }}
            >
              <div class="owl-item" style={{ width: "222px" }}>
                <div class="item">
                  <a
                    title="L'Oreal"
                    href="https://essentials.lk/collections/loreal"
                  >
                    <img src="/images/brand1.png" alt="" />
                  </a>
                </div>
              </div>
              <div class="owl-item" style={{ width: "222px" }}>
                <div class="item">
                  <a
                    title="Garnier"
                    href="https://essentials.lk/collections/garnier"
                  >
                    <img src="/images/brand2.png" alt="" />
                  </a>
                </div>
              </div>
              <div class="owl-item" style={{ width: "222px" }}>
                <div class="item">
                  <a
                    title="Seren Cosmetics"
                    href="https://essentials.lk/collections/seren-cosmetics"
                  >
                    <img src="/images/brand7.png" alt="" />
                  </a>
                </div>
              </div>
              <div class="owl-item" style={{ width: "222px" }}>
                <div class="item">
                  <a
                    title="TRESemmé"
                    href="https://essentials.lk/collections/tresemme"
                  >
                    <img src="/images/brand10.png" alt="" />
                  </a>
                </div>
              </div>
              <div class="owl-item" style={{ width: "222px" }}>
                <div class="item">
                  <a
                    title="Caribbean Breeze"
                    href="https://essentials.lk/collections/caribbean-breeze"
                  >
                    <img src="/images/brand8.png" alt="" />
                  </a>
                </div>
              </div>
              <div class="owl-item" style={{ width: "222px" }}>
                <div class="item">
                  <a
                    title="Adidas"
                    href="https://essentials.lk/collections/adidas"
                  >
                    <img src="/images/brand6.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="owl-controls clickable">
            <div class="owl-pagination">
              <div class="owl-page active">
                <span class=""></span>
              </div>
              <div class="owl-page">
                <span class=""></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
