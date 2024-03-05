export const applyScrollingEffects = (): void => {
  const text1: HTMLElement | null = document.getElementById('text1');
  const beach1: HTMLElement | null = document.getElementById('beach1');
  const beach2: HTMLElement | null = document.getElementById('beach2');
  const beach3: HTMLElement | null = document.getElementById('beach3');
  const beach4: HTMLElement | null = document.getElementById('beach4');
  const beach5: HTMLElement | null = document.getElementById('beach5');
  const sec: HTMLElement | null = document.getElementById('sec');

  if (text1 && beach1 && beach2 && beach3 && beach4 && beach5 && sec) {
    window.addEventListener('scroll', () => {
      const value: number = window.scrollY;   // Untuk konten
    if (text1) {
        text1.style.marginTop = value * 1 + 'px';
    }
    if (beach1 && beach2 && beach3 && beach4 && beach5 && sec) {
        const dn: number =  1;
        beach5.style.top = 0 + 'px';
        beach4.style.top = value * 0.1 + 'px' ;
        beach3.style.top = value * 0.2 + 'px';
        beach2.style.top = value * 0.4 + 'px';
        beach1.style.top = 0 + 'px';
        sec.style.top = 0 + 'px';
      }
    });
  }

  const outsideImage: HTMLElement | null = document.getElementById('outsideImage');
  const insideImage: HTMLElement | null = document.getElementById('insideImage');
  const rotationFactor = 0.3;
  
  if (outsideImage && insideImage) {
      window.addEventListener('scroll', () => {
          const scrollPosition: number = window.scrollY;
          const outsideRotation = `rotate(${scrollPosition * rotationFactor}deg) translateZ(0)`;
          const insideRotation = `rotate(-${scrollPosition * rotationFactor}deg) translateZ(0)`;
          outsideImage.style.transform = outsideRotation;
          insideImage.style.transform = insideRotation;
      });
  }
}  