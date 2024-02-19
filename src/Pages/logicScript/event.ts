import * as THREE from 'three';
// Import the GLTFLoader
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const initializeThree = (canvasId: string, modelPath: string) => {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
  if (!canvas) {
    console.error('Canvas element not found');
    return;
  }

  const width = window.innerWidth;
  const height = window.innerHeight;

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(width, height);

  // Camera setup
  const mainCamera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
  mainCamera.position.z = 2;

  // Scene setup
  const scene = new THREE.Scene();

  // Lighting (optional, but recommended for better appearance)
  const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1).normalize();
  scene.add(directionalLight);

  // GLTF Model loading
  const loader = new GLTFLoader();
  loader.load(modelPath, (gltf) => {
    scene.add(gltf.scene);
    animate(); // Call the animate function once the model is loaded
  }, undefined, (error) => {
    console.error('An error happened', error);
  });

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, mainCamera);
  };
};
