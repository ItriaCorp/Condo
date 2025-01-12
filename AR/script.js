// Funzione per aprire documenti
function openDocument(url) {
  window.open(url, '_blank'); // Apre il documento in una nuova scheda
}

// Inizializza la scena
const scene = new THREE.Scene();

// Configura la fotocamera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; // Posizione iniziale della fotocamera

// Configura il renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#ar-canvas') });
renderer.setSize(window.innerWidth * 0.9, 400); // Adatta il canvas alle dimensioni dello schermo
renderer.setPixelRatio(window.devicePixelRatio);

// Aggiungi un pannello fluttuante
const geometry = new THREE.PlaneGeometry(3, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x007bff, side: THREE.DoubleSide });
const panel = new THREE.Mesh(geometry, material);
scene.add(panel);

// Animazione del pannello
function animate() {
  requestAnimationFrame(animate);
  panel.rotation.y += 0.01; // Ruota il pannello sull'asse Y
  renderer.render(scene, camera);
}
animate();

// Rendi la finestra reattiva
window.addEventListener('resize', () => {
  const width = window.innerWidth * 0.9;
  const height = 400;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});
