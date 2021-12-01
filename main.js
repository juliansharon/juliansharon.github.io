import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const flutterScene = new THREE.Scene();
const reactScene = new THREE.Scene();
const nodeScene = new THREE.Scene();

var size = window.innerWidth > 500 ? 500 : 200;
//ProfileCamera
const camera = new THREE.PerspectiveCamera(75, size / size, 0.1, 1000);
camera.position.setZ(30);
camera.position.setX(-3);

const camera1 = new THREE.PerspectiveCamera(75, size / size, 0.1, 1000);
camera1.position.setZ(30);
camera1.position.setX(-3);

const camera2 = new THREE.PerspectiveCamera(75, size / size, 0.1, 1000);
camera2.position.setZ(30);
camera2.position.setX(-3);

//Flutter
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#flutter"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(size, size);

// Flutter Logo
const flutterLogogeometry = new THREE.BoxGeometry(10, 10, 10);
const flutterTexture = new THREE.TextureLoader().load("flutter.svg");
const flutterLogomaterial = new THREE.MeshStandardMaterial({
  map: flutterTexture,
});
const flutterLogo = new THREE.Mesh(flutterLogogeometry, flutterLogomaterial);
flutterScene.add(flutterLogo);

//FlutterLigthing
const pointLight = new THREE.PointLight(0xfffff);
pointLight.position.set(-2, 5, 20);
const pinkLight = new THREE.PointLight(0x0000ff);
pinkLight.position.set(0, -8, 3);
flutterScene.add(pointLight, pinkLight);

//react
const reactRenderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#react"),
});
reactRenderer.setPixelRatio(window.devicePixelRatio);
reactRenderer.setSize(size, size);

//react geometry
const reactLogogeometry = new THREE.BoxGeometry(10, 10, 10);
const reactTexture = new THREE.TextureLoader().load("react.svg");
const reactLogomaterial = new THREE.MeshStandardMaterial({
  map: reactTexture,
});
const reactLogo = new THREE.Mesh(reactLogogeometry, reactLogomaterial);

//react lighting
const pointLight1 = new THREE.PointLight(0xfffff);
pointLight1.position.set(-2, 5, 20);

const pinkLight1 = new THREE.PointLight(0x0000ff);
pinkLight1.position.set(0, -6, 3);

reactScene.add(reactLogo, pointLight1, pinkLight1);
const nodeRenderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#node"),
});

//node
nodeRenderer.setPixelRatio(window.devicePixelRatio);
nodeRenderer.setSize(size, size);

//node geometry
const nodeLogogeometry = new THREE.BoxGeometry(10, 10, 10);
const nodeTexture = new THREE.TextureLoader().load("node.svg");
const nodeLogomaterial = new THREE.MeshStandardMaterial({
  map: nodeTexture,
});
const nodeLogo = new THREE.Mesh(nodeLogogeometry, nodeLogomaterial);

//node lighting
const pointLight2 = new THREE.PointLight(0xfffff);
pointLight2.position.set(-2, 5, 20);
const pinkLight2 = new THREE.PointLight(0x0000ff);
pinkLight2.position.set(-10, 0, 3);
flutterScene.add(pointLight2);
nodeScene.add(nodeLogo, pointLight2, pinkLight2);

animate();

//Animation
function animate() {
  window.requestAnimationFrame(animate);
  size = window.innerWidth > 500 ? 500 : 200;
  // flutterLogo.rotateX(0.01);
  flutterLogo.rotateY(0.0099);
  flutterLogo.rotateZ(-0.01);
  // reactLogo.rotateX(0.01);
  reactLogo.rotateY(0.0099);
  reactLogo.rotateZ(0.01);
  // nodeLogo.rotateX(0.01);
  nodeLogo.rotateY(0.0099);
  nodeLogo.rotateZ(-0.01);
  nodeRenderer.render(nodeScene, camera2);
  reactRenderer.render(reactScene, camera1);
  renderer.render(flutterScene, camera);
}

//eventListeners
// window.document.getElementById("appstore").onclick = () =>
//   window.open(`https://apps.apple.com/tr/app/lstanbul-senin/id1534342254?l=tr`);
window.onload = function () {
  console.log("loaded");
  var a = document.getElementById("appstore");
  console.log(a);
  a.addEventListener("click", () => console.log(a));
};
