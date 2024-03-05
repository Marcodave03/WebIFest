import { useRef } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';
export function Komodo(props) {
  const { nodes, materials } = useGLTF('./models/komodo.glb');
  const ref = useRef();
  const tl = useRef();

  const scroll = useScroll();

  useFrame(() => {
    ref.current.rotation.y = -scroll.offset * Math.PI * 2; 
    ref.current.rotation.x = scroll.offset * Math.PI * 0.3;
  });
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        geometry={nodes.node_id66.geometry}
        material={materials['1111']}
        position={[3, -0.5, 0.2]}
        rotation={[MathUtils.degToRad(10), MathUtils.degToRad(-90), MathUtils.degToRad(-10)]}
        scale={0.06}
      />
    </group>
  );
}

useGLTF.preload('./models/komodo.glb');
