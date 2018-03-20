var renderer,
    scene,
    camera,
    scene2,
    camera2,
    container;

var arSource,
    arContext,
    arMarker = [];

var 
    mesh,
    mesh2;

init();

function init(){

    container = document.getElementById('container');

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    scene = new THREE.Scene();
    camera = new THREE.Camera();
    scene.add(camera);
    scene.visible = false;

     /////////////////////New Object here////////////////////////
    scene2 = new THREE.Scene(); 
    camera2 = new THREE.Camera(); 
    scene2.add(camera); 
    scene2.visible = false;
     /////////////////////New Object here////////////////////////


    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    


    mesh = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({
        color: 0xFF00FF,
        transparent: true,
        opacity: 0.5
    }));
    scene.add(mesh);

    /////////////////////New Object here////////////////////////
    mesh2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ 
        color: 0xFFFFFF, 
        transparent: true, 
        opacity: 0.5 
    }));
    scene2.add(mesh2);
    /////////////////////New Object here////////////////////////





    arSource = new THREEx.ArToolkitSource({
        sourceType : 'webcam',
    });

    arContext = new THREEx.ArToolkitContext({
        cameraParametersUrl: './assets/data/camera_para.dat',
        detectionMode: 'mono',
    });

    arContext2 = new THREEx.ArToolkitContext({
        cameraParametersUrl: './assets/data/camera_para.dat',
        detectionMode: 'mono',
    });

    arMarker[0] = new THREEx.ArMarkerControls(arContext, camera, {
        type : 'pattern',
        patternUrl : './assets/data/patt.hiro',
        changeMatrixMode: 'cameraTransformMatrix'
    });

    arMarker[1] = new THREEx.ArMarkerControls(arContext, camera2, {
        type : 'pattern',
        patternUrl : './assets/data/pattern-marker-quacamole.patt',
        changeMatrixMode: 'cameraTransformMatrix'
    });





    /* handle */
    arSource.init(function(){
        arSource.onResize();
        arSource.copySizeTo(renderer.domElement);

        if(arContext.arController !== null) arSource.copySizeTo(arContext.arController.canvas);

    });

    arContext.init(function onCompleted(){
        
        camera.projectionMatrix.copy(arContext.getProjectionMatrix());
        ////// add new camera for every new marker
        camera2.projectionMatrix.copy(arContext.getProjectionMatrix());

    });


    render();   
    render2();
    
}   




function render(){
    requestAnimationFrame(render);
    renderer.render(scene,camera);                

    if(arSource.ready === false) return;

    arContext.update(arSource.domElement);
    scene.visible = camera.visible;


    mesh.rotateX(.1);

}  

function render2(){
    requestAnimationFrame(render);
    renderer.render(scene2,camera2);                

    if(arSource.ready === false) return;

    arContext2.update(arSource.domElement);
    scene2.visible = camera2.visible;
    mesh.rotateX(.1);

}   