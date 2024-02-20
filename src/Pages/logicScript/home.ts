// scrollingEffects.ts

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
    const value: number = window.scrollY;
    if (text1) {
        text1.style.marginTop = value * -0.1 + 'px';
    }
    if (beach1 && beach2 && beach3 && beach4 && beach5 && sec) {
        const dn: number =  1;
        beach1.style.top = 0 + 'px';
        beach2.style.top = value * -0.1 + 'px /' + dn + 'vw' ;
        beach3.style.top = value * -0.2 + 'px /' + dn + 'vw';
        beach4.style.top = value * -0.3 + 'px /' + dn + 'vw';
        beach5.style.top = value * -0.4 + 'px /' + dn + 'vw';
        sec.style.top = value * -0.4 + 'px /' + dn + 'vw';
      }
    });
  }
};
