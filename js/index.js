"use strict";
/*  globals THREE, $, TweenLite, Power3, TimelineMax  */

let camera = void 0,
    scene = void 0,
    renderer = void 0;
let plane = void 0;
let raycaster = new THREE.Raycaster();
let normalizeMouse = {
  x: 0,
  y : -180
};

// let lightBlue = {
//   r: 34,
//   g: 193,
//   b: 236
// };

let darkBlue = {
  r: 0,
  g: 52,
  b: 74
};

let baseColorRGB = darkBlue;
let baseColor = "rgb(" + baseColorRGB.r + "," + baseColorRGB.g + "," + baseColorRGB.b + ")";
let nearStars = void 0,
    farStars = void 0,
    farthestStars = void 0;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRemderer();

  // Scene initialization
  camera.position.z = 50;
  renderer.setClearColor("#121212", 1.0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  document.body.appendChild(renderer.domElement);


  // Lights
  let topLight = new THREE.DirectionalLight(0xffffff, 1);
  topLight.position.set(0, 1, 1).normalize();
  scene.add(topLight);

  let bottomLight = new THREE.DirectionalLight(0xffffff, 0.4);
  bottomLight.position.set(1, -1, 1).normalize();
  scene.add(bottomLight);

  let skyLightRight = new THREE.DirectionalLight(0x666666, 0.2);
  skyLightRight.position.set(-1, -1. 0.2).normalize();
  scene.add(skyLightRight);

  let skyLightCenter = new THREE.DirectionalLight(0x666666, 0.2);
  skyLightCenter.position.set(0, -1, 0.2).normalize();
  scene.add(skyLightCenter);

  let skyLightLeft = new THREE.DirectionalLight(0x666666, 0.2);
  skyLightLeft.position.set(1, -1, 0.2).normalize();
  scene.add(skyLightLeft);


  // Mesh creation
  let geometry = new THREE.PlaneGeometry(400, 400, 70, 70);
  let darkBlueMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading,
    side: THREE.DoubleSide,
    vertexColors: THREE.FaceColors
  });

  geometry.vertices.forEach(function (vertice) {
    vertice.x += (Math.random() - 0.5) * 4;
    vertice.y += (Math.random() - 0.5) * 4;
    vertice.z += (Math.random() - 0.5) * 4;
    vertice.dx += Math.random() - 0.5;
    vertice.dy += Math.random() - 0.5;
    vertice.randomDelay += Math.random() * 5;
  });

  for (let i = 0; i < geometry.faces.length; i++) {
    geometry.faces[i].color.setStyle(baseColor);
    geometry.faces[i].baseColor = baseColorRGB;
  }

  plane = new THREE.Mesh(geometry, darkBlueMaterial);
  scene.add(plane);

  // Create stars
}





let timer = 0;

function render() {
  requestAnimationFrame(render);

  timer += 0.01;
  let vertices = plane.geometry.vertices;

  for (let i = 0; i < vertices.length; i++) {

  }
}
