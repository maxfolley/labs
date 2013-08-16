require.config({
  baseUrl: '../scripts/'
});

require([
  "lib/oak.min",
  "lib/three.min"
], function (oak) {
  var w = 400,
      h = 300.
      aspect = w/h,
      viewAngle = 45,
      near = 0.1,
      far = 10000,
      container = document.getElementById("container"),
      renderer = new THREE.WebGLRenderer(),
      camera = new THREE.PerspectiveCamera(viewAngle, aspect, near, far), 
      scene = new THREE.Scene();

  scene.add(camera);
  camera.position.z = 300;

  renderer.setSize(w, h);

  container.appendChild(renderer.domElement);

  var sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0xCC0000
  });

  var sphere = new THREE.Mesh(
    new THREE.SphereGeometry(50, 16, 16),
    sphereMaterial
  );


  var pointLight = new THREE.PointLight(0xFFFFFF);

  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 130;

  scene.add(sphere);
  scene.add(pointLight);

  function draw() {
    oak.requestAnimationFrame(draw)
    renderer.render(scene, camera);
  }

  oak.requestAnimationFrame(draw)
});

