// eventScript.ts
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const initializeThree = (canvasId: string, modelPath: string, customWidth: number, customHeight: number) => {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
  if (!canvas) {
    console.error('Canvas element not found');
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, customWidth / customHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(customWidth, customHeight);

  // If you want to add lighting to your scene to better show off the model:
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(0, 1, 0);
  scene.add(directionalLight);

  camera.position.z = 50; // Adjusted camera position to move it even further back

  let model: THREE.Object3D; // Declare model variable in an accessible scope

  // GLTF Model loading
  const loader = new GLTFLoader();
  loader.load(modelPath, (gltf) => {
    model = gltf.scene;
    model.scale.set(0.01, 0.01, 0.01); // Adjust these values to make the model smaller
    scene.add(model);
  }, undefined, (error) => {
    console.error('An error happened', error);
  });

  const mouse = new THREE.Vector2();

  // Add OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Optional: Enable damping for smoother controls

  // Inside the initializeThree() function
  const animate = () => {
    // Remove the animation part to make the models static
    renderer.render(scene, camera);
  };

  // Add event listener for mouse move
  canvas.addEventListener('mousemove', (event) => {
    // Convert mouse position to normalized device coordinates (-1 to +1)
    mouse.x = (event.clientX / customWidth) * 2 - 1;
    mouse.y = -(event.clientY / customHeight) * 2 + 1;
  });

};
