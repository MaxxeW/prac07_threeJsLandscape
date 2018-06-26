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
  camera.postion.z = 50;
  renderer.setClearColor("#121212", 1.0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  document.body.appendChild(renderer.domElement);
}





let timer = 0;

function render() {
  requestAnimationFrame(render);

  timer += 0.01;
  let vertices = plane.geometry.vertices;

  for (let i = 0; i < vertices.length; i++) {
    
  }
}
