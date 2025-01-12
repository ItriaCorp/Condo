// Inizializza la scena
const scene = new THREE.Scene();

// Configura la fotocamera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; // Posizione iniziale della fotocamera

// Configura il renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas') });
renderer.setSize(window.innerWidth * 0.9, 400); // Adatta il renderer alla finestra
renderer.setPixelRatio(window.devicePixelRatio); // Migliora la qualità su schermi ad alta densità

// Aggiungi un pannello fluttuante
const geometry = new THREE.PlaneGeometry(3, 2); // Crea un rettangolo
const material = new THREE.MeshBasicMaterial({ color: 0xe63946, side: THREE.DoubleSide }); // Materiale rosso vivo
const panel = new THREE.Mesh(geometry, material);
scene.add(panel); // Aggiungi il pannello alla scena

// Aggiungi texture (immagine) al pannello
const loader = new THREE.TextureLoader();
loader.load('assets/texture.png', function (texture) {
  panel.material.map = texture; // Aggiungi la texture al pannello
  panel.material.needsUpdate = true; // Aggiorna il materiale
});

// Animazione del pannello
function animate() {
  requestAnimationFrame(animate); // Loop dell'animazione
  panel.rotation.y += 0.01; // Ruota il pannello lungo l'asse Y
  renderer.render(scene, camera); // Renderizza la scena
}
animate();

// Rendi la finestra reattiva
window.addEventListener('resize', () => {
  const width = window.innerWidth * 0.9; // Adatta la larghezza al ridimensionamento
  const height = 400; // Mantieni l'altezza fissa
  renderer.setSize(width, height);
  camera.aspect = width / height; // Aggiorna il rapporto d'aspetto della fotocamera
  camera.updateProjectionMatrix();
});
