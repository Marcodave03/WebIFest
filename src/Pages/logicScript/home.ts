// scrollingEffects.ts
import Home from '../home';

export const applyScrollingEffects = (): void => {
  const text1: HTMLElement | null = document.getElementById('text1');
  const beach1: HTMLElement | null = document.getElementById('beach1');
  const beach2: HTMLElement | null = document.getElementById('beach2');
  const beach3: HTMLElement | null = document.getElementById('beach3');
  const beach4: HTMLElement | null = document.getElementById('beach4');
  const beach5: HTMLElement | null = document.getElementById('beach5');
  const sec: HTMLElement | null = document.getElementById('sec');
  const scrollFactor = 0.5;

  if (text1 && beach1 && beach2 && beach3 && beach4 && beach5 && sec) {
    window.addEventListener('scroll', () => {
      const value: number = window.scrollY;   // Untuk konten
    if (text1) {
        text1.style.marginTop = value * 0.1 + 'px';
    }
    if (beach1 && beach2 && beach3 && beach4 && beach5 && sec) {
        const dn: number =  1;
        beach1.style.top = 0 + 'px';
        beach2.style.top = value * -0.2 + 'px' ;
        beach3.style.top = value * -0.4 + 'px';
        beach4.style.top = value * -0.6 + 'px';
        beach5.style.top = value * -1.2 + 'px';
        sec.style.top = value * -1.2 + 'px';
      }
    });
  }

  const outsideImage: HTMLElement | null = document.getElementById('outsideImage');
  const insideImage: HTMLElement | null = document.getElementById('insideImage');
  const rotationFactor = 0.3;

  if (outsideImage && insideImage) {
      window.addEventListener('scroll', () => {
          const scrollPosition: number = window.scrollY;
          outsideImage.style.transform = `rotate(${scrollPosition * rotationFactor}deg)`;
          insideImage.style.transform = `rotate(-${scrollPosition * rotationFactor}deg)`;
      });
  }
};
