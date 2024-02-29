// eventScript.ts
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const initializeThree = (canvasId: string, modelPath: string) => {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
  console.log(canvas.height);
  console.log(canvas.width);
  const width = canvas.width;
  const height = canvas.height;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(width, height);
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
    animate(); // Start animation after model loaded
  }, undefined, (error) => {
    console.error('An error happened', error);
  });

  const mouse = new THREE.Vector2();

  // Add OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Optional: Enable damping for smoother controls

  // Inside the initializeThree() function
  const animate = () => {
    requestAnimationFrame(animate);

    // Update OrbitControls
    controls.update();

    renderer.render(scene, camera);
  };

  // Add event listener for mouse move
  canvas.addEventListener('mousemove', (event) => {
    // Convert mouse position to normalized device coordinates (-1 to +1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  });

};







// eventScript.ts
// import * as THREE from 'three';

// export const initializeThree = (canvasId: string) => {
//   const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
//   if (!canvas) {
//     console.error('Canvas element not found');
//     return;
//   }

//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//   const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   const geometry = new THREE.BoxGeometry();
//   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//   const cube = new THREE.Mesh(geometry, material);
//   scene.add(cube);

//   camera.position.z = 5;

//   const animate = () => {
//     requestAnimationFrame(animate);

//     // Rotation logic for the cube
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera);
//   };

//   animate();
// };

