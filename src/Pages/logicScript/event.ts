// setupThree.ts
import * as THREE from 'three';

export const initializeThree = (canvasId: string) => {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
  if (!canvas) {
    console.error('Canvas element not found');
    return;
  }

  const width = window.innerWidth;
  const height = window.innerHeight;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(width, height);

  const mainCamera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
  mainCamera.position.z = 2;

  const scene = new THREE.Scene();

  // Add your Three.js objects here
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const animate = function () {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, mainCamera);
  };

  animate();
};
