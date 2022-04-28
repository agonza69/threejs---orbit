
var size = 20;
var divisions = 10;

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(134,window.innerWidth/window.innerHeight,0.5,200);
camera.position.z = 8;
camera.position.y = 0;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

//var grid = new THREE.GridHelper(size, divisions); 
//scene.add(grid);

var controls = new THREE.OrbitControls(camera, renderer.domElement); 


//creating torus shapes
var geometry = new THREE.TorusGeometry( 2, 1, 3, 6 );
var material =new THREE.MeshBasicMaterial({color: 0x00ff3f});
var mesh = new THREE.Mesh(geometry,material);
mesh.position.x = 20;
scene.add(mesh);

var geometry2 = new THREE.TorusGeometry( 2, 1, 3, 6 );
var material2 =new THREE.MeshBasicMaterial({color: 0x00ff3f});
var mesh2 = new THREE.Mesh(geometry2,material2);
mesh2.position.x = -20;
scene.add(mesh2);


//image loader
var geometry4 = new THREE.BoxBufferGeometry( 200, 100, 1 );
            material4 = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load("images/fuzzyCactus.jpg") });
            var cube4 = new THREE.Mesh( geometry4, material4 );
            scene.add( cube4 );
cube4.position.z= -15;

//loading cactus model and animating
var loader = new THREE.GLTFLoader();
 
var cactusMod;
var isGrowing = true;


loader.load( 'models/cactus1.gltf', ( gltf ) => {
    cactusMod = gltf.scene;
    scene.add( cactusMod );
    cactusMod.position.y= -5;

    function animateScale(){

        requestAnimationFrame(animateScale);
        

        //set a max value for the scale
        //if max value is met, reverse scale
        console.log(cactusMod.scale.x);

        if(cactusMod.scale.x < 1.50 && isGrowing == true){
            cactusMod.scale.x += 0.03;
            cactusMod.scale.y += 0.03;
            cactusMod.scale.z += 0.03;
            if(cactusMod.scale.x > 1.50)
            {
                console.log("is growing false");
                isGrowing = false;
            }
        }
        if(cactusMod.scale.x > 1.01 && isGrowing == false){
            cactusMod.scale.x -=0.01;
            cactusMod.scale.y -= 0.01;
            cactusMod.scale.z -= 0.01;
            console.log("is not growing");
            if(cactusMod.scale.x== 1.01)
            {
                console.log("is growing false");
                isGrowing = true;
            }
        }
        
        
    }

    animateScale( );
});



var light = new THREE.PointLight(0xFFF3F,2,200)
light.position.set(10,0,5);
scene.add(light);


window.addEventListener('resize', () => {

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();

} );


//animating toruses

function animate(){
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.005;
  
    renderer.render(scene,camera);
}

animate();

function animate2(){
    requestAnimationFrame(animate2);
    mesh2.rotation.x += 0.01;
    mesh2.rotation.y += 0.005;
  
    renderer.render(scene,camera);
}

animate2();



/*

let img;

function preload() {
  img = loadImage('images/fuzzyCactus.jpg');
}

var geometry3 = new THREE.SphereGeometry(0.5, 32, 32);
var texture = new THREE.TextureLoader().load( "images/fuzzyCactus.jpg" );
var material3 = new THREE.MeshBasicMaterial( { map: texture } );
var mesh3 = new THREE.Mesh(geometry3, material3);
scene.add(mesh3);


var texture = new THREE.TextureLoader().load( 'images/fuzzyCactus.jpg' );


				var geometry3 = new THREE.BoxBufferGeometry( 200, 200, 200 );
				var material3 = new THREE.MeshBasicMaterial( { map: texture } );


				mesh3 = new THREE.Mesh( geometry3, material3 );
				scene.add( mesh3 );

tying to load image
// load a image resource

const loader1 = new THREE.ImageLoader();
loader1.load(
	// resource URL
	'images/fuzzyCactus.jpg',
    scene.add( c );

	// onLoad callback
	function ( image ) {
		// use the image, e.g. draw part of it on a canvas
		const canvas = document.createElement( 'canvas' );
		const context = canvas.getContext( '2d' );
		context.drawImage( image, 100, 100 );
	},

	// onProgress callback currently not supported
	undefined,

	// onError callback
	function () {
		console.error( 'An error happened.' );
	}
);

//adding this breaks all the code


var loader02 = new THREE.GLTFLoader();
var cactusMod02;

loader02.load( 'models/cactus02.gltf', ( gltf ) => {
    cactusMod02 = gltf.scene;
    scene.add( cactusMod02 );
    
*/

