// scrollingEffects.ts

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
      const value: number = window.scrollY * scrollFactor; 
    if (text1) {
        text1.style.marginTop = value * 0.1 + 'px';
    }
    if (beach1 && beach2 && beach3 && beach4 && beach5 && sec) {
        const dn: number =  1;
        beach1.style.top = 0 + 'px';
        beach2.style.top = value * -0.4 + 'px' ;
        beach3.style.top = value * -0.8 + 'px';
        beach4.style.top = value * -1.2 + 'px';
        beach5.style.top = value * -2.4 + 'px';
        sec.style.top = value * -2.4 + 'px';
      }
    });
  }
};
