import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import "../assets/style.css";

const Home = () => {
  const mainRef = useRef(null);
  const canvasRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll and GSAP
    const initLocomotiveScroll = () => {
      gsap.registerPlugin(ScrollTrigger);

      // Using Locomotive Scroll
      const locoScroll = new LocomotiveScroll({
        el: mainRef.current,
        smooth: true,
      });

      // Each time Locomotive Scroll updates, tell ScrollTrigger to update too
      locoScroll.on("scroll", ScrollTrigger.update);

      // Tell ScrollTrigger to use these proxy methods for the "#main" element
      ScrollTrigger.scrollerProxy(mainRef.current, {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: mainRef.current.style.transform ? "transform" : "fixed",
      });

      // Each time the window updates, refresh ScrollTrigger and update LocomotiveScroll
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

      // After everything is set up, refresh() ScrollTrigger and update LocomotiveScroll
      ScrollTrigger.refresh();

      return locoScroll;
    };

    // Set up canvas and image sequence
    const setupCanvas = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Function to get image URLs
      const getImageUrl = (index) => {
        const urls = `
        https://zelt.app/assets/img/home/hero/sequence/1.webp
      https://zelt.app/assets/img/home/hero/sequence/2.webp
      https://zelt.app/assets/img/home/hero/sequence/3.webp
      https://zelt.app/assets/img/home/hero/sequence/4.webp
      https://zelt.app/assets/img/home/hero/sequence/5.webp
      https://zelt.app/assets/img/home/hero/sequence/6.webp
      https://zelt.app/assets/img/home/hero/sequence/7.webp
      https://zelt.app/assets/img/home/hero/sequence/8.webp
      https://zelt.app/assets/img/home/hero/sequence/9.webp
      https://zelt.app/assets/img/home/hero/sequence/10.webp
      https://zelt.app/assets/img/home/hero/sequence/11.webp
      https://zelt.app/assets/img/home/hero/sequence/12.webp
      https://zelt.app/assets/img/home/hero/sequence/13.webp
      https://zelt.app/assets/img/home/hero/sequence/14.webp
      https://zelt.app/assets/img/home/hero/sequence/15.webp
      https://zelt.app/assets/img/home/hero/sequence/16.webp
      https://zelt.app/assets/img/home/hero/sequence/17.webp
      https://zelt.app/assets/img/home/hero/sequence/18.webp
      https://zelt.app/assets/img/home/hero/sequence/19.webp
      https://zelt.app/assets/img/home/hero/sequence/20.webp
      https://zelt.app/assets/img/home/hero/sequence/21.webp
      https://zelt.app/assets/img/home/hero/sequence/22.webp
      https://zelt.app/assets/img/home/hero/sequence/23.webp
      https://zelt.app/assets/img/home/hero/sequence/24.webp
      https://zelt.app/assets/img/home/hero/sequence/25.webp
      https://zelt.app/assets/img/home/hero/sequence/26.webp
      https://zelt.app/assets/img/home/hero/sequence/27.webp
      https://zelt.app/assets/img/home/hero/sequence/28.webp
      https://zelt.app/assets/img/home/hero/sequence/29.webp
      https://zelt.app/assets/img/home/hero/sequence/30.webp
      https://zelt.app/assets/img/home/hero/sequence/31.webp
      https://zelt.app/assets/img/home/hero/sequence/32.webp
      https://zelt.app/assets/img/home/hero/sequence/33.webp
      https://zelt.app/assets/img/home/hero/sequence/34.webp
      https://zelt.app/assets/img/home/hero/sequence/35.webp
      https://zelt.app/assets/img/home/hero/sequence/36.webp
      https://zelt.app/assets/img/home/hero/sequence/37.webp
      https://zelt.app/assets/img/home/hero/sequence/38.webp
      https://zelt.app/assets/img/home/hero/sequence/39.webp
      https://zelt.app/assets/img/home/hero/sequence/40.webp
      https://zelt.app/assets/img/home/hero/sequence/41.webp
      https://zelt.app/assets/img/home/hero/sequence/42.webp
      https://zelt.app/assets/img/home/hero/sequence/43.webp
      https://zelt.app/assets/img/home/hero/sequence/44.webp
      https://zelt.app/assets/img/home/hero/sequence/45.webp
      https://zelt.app/assets/img/home/hero/sequence/46.webp
      https://zelt.app/assets/img/home/hero/sequence/47.webp
      https://zelt.app/assets/img/home/hero/sequence/48.webp
      https://zelt.app/assets/img/home/hero/sequence/49.webp
      https://zelt.app/assets/img/home/hero/sequence/50.webp
      https://zelt.app/assets/img/home/hero/sequence/51.webp
      https://zelt.app/assets/img/home/hero/sequence/52.webp
      https://zelt.app/assets/img/home/hero/sequence/53.webp
      https://zelt.app/assets/img/home/hero/sequence/54.webp
      https://zelt.app/assets/img/home/hero/sequence/55.webp
      https://zelt.app/assets/img/home/hero/sequence/56.webp
      https://zelt.app/assets/img/home/hero/sequence/57.webp
      https://zelt.app/assets/img/home/hero/sequence/58.webp
      https://zelt.app/assets/img/home/hero/sequence/59.webp
      https://zelt.app/assets/img/home/hero/sequence/60.webp
      https://zelt.app/assets/img/home/hero/sequence/61.webp
      https://zelt.app/assets/img/home/hero/sequence/62.webp
      https://zelt.app/assets/img/home/hero/sequence/63.webp
      https://zelt.app/assets/img/home/hero/sequence/64.webp
      https://zelt.app/assets/img/home/hero/sequence/65.webp
      https://zelt.app/assets/img/home/hero/sequence/66.webp
      https://zelt.app/assets/img/home/hero/sequence/67.webp
      https://zelt.app/assets/img/home/hero/sequence/68.webp
      https://zelt.app/assets/img/home/hero/sequence/69.webp
      https://zelt.app/assets/img/home/hero/sequence/70.webp
      https://zelt.app/assets/img/home/hero/sequence/71.webp
      https://zelt.app/assets/img/home/hero/sequence/72.webp
      https://zelt.app/assets/img/home/hero/sequence/73.webp
      https://zelt.app/assets/img/home/hero/sequence/74.webp
      https://zelt.app/assets/img/home/hero/sequence/75.webp
      https://zelt.app/assets/img/home/hero/sequence/76.webp
      https://zelt.app/assets/img/home/hero/sequence/77.webp
      https://zelt.app/assets/img/home/hero/sequence/78.webp
      https://zelt.app/assets/img/home/hero/sequence/79.webp
      https://zelt.app/assets/img/home/hero/sequence/80.webp
      https://zelt.app/assets/img/home/hero/sequence/81.webp
      https://zelt.app/assets/img/home/hero/sequence/82.webp
      https://zelt.app/assets/img/home/hero/sequence/83.webp
      https://zelt.app/assets/img/home/hero/sequence/84.webp
      https://zelt.app/assets/img/home/hero/sequence/85.webp
      https://zelt.app/assets/img/home/hero/sequence/86.webp
      https://zelt.app/assets/img/home/hero/sequence/87.webp
      https://zelt.app/assets/img/home/hero/sequence/88.webp
      https://zelt.app/assets/img/home/hero/sequence/89.webp
      https://zelt.app/assets/img/home/hero/sequence/90.webp
      https://zelt.app/assets/img/home/hero/sequence/91.webp
      https://zelt.app/assets/img/home/hero/sequence/92.webp
      https://zelt.app/assets/img/home/hero/sequence/93.webp
      https://zelt.app/assets/img/home/hero/sequence/94.webp
      https://zelt.app/assets/img/home/hero/sequence/95.webp
      https://zelt.app/assets/img/home/hero/sequence/96.webp
      https://zelt.app/assets/img/home/hero/sequence/97.webp
      https://zelt.app/assets/img/home/hero/sequence/98.webp
      https://zelt.app/assets/img/home/hero/sequence/99.webp
      https://zelt.app/assets/img/home/hero/sequence/100.webp
      https://zelt.app/assets/img/home/hero/sequence/101.webp
      https://zelt.app/assets/img/home/hero/sequence/102.webp
      https://zelt.app/assets/img/home/hero/sequence/103.webp
      https://zelt.app/assets/img/home/hero/sequence/104.webp
      https://zelt.app/assets/img/home/hero/sequence/105.webp
      https://zelt.app/assets/img/home/hero/sequence/106.webp
      https://zelt.app/assets/img/home/hero/sequence/107.webp
      https://zelt.app/assets/img/home/hero/sequence/108.webp
      https://zelt.app/assets/img/home/hero/sequence/109.webp
      https://zelt.app/assets/img/home/hero/sequence/110.webp
      https://zelt.app/assets/img/home/hero/sequence/111.webp
      https://zelt.app/assets/img/home/hero/sequence/112.webp
      https://zelt.app/assets/img/home/hero/sequence/113.webp
      https://zelt.app/assets/img/home/hero/sequence/114.webp
      https://zelt.app/assets/img/home/hero/sequence/115.webp
      https://zelt.app/assets/img/home/hero/sequence/116.webp
      https://zelt.app/assets/img/home/hero/sequence/117.webp
      https://zelt.app/assets/img/home/hero/sequence/118.webp
       `;
        return urls.split("\n")[index];
      };

      const frameCount = 118;
      const images = [];
      const imageSeq = {
        frame: 1,
      };

      // Preload all images
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = getImageUrl(i);
        images.push(img);
      }

      // Scale and render image to canvas
      const scaleImage = (img, ctx) => {
        const canvas = ctx.canvas;
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      };

      // Render function
      const render = () => {
        if (images[imageSeq.frame]) {
          scaleImage(images[imageSeq.frame], context);
        }
      };

      // Handle resize
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      };

      window.addEventListener("resize", handleResize);

      // Set up GSAP animation
      gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          scrub: 0.15,
          trigger: canvas,
          start: "top top",
          end: "300% top",
          scroller: mainRef.current,
        },
        onUpdate: render,
      });

      // Create pin for canvas
      ScrollTrigger.create({
        trigger: pageRef.current,
        pin: true,
        scroller: mainRef.current,
        start: "top top",
        end: "300% top",
      });

      // Wait for first image to load before rendering
      if (images[1]) {
        images[1].onload = render;
      }

      // Cleanup function
      return () => {
        window.removeEventListener("resize", handleResize);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    };

    // Initialize everything
    const locoScroll = initLocomotiveScroll();
    const cleanup = setupCanvas();

    // Cleanup when component unmounts
    return () => {
      if (locoScroll) {
        locoScroll.destroy();
      }
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  return (
    <>
      <div id="nav">
        <h1>Nirva</h1>
        <div id="center-nav">
          <a href="/products">Products</a>
          <a href="#">Brands</a>
          <a href="#">Fashion</a>
          <a href="#">Login</a>
        </div>
        <button>GET STARTED</button>
      </div>

      <div id="main" ref={mainRef}>
        <div id="page" ref={pageRef}>
          <h1>
            Awaken Your Inner
            <br />
            Light
          </h1>
          <h4>
            Unveil your skin's radiance with our premium serums.
            <br />
          </h4>
          <canvas ref={canvasRef}></canvas>
        </div>

        <div id="page1">
          <h1>
            Not just another <br />
            Serum
          </h1>
          <h4>
            Now you can elevate your skincare routine with our transformative
            <br />
            solutions for visible results and effortless beauty.
          </h4>
        </div>

        <div id="page4">
          <h1>
            Buy all your skincare
            <br />
            in one place
          </h1>
          <h4>to simplify your routine and unlock effortless radiance.</h4>
        </div>

        <div id="page5">
          <div id="center-page5">
            <div id="left-page5">
              <img
                src={require("../assets/NIRVAMAIN.png")}
                alt="Nirva product"
              />
            </div>
            <div id="right-page5">
              <h1>Radiant Skin</h1>
              <h4>
                Discover the next generation of serum skincare, designed to be
                the cornerstone of your beauty routine. Our advanced formulas
                target everything from hydration to anti-aging, effortlessly
                revitalizing your skin. Minimize the time spent on complicated
                routines with our potent, easy-to-use serums.
              </h4>
              <button>Learn More</button>
            </div>
          </div>
        </div>

        <div id="page6">
          <div className="left-page6">
            <h1>Glow with Purpose</h1>
            <h4>
              At Nirva, we believe that skincare should revolve around the
              unique needs of your skin. Our products are designed to nurture
              and enhance your natural beauty, providing you with the best in
              self-care. With our thoughtfully formulated skincare solutions,
              you won't have to compromise on quality or efficacy to achieve
              radiant, healthy skin.
            </h4>
          </div>
          <div className="right-page6">
            <img src={require("../assets/page6.jpg")} alt="Skincare products" />
          </div>
        </div>

        <div id="page7">
          <div id="center-page7">
            <div className="right-page7">
              <video
                src={require("../assets/second.mp4")}
                autoPlay
                loop
                muted
              ></video>
            </div>
            <div className="left-page7">
              <h1>Empowering Your Skin</h1>
              <h4>
                We believe that true beauty comes from within. Our skincare
                solutions are designed to empower your skin, providing it with
                the nutrients and care it needs to thrive. With easy-to-use
                products and effective formulations, you can achieve healthy,
                glowing skin without any hassle.
              </h4>
            </div>
          </div>
        </div>

        <div id="product-showcase">
          <h2>Featured Products</h2>
          <div className="product-grid">
            <div className="product-card" data-scroll data-scroll-speed="1">
              <div className="product-image">
                <img src={require("../assets/radiance.jpg")} alt="Serum 1" />
              </div>
              <div className="product-info">
                <h3>Radiance Serum</h3>
                <p>Illuminate your skin with our signature serum</p>
                <span className="price">$49.99</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div className="product-card" data-scroll data-scroll-speed="1.2">
              <div className="product-image">
                <img src={require("../assets/hydrating.jpg")} alt="Serum 2" />
              </div>
              <div className="product-info">
                <h3>Hydrating Essence</h3>
                <p>Deep hydration for glowing skin</p>
                <span className="price">$39.99</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div className="product-card" data-scroll data-scroll-speed="1.4">
              <div className="product-image">
                <img src={require("../assets/rejuvenate.jpg")} alt="Serum 3" />
              </div>
              <div className="product-info">
                <h3>Night Repair</h3>
                <p>Rejuvenate while you sleep</p>
                <span className="price">$59.99</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        

        <div className="ritual-builder">
          <div className="ritual-header">
            <h2>Create Your Perfect Ritual</h2>
            <p>Discover your personalized skincare journey</p>
          </div>

          <div className="ritual-steps">
            <div className="ritual-step active">
              <div className="step-circle">
                <img src={require("../assets/hydrating.jpg")} alt="Cleanse" />
                <div className="step-number">1</div>
              </div>
              <div className="step-content">
                <h3>Morning Cleanse</h3>
                <p>Begin your day with gentle purification</p>
                <div className="product-select">
                  <div className="selected-product">
                    <img src={require("../assets/hydrating.jpg")} alt="Hydrating Cleanser" />
                    <div className="product-info">
                      <h4>Hydrating Cleanser</h4>
                      <span>Perfect for morning routine</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ritual-step">
              <div className="step-circle">
                <img src={require("../assets/radiance.jpg")} alt="Treat" />
                <div className="step-number">2</div>
              </div>
              <div className="step-content">
                <h3>Treatment</h3>
                <p>Target your unique skin concerns</p>
                <div className="product-select">
                  <div className="selected-product">
                    <img src={require("../assets/radiance.jpg")} alt="Radiance Serum" />
                    <div className="product-info">
                      <h4>Radiance Serum</h4>
                      <span>For glowing complexion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ritual-step">
              <div className="step-circle">
                <img src={require("../assets/rejuvenate.jpg")} alt="Hydrate" />
                <div className="step-number">3</div>
              </div>
              <div className="step-content">
                <h3>Rejuvenation</h3>
                <p>Lock in moisture and nutrients</p>
                <div className="product-select">
                  <div className="selected-product">
                    <img src={require("../assets/rejuvenate.jpg")} alt="Moisture Lock" />
                    <div className="product-info">
                      <h4>Moisture Lock Cream</h4>
                      <span>24-hour hydration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ritual-preview">
            <div className="preview-header">
              <h3>Your Curated Ritual</h3>
              <p>A perfect blend of products for your skincare goals</p>
            </div>
            
            <div className="routine-timeline">
              <div className="timeline-slot morning">
                <span className="time">Morning</span>
                <div className="slot-products">
                  <div className="timeline-product">
                    <img src={require("../assets/hydrating.jpg")} alt="Morning Cleanser" />
                    <span>Cleanse</span>
                  </div>
                  <div className="timeline-product">
                    <img src={require("../assets/radiance.jpg")} alt="Serum" />
                    <span>Treat</span>
                  </div>
                  <div className="timeline-product">
                    <img src={require("../assets/rejuvenate.jpg")} alt="Moisturizer" />
                    <span>Hydrate</span>
                  </div>
                </div>
              </div>

              <div className="timeline-slot evening">
                <span className="time">Evening</span>
                <div className="slot-products">
                  <div className="timeline-product">
                    <img src={require("../assets/hydrate.jpg")} alt="Evening Cleanser" />
                    <span>Cleanse</span>
                  </div>
                  <div className="timeline-product">
                    <img src={require("../assets/mask.jpg")} alt="Night Mask" />
                    <span>Treat</span>
                  </div>
                  <div className="timeline-product">
                    <img src={require("../assets/gentle.jpg")} alt="Night Cream" />
                    <span>Restore</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ritual-benefits">
              <div className="benefit">
                <div className="benefit-icon">✨</div>
                <h4>Enhanced Radiance</h4>
                <p>Achieve that natural glow</p>
              </div>
              <div className="benefit">
                <div className="benefit-icon">💧</div>
                <h4>Deep Hydration</h4>
                <p>24-hour moisture lock</p>
              </div>
              <div className="benefit">
                <div className="benefit-icon">🌟</div>
                <h4>Skin Renewal</h4>
                <p>Rejuvenate while you rest</p>
              </div>
            </div>

            <button className="save-ritual">
              Save Your Ritual
              <span className="button-accent">✨</span>
            </button>
          </div>
        </div>

        <footer>
          <p>&copy; Nirva - Nupur Kale | All Rights Reserved</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
