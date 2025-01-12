// Funzione per aprire documenti
function openDocument(url) {
  window.open(url, '_blank'); // Apre il documento in una nuova scheda
}

// Attiva la fotocamera del dispositivo
async function enableCamera() {
  const video = document.getElementById('camera-feed');

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    console.log("Fotocamera abilitata!");
  } catch (err) {
    console.error("Errore nell'attivare la fotocamera:", err);
  }
}

// Inizializza la scena
const scene = new THREE.Scene();

// Configura la fotocamera 3D
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Configura il renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('ar-canvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Aggiungi un pannello fluttuante
const geometry = new THREE.PlaneGeometry(3, 2);
const material = new THREE.MeshBasicMaterial({
  color: 0x007bff,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0.8,
});
const panel = new THREE.Mesh(geometry, material);
scene.add(panel);

// Animazione del pannello
function animate() {
  requestAnimationFrame(animate);
  panel.rotation.y += 0.01; // Ruota il pannello
  renderer.render(scene, camera);
}
animate();

// Adatta la finestra al resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Avvia il feed della fotocamera
enableCamera();
