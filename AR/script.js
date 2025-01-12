// Inizializza la scena
const scene = new THREE.Scene();

// Configura la fotocamera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Configura il renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas') });
renderer.setSize(window.innerWidth, window.innerHeight); // Adatta il canvas alle dimensioni dello schermo
renderer.setPixelRatio(window.devicePixelRatio); // Migliora la qualità su schermi mobili

// Aggiungi un cubo alla scena per test
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animazione del cubo
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01; // Rotazione sull'asse X
  cube.rotation.y += 0.01; // Rotazione sull'asse Y
  renderer.render(scene, camera);
}
animate();

// Rendi la finestra reattiva
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

// Debug per dispositivi mobili
console.log("WebGL supportato:", renderer.capabilities.isWebGL2);
