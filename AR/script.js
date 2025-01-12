// Debug iniziale: verifica che il file sia caricato
console.log("script.js è stato caricato correttamente!");

// Inizializza la scena
const scene = new THREE.Scene();
console.log("Scena inizializzata.");

// Configura la fotocamera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; // Posizione iniziale della fotocamera
console.log("Fotocamera configurata.");

// Configura il renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas') });
renderer.setSize(window.innerWidth, window.innerHeight); // Adatta il canvas alle dimensioni dello schermo
renderer.setPixelRatio(window.devicePixelRatio); // Migliora la qualità su dispositivi con alta densità di pixel
console.log("Renderer configurato.");

// Aggiungi un cubo alla scena per test
const geometry = new THREE.BoxGeometry(); // Geometria del cubo
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Materiale verde
const cube = new THREE.Mesh(geometry, material); // Crea il cubo
scene.add(cube); // Aggiungi il cubo alla scena
console.log("Cubo aggiunto alla scena.");

// Animazione del cubo
function animate() {
  requestAnimationFrame(animate); // Loop dell'animazione
  cube.rotation.x += 0.01; // Ruota il cubo sull'asse X
  cube.rotation.y += 0.01; // Ruota il cubo sull'asse Y
  renderer.render(scene, camera); // Renderizza la scena
}
animate();
console.log("Animazione avviata.");

// Rendi la finestra reattiva
window.addEventListener('resize', () => {
  console.log("Finestra ridimensionata.");
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height); // Aggiorna le dimensioni del canvas
  camera.aspect = width / height; // Aggiorna il rapporto d'aspetto della fotocamera
  camera.updateProjectionMatrix(); // Aggiorna la matrice di proiezione della fotocamera
});
