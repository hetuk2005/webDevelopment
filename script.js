import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// ✅ Better Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(2, 5, 5);
scene.add(directionalLight);

const loader = new GLTFLoader();
let model;

loader.load("./astronaut.glb", (gltf) => {
  model = gltf.scene;
  model.scale.set(1.5, 1.5, 1.5);
  scene.add(model);
});

// Scroll value
let scrollY = 0;

window.addEventListener("scroll", () => {
  scrollY = window.scrollY;
});

// Resize handling
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  if (model) {
    // Smooth rotation
    model.rotation.y += 0.01;

    // Parallax movement
    model.position.y = -scrollY * 0.003;

    // Slight camera depth movement
    camera.position.z = 5 + scrollY * 0.002;
  }

  renderer.render(scene, camera);
}

animate();
