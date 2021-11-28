import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const flutterScene = new THREE.Scene();
const reactScene = new THREE.Scene();
const nodeScene = new THREE.Scene();
//ProfileCamera
const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
camera.position.setZ(30);
camera.position.setX(-3);

const camera1 = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
camera1.position.setZ(30);
camera1.position.setX(-3);

const camera2 = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
camera2.position.setZ(30);
camera2.position.setX(-3);

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

//react
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
const pointLight1 = new THREE.PointLight(0xfffff);
pointLight1.position.set(-2, 5, 20);
flutterScene.add(pointLight1);
reactScene.add(reactLogo, pointLight1);

//node
const nodeRenderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#node"),
});
nodeRenderer.setPixelRatio(window.devicePixelRatio);
nodeRenderer.setSize(500, 500);
const nodeLogogeometry = new THREE.BoxGeometry(10, 10, 10);
const nodeTexture = new THREE.TextureLoader().load("node.jpeg");
const nodeLogomaterial = new THREE.MeshStandardMaterial({
  map: nodeTexture,
});
const nodeLogo = new THREE.Mesh(nodeLogogeometry, nodeLogomaterial);
const pointLight2 = new THREE.PointLight(0xfffff);
pointLight2.position.set(-2, 5, 20);
flutterScene.add(pointLight2);
nodeScene.add(nodeLogo, pointLight2);

animate();

//Animation
function animate() {
  window.requestAnimationFrame(animate);
  flutterLogo.rotateX(0.01);
  flutterLogo.rotateY(0.0099);
  flutterLogo.rotateZ(-0.01);
  reactLogo.rotateX(0.01);
  reactLogo.rotateY(0.0099);
  reactLogo.rotateZ(0.01);
  nodeLogo.rotateX(0.01);
  nodeLogo.rotateY(0.0099);
  nodeLogo.rotateZ(-0.01);
  nodeRenderer.render(nodeScene, camera2);
  reactRenderer.render(reactScene, camera1);
  renderer.render(flutterScene, camera);
}
