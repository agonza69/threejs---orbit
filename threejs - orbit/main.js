
var size = 20;
var divisions = 10;

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,100);
camera.position.z = 6;
camera.position.y = 2;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var grid = new THREE.GridHelper(size, divisions); 
scene.add(grid);

var controls = new THREE.OrbitControls(camera, renderer.domElement); 

var geometry = new THREE.TorusGeometry( 10, 3, 16, 50 );
var material =new THREE.MeshBasicMaterial({color: 0x00ffff});
var mesh = new THREE.Mesh(geometry,material);
//mesh.position.x = 2;
scene.add(mesh);
//scene.add(torus);


var light = new THREE.PointLight(0xFFFFF,1,500)
light.position.set(10,0,25);
scene.add(light);


window.addEventListener('resize', () => {

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();

} );

function animate(){
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.005;
  
    renderer.render(scene,camera);
}

animate();
