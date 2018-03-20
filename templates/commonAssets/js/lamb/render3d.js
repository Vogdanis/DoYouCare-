window.onload = function render(){
    //renderBox();
    renderChicken();
}

function renderChicken(){

    var container;
    var camera, controls, scene, renderer;
    var lighting, ambient, keyLight, fillLight, backLight;
    
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
    var ratio;
    init();
    animate();
    function init() {

        var container = document.getElementById( 'render' );
        var w = container.offsetWidth;
        var h = container.offsetHeight;
        


        //container = document.createElement('div');
        //document.body.appendChild(container);
        /* Camera */
        camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = -300;
        camera.position.x = 10;
        camera.position.y = 170;
        /* Scene */
        scene = new THREE.Scene();
        scene.background = new THREE.Color(1,1,1);
        //var light = new THREE.AmbientLight( 0x404040, 5 ); // soft white light
        //scene.add( light );
        lighting = false;
        ambient = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambient);
        keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
        keyLight.position.set(100, 0,- 100);
        fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
        fillLight.position.set(100, 0, 100);
        backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        backLight.position.set(100, 0, -100).normalize();
        /* Model */
        var loader = new THREE.ObjectLoader();

        loader.load(
            // resource URL
            "../json/sheep.json",
            // onLoad callback
            // Here the loaded data is assumed to be an object
            function ( obj ) {
                // Add the loaded object to the scene
                obj.rotation.y = 3.5;
                scene.add( obj );
            },

            // onProgress callback
            function ( xhr ) {
                console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
            },

            // onError callback
            function ( err ) {
                console.error( 'An error happened' );
            }
        );

        /*
        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.setBaseUrl('../assets/');
        mtlLoader.setPath('../assets/');
        //mtlLoader.load('female-croupier-2013-03-26.mtl', function (materials) {
        mtlLoader.load('chicken1obj/D0901A10.mtl', function (materials) {
        //mtlLoader.load('D0901A10.mtl', function (materials) { 
            materials.preload();
            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath('../assets/');
            objLoader.load('chicken1obj/D0901A10.obj', function (object) {   
            //objLoader.load('female-croupier-2013-03-26.obj', function (object) {
                object.rotation.y = 180;
                //object.material = new THREE.MeshBasicMaterial({color: new THREE.Color(1,0,0)});
                scene.add(object);
                var box = new THREE.BoxHelper( object, 0xffff00 );
                scene.add( box );
                console.log(scene);
            });
        });
        */


        /* Renderer */
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        ratio = window.devicePixelRatio;
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(new THREE.Color("hsl(0, 0%, 90%)"));
        container.appendChild(renderer.domElement);
        /* Controls */
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;
        /* Events */
        window.addEventListener('resize', onWindowResize, false);
        window.addEventListener('keydown', onKeyboardEvent, false);
        //container.addEventListener('click', playSound,false);
    }
    function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = (window.innerWidth + 0.4) / window.innerHeight ;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
        //renderer.setSize(w, h);
        //container.appendChild(renderer.domElement);
    }
    function onKeyboardEvent(e) {
        if (e.code === 'KeyL') {
            lighting = !lighting;
            if (lighting) {
                ambient.intensity = 0.25;
                scene.add(keyLight);
                scene.add(fillLight);
                scene.add(backLight);
            } else {
                ambient.intensity = 1.0;
                scene.remove(keyLight);
                scene.remove(fillLight);
                scene.remove(backLight);
            }
        }
    }
    // function playSound(e){
    //     var audio = new Audio('../assets/chicken.mp3');
    //     audio.play();
    // }

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        render();
    }
    function render() {
        renderer.render(scene, camera);
    }

}

function playSound(){
    var audio = new Audio('../assets/lamb/sheep.mp3');
    audio.play();
    console.log("playing chicken mp3");
}


function renderBox(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight+0.5, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    //renderer.setSize( window.innerWidth, window.innerHeight );
   // document.body.appendChild( renderer.domElement );
    //renderer.setSize( this.innerWidth, this.innerHeight );
    //document.getElementById("render").appendChild(renderer.domElement );


    var container = document.getElementById( 'render' );
    w = container.offsetWidth;
    h = container.offsetHeight;
    renderer.setSize(w, h);
    container.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    var animate = function () {
    requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    };

    animate();
}
