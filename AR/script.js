// Inizializza la scena
const scene = new THREE.Scene();

// Configura la fotocamera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Configura il renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Aggiungi un pannello fluttuante
const geometry = new THREE.PlaneGeometry(3, 2); // Pannello rettangolare
const material = new THREE.MeshBasicMaterial({ color: 0x007bff, side: THREE.DoubleSide });
const panel = new THREE.Mesh(geometry, material);
scene.add(panel);

// Aggiungi un testo o un'immagine al pannello (opzionale)
const loader = new THREE.TextureLoader();
loader.load('assets/texture.png', function (texture) {
  panel.material.map = texture;
  panel.material.needsUpdate = true;
});

// Animazione (render loop)
function animate() {
  requestAnimationFrame(animate);
  panel.rotation.y += 0.01; // Rotazione animata
  renderer.render(scene, camera);
}
animate();

