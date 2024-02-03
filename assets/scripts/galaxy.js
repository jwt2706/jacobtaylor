import * as THREE from 'three';

const PARTICLE_COUNT = 1000;
const INIT_CAMERA_POS = 500;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const particles = new THREE.Geometry();
const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff });
const mouse = new THREE.Vector2();
const targetRotation = new THREE.Vector2();

// init
camera.position.z = INIT_CAMERA_POS;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// generate particles
for (let i = 0; i < PARTICLE_COUNT; i++) {
    const particle = new THREE.Vector3(getRandomCoord(), getRandomCoord(), getRandomCoord());
    particles.vertices.push(particle);
}
const particleSystem = new THREE.Points(particles, particleMaterial);
scene.add(particleSystem);

// mouse movement
function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}
window.addEventListener('mousemove', onMouseMove, false);

// scroll movement
function onScroll(event) {
    const delta = Math.sign(event.deltaY);
    camera.position.z += delta;
}
window.addEventListener('wheel', onScroll, false);

// main
function animate() {
    requestAnimationFrame(animate);
    targetRotation.x = mouse.y * 0.2;
    targetRotation.y = mouse.x * 0.2;
    particleSystem.rotation.x += (targetRotation.x - particleSystem.rotation.x) * 0.05;
    particleSystem.rotation.y += (targetRotation.y - particleSystem.rotation.y) * 0.05;
    renderer.render(scene, camera);
}
animate();

// other functions
function getRandomCoord() {
    return Math.random() * 800 - 400;
}