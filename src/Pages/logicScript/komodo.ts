import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const initializeThree = (canvasId: string, containerId: string, modelUrl: string) => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let controls: OrbitControls;
    let model: THREE.Group;

    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    const container = document.getElementById(containerId) as HTMLElement;

    const init = () => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setSize(container.offsetWidth, container.offsetHeight);

        // controls = new OrbitControls(camera, renderer.domElement);
        // controls.enableDamping = true;
        // controls.dampingFactor = 0.25;

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 0);
        scene.add(directionalLight);

        const loader = new GLTFLoader();
        loader.load(modelUrl, (gltf) => {
            model = gltf.scene;
            model.scale.set(0.01, 0.01, 0.01);
            model.rotation.set(THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(120),0);
            model.position.set(40,0,0);
            scene.add(model);
        }, undefined, (error) => {
            console.error('An error happened', error);
        });

        camera.position.set(0, 20, 40);
        camera.lookAt(0, 0, 0);

        const animate = () => {
            requestAnimationFrame(animate);
            // controls.update();
            renderer.render(scene, camera);
        };

        animate();
    };

    init();

    window.addEventListener('resize', () => {
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    });
    let scrollNow = 0;
    window.addEventListener('scroll',()=>{
        const wScroll = window.scrollY;
        const scrollY = wScroll - scrollNow;
        scrollNow = wScroll;
        console.log(wScroll);
        if(wScroll < 781){
            camera.position.x += scrollY * 0.08;
            model.rotation.y -= THREE.MathUtils.degToRad(scrollY*0.32);
            // model.rotation.set(THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(120 - scrollY * 0.3),0);
            // camera.position.z = camera.position.z + scrollY * 0.001;
            // // console.log(camera.position.z);
        }
    })
};
