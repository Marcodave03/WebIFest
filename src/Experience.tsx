import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { ScrollControls, useScroll } from '@react-three/drei';
import { Komodo } from './komodo';
import { LandingText } from './Components/LandingText';

export const Experience = () => {
    const komodoRef = useRef<THREE.Mesh>();
    const [scrollOffset, setScrollOffset] = useState(0);
    const { size } = useThree();
  
    useFrame(({ clock }) => {
      if (komodoRef.current) {
        komodoRef.current.rotation.y = clock.elapsedTime / 2 + scrollOffset * Math.PI * 2;
      }
    });

    const scroll = useScroll();
  
    const handleScroll = () => {
      const newScrollOffset = scroll.offset / size.height;
      setScrollOffset(newScrollOffset);
    };
  
    return (
      <>
        <ambientLight intensity={6} />
        <ScrollControls pages={6.5} damping={0.25}>
          <Komodo ref={komodoRef} />
          <LandingText scrollOffset={scrollOffset} />
        </ScrollControls>
      </>
    );
};
