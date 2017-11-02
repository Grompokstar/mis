$(function(){

  $(window).ready(function(){

    var $translatesLinks = $('.translate'),
        $content = $('.content'),
        windowHeight = $(window).height();

    if (windowHeight < 700) {
      $content.addClass('scrolled');
    }

    $(window).resize(function(){
      windowHeight = $(window).height();

      if (windowHeight < 700) {
        $content.addClass('scrolled');
      } else {
        $content.removeClass('scrolled');
      }
    });




    //three.js
    var mouseX = 0, mouseY = 0,

      windowHalfX = window.innerWidth / 2,
      windowHalfY = window.innerHeight / 2,

      camera1, camera2, scene1, scene2, renderer1, renderer2,  particles1 = [], particle1, particles2 = [], particle2;

    init();
    animate();

    function init() {

      var container1, container2;


      container1 = document.getElementById('three-container-1');
      container2 = document.getElementById('three-container-2');

      camera1 = new THREE.PerspectiveCamera( 100, 3, 1, 1000 );
      camera1.position.z = 200;

      camera2 = new THREE.PerspectiveCamera( 100, 2.5, 1, 1000 );
      camera2.position.z = 200;

      scene1 = new THREE.Scene();
      scene2 = new THREE.Scene();

      renderer1 = new THREE.CanvasRenderer();
      renderer1.setClearColor(0x191919);
      renderer1.setPixelRatio( window.devicePixelRatio );
      renderer1.setSize( 300, 100 );
      container1.appendChild( renderer1.domElement );

      renderer2 = new THREE.CanvasRenderer();
      renderer2.setClearColor(0x191919);
      renderer2.setPixelRatio( window.devicePixelRatio );
      renderer2.setSize( 250, 100 );
      container2.appendChild( renderer2.domElement );

      // particles

      var PI2 = Math.PI * 2;
      var material = new THREE.SpriteCanvasMaterial( {

        color: 0xffffff,
        program: function ( context ) {

          context.beginPath();
          context.arc( 0, 0, 0.5, 0, PI2, true );
          context.fill();

        }

      } );

      var geometry1 = new THREE.Geometry(),
          geometry2 = new THREE.Geometry();

      var i = 0;

      particle1 = particles1[i] = new THREE.Sprite( material );
      particle1.position.set(43, 186, -22);
      particle1.scale.x = particle1.scale.y = 10;
      scene1.add( particle1 );
      geometry1.vertices.push( particle1.position );

      particle2 = particles2[i] = new THREE.Sprite( material );
      particle2.position.set(-166, -177, -103);
      particle2.scale.x = particle2.scale.y = 10;
      scene2.add( particle2 );
      geometry2.vertices.push( particle2.position );

      i++;

      particle1 = particles1[i] = new THREE.Sprite( material );
      particle1.position.set(46, -167, 53);
      particle1.scale.x = particle1.scale.y = 10;
      scene1.add( particle1 );
      geometry1.vertices.push( particle1.position );

      particle2 = particles2[i] = new THREE.Sprite( material );
      particle2.position.set(128, -161, -99);
      particle2.scale.x = particle2.scale.y = 10;
      scene2.add( particle2 );
      geometry2.vertices.push( particle2.position );

      i++;

      particle1 = particles1[i] = new THREE.Sprite( material );
      particle1.position.set(-175, -111, -192);
      particle1.scale.x = particle1.scale.y = 10;
      scene1.add( particle1 );
      geometry1.vertices.push( particle1.position );

      particle2 = particles2[i] = new THREE.Sprite( material );
      particle2.position.set(127, -115, 60);
      particle2.scale.x = particle2.scale.y = 10;
      scene2.add( particle2 );
      geometry2.vertices.push( particle2.position );

      i++;

      particle1 = particles1[i] = new THREE.Sprite( material );
      particle1.position.set(-160, 88, -160);
      particle1.scale.x = particle1.scale.y = 10;
      scene1.add( particle1 );
      geometry1.vertices.push( particle1.position );

      particle2 = particles2[i] = new THREE.Sprite( material );
      particle2.position.set(66, 167, -151);
      particle2.scale.x = particle2.scale.y = 10;
      scene2.add( particle2 );
      geometry2.vertices.push( particle2.position );

      i++;

      particle1 = particles1[i] = new THREE.Sprite( material );
      particle1.position.set(43, 186, -22);
      particle1.scale.x = particle1.scale.y = 10;
      scene1.add( particle1 );
      geometry1.vertices.push( particle1.position );

      particle2 = particles2[i] = new THREE.Sprite( material );
      particle2.position.set(-14, 38, -49);
      particle2.scale.x = particle2.scale.y = 10;
      scene2.add( particle2 );
      geometry2.vertices.push( particle2.position );

      i++;
      particle2 = particles2[i] = new THREE.Sprite( material );
      particle2.position.set(-166, -177, -103);
      particle2.scale.x = particle2.scale.y = 10;
      scene2.add( particle2 );
      geometry2.vertices.push( particle2.position );

      console.log(particles2);

      // lines

      var line1 = new THREE.Line( geometry1, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.6 })),
          line2 = new THREE.Line( geometry2, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.6 }));
      scene1.add( line1 );
      scene2.add( line2 );

      document.addEventListener( 'mousemove', onDocumentMouseMove, false );
      document.addEventListener( 'touchstart', onDocumentTouchStart, false );
      document.addEventListener( 'touchmove', onDocumentTouchMove, false );

      //

      window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera1.aspect = window.innerWidth / window.innerHeight;
      camera1.updateProjectionMatrix();

      renderer1.setSize( 300, 100 );

      camera2.aspect = window.innerWidth / window.innerHeight;
      camera2.updateProjectionMatrix();

      renderer2.setSize( 250, 100 );

    }

    //

    function onDocumentMouseMove(event) {

      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;

    }

    function onDocumentTouchStart( event ) {

      if ( event.touches.length > 1 ) {

        event.preventDefault();

        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        mouseY = event.touches[ 0 ].pageY - windowHalfY;

      }

    }

    function onDocumentTouchMove( event ) {

      if ( event.touches.length == 1 ) {

        event.preventDefault();

        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        mouseY = event.touches[ 0 ].pageY - windowHalfY;

      }

    }

    //

    function animate() {

      requestAnimationFrame( animate );

      render();

    }

    function render() {

      camera1.position.x += ( mouseX - camera1.position.x ) * .01;
      camera1.position.y += ( - mouseY + 200 - camera1.position.y ) * .01;
      camera1.lookAt( scene1.position );

      camera2.position.x += ( -mouseX + 200 - camera2.position.x ) * .01;
      camera2.position.y += ( mouseY - camera2.position.y ) * .01;
      camera2.lookAt( scene1.position );

      renderer1.render( scene1, camera1 );

      renderer2.render( scene2, camera2 );

    }

  });

}());

