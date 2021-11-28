import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const flutterScene = new THREE.Scene();
const reactScene = new THREE.Scene();
//ProfileCamera
const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
camera.position.setZ(30);
camera.position.setX(-3);

//ProfileRender
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#flutter"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(500, 500);

// Flutter Logo
const flutterLogogeometry = new THREE.BoxGeometry(10, 10, 10);
const flutterTexture = new THREE.TextureLoader().load("flutter.jpeg");
const flutterLogomaterial = new THREE.MeshStandardMaterial({
  map: flutterTexture,
});
const flutterLogo = new THREE.Mesh(flutterLogogeometry, flutterLogomaterial);
flutterScene.add(flutterLogo);
//ProfileLigthing
const pointLight = new THREE.PointLight(0xfffff);
pointLight.position.set(-2, 5, 20);
flutterScene.add(pointLight);

const reactRenderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#react"),
});
reactRenderer.setPixelRatio(window.devicePixelRatio);
reactRenderer.setSize(500, 500);
const reactLogogeometry = new THREE.BoxGeometry(10, 10, 10);
const reactTexture = new THREE.TextureLoader().load("react.png");
const reactLogomaterial = new THREE.MeshStandardMaterial({
  map: reactTexture,
});
const reactLogo = new THREE.Mesh(reactLogogeometry, reactLogomaterial);
//reactScene.add(reactLogo, pointLight);

animate();

//Animation
function animate() {
  window.requestAnimationFrame(animate);
  flutterLogo.rotateX(0.01);
  flutterLogo.rotateY(0.0099);
  flutterLogo.rotateZ(-0.01);
  // reactLogo.rotateX(0.01);
  // reactLogo.rotateY(0.0099);
  // reactLogo.rotateZ(-0.01);
  reactRenderer.render(reactScene, camera);
  renderer.render(flutterScene, camera);
}
