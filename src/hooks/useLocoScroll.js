import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector('#main');
    
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: 'is-reveal',
    });

    locoScroll.on('scroll', () => {
      ScrollTrigger.update();
    });

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (arguments.length) {
          locoScroll.scrollTo(value, 0, 0);
        }
        return locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? 'transform' : 'fixed',
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    ScrollTrigger.addEventListener('refresh', lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener('refresh', lsUpdate);
        locoScroll.destroy();
        locoScroll = null;
      }
    };
  }, [start]);
}