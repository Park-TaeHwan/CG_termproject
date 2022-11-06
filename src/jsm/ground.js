import * as THREE from 'three';


// GROUND

var groundGeo = new THREE.PlaneBufferGeometry( 1000,1000 );
var groundMat = new THREE.MeshLambertMaterial( { color: 0xffffff } );
groundMat.color.setHSL( 0.6, 0.9, 0.7 );

var ground = new THREE.Mesh( groundGeo, groundMat );
ground.position.y = - 33;
ground.rotation.x = - Math.PI / 2;
ground.receiveShadow = true;

for (let i = 1; i < 4; i++) {
    const cloud = document.createElement('span');
    cloud.classList.add('cloud', `x${i}`);
};

export {
    ground,
}