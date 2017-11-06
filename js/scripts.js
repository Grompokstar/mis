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
      count = 1, maxCount = 70, randomX = [], randomY = [], radius = 20,
      randomX2 = [], randomY2 = [],

      camera1, camera2, scene1, scene2, renderer1, renderer2,  particles1 = [], particle1, particles2 = [],
      particle2, differentX = [], differentY = [], stepX = [], stepY = [], prevPositionX = [], prevPositionY = [],
      stepX2 = [], stepY2 = [],
      startXPositions = [43, 46, -175, -160, 43], startYPositions = [186, -167, -111, 88, 186],
      startXPositions2 = [100, 450, 550, 130, -150, 100], startYPositions2 = [200, 150, -111, -50, -88, 200];

    init();
    animate();

    function init() {

      var container1, container2;


      container1 = document.getElementById('three-container-1');
      container2 = document.getElementById('three-container-2');

      camera1 = new THREE.PerspectiveCamera( 100, 2.4, 1, 1000 );
      camera1.position.z = 200;

      camera2 = new THREE.PerspectiveCamera( 100, 2.5, 1, 1000 );
      camera2.position.z = 200;

      scene1 = new THREE.Scene();
      scene2 = new THREE.Scene();

      renderer1 = new THREE.CanvasRenderer();
      renderer1.setClearColor(0x191919);
      renderer1.setPixelRatio( window.devicePixelRatio );
      renderer1.setSize( 300, 125 );
      container1.appendChild( renderer1.domElement );

      renderer2 = new THREE.CanvasRenderer();
      renderer2.setClearColor(0x191919);
      renderer2.setPixelRatio( window.devicePixelRatio );
      renderer2.setSize( 300, 125 );
      container2.appendChild( renderer2.domElement );

      // particles

      var PI2 = Math.PI * 2;
      var material = new THREE.SpriteCanvasMaterial( {

        color: 0x979797,
        program: function ( context ) {

          context.beginPath();
          context.arc( 0, 0, 0.5, 0, PI2, true );
          context.fill();

        }

      } );

      var geometry1 = new THREE.Geometry(),
          geometry2 = new THREE.Geometry();

      var i;

      for(i = 0; i < 5; i++) {
        particle1 = particles1[i] = new THREE.Sprite( material );
        particle1.position.set(startXPositions[i], startYPositions[i], 0);
        particle1.scale.x = particle1.scale.y = 15;
        scene1.add( particle1 );
        geometry1.vertices.push( particle1.position );

        randomX[i] = getRandomFloat(startXPositions[i] - radius, startXPositions[i] + radius);
        randomY[i] = getRandomFloat(startYPositions[i] - radius, startYPositions[i] + radius);
      }

      for(i = 0; i < 6; i++) {
        particle2 = particles2[i] = new THREE.Sprite( material );
        particle2.position.set(startXPositions2[i], startYPositions2[i], 0);
        particle2.scale.x = particle2.scale.y = 15;
        scene2.add( particle2 );
        geometry2.vertices.push( particle2.position );

        randomX2[i] = getRandomFloat(startXPositions2[i] - radius, startXPositions2[i] + radius);
        randomY2[i] = getRandomFloat(startYPositions2[i] - radius, startYPositions2[i] + radius);
      }


      // lines

      var line1 = new THREE.Line( geometry1, new THREE.LineBasicMaterial( { color: 0x979797, opacity: 0.2 })),
          line2 = new THREE.Line( geometry2, new THREE.LineBasicMaterial( { color: 0x979797, opacity: 0.2 }));
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

      camera1.aspect = 2.4;
      camera1.updateProjectionMatrix();

      renderer1.setSize( 300, 150 );

      camera2.aspect = 2.5;
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

      /*camera1.position.x += ( mouseX - camera1.position.x ) * .01;
      camera1.position.y += ( - mouseY + 200 - camera1.position.y ) * .01;
      camera1.lookAt( scene1.position );

      camera2.position.x += ( -mouseX + 200 - camera2.position.x ) * .01;
      camera2.position.y += ( mouseY - camera2.position.y ) * .01;
      camera2.lookAt( scene1.position );*/

      var j, n;

      if (count === 1) {

        for(j = 0; j < particles1.length; j++) {
          prevPositionX[j] = particles1[j].position.x;
          differentX[j] = randomX[j] - prevPositionX[j];
          stepX[j] = differentX[j]/maxCount;

          prevPositionY[j] = particles1[j].position.y;
          differentY[j] = randomY[j] - prevPositionY[j];
          stepY[j] = differentY[j]/maxCount;

          if (j === particles1.length - 1) {
            prevPositionX[particles1.length - 1] = particles1[particles1.length - 1].position.x;
            differentX[particles1.length - 1] = randomX[0] - prevPositionX[particles1.length - 1];
            stepX[particles1.length - 1] = differentX[particles1.length - 1]/maxCount;

            prevPositionY[particles1.length - 1] = particles1[particles1.length - 1].position.y;
            differentY[particles1.length - 1] = randomY[0] - prevPositionY[particles1.length - 1];
            stepY[particles1.length - 1] = differentY[particles1.length - 1]/maxCount;
          }

        }

        for(n = 0; n < particles2.length; n++) {
          prevPositionX[n] = particles2[n].position.x;
          differentX[n] = randomX2[n] - prevPositionX[n];
          stepX2[n] = differentX[n]/maxCount;

          prevPositionY[n] = particles2[n].position.y;
          differentY[n] = randomY2[n] - prevPositionY[n];
          stepY2[n] = differentY[n]/maxCount;

          if (n === particles2.length - 1) {
            prevPositionX[particles2.length - 1] = particles2[particles2.length - 1].position.x;
            differentX[particles2.length - 1] = randomX2[0] - prevPositionX[particles2.length - 1];
            stepX2[particles2.length - 1] = differentX[particles2.length - 1]/maxCount;

            prevPositionY[particles2.length - 1] = particles2[particles2.length - 1].position.y;
            differentY[particles2.length - 1] = randomY2[0] - prevPositionY[particles2.length - 1];
            stepY2[particles2.length - 1] = differentY[particles2.length - 1]/maxCount;
          }

        }

      }


      for(var k = 0; k < particles1.length; k++) {
        particles1[k].position.x += stepX[k];
        particles1[k].position.y += stepY[k];
      }

      for(var m = 0; m < particles2.length; m++) {
        particles2[m].position.x += stepX2[m];
        particles2[m].position.y += stepY2[m];
      }

      renderer1.render( scene1, camera1 );

      renderer2.render( scene2, camera2 );

      count += 1;

      if (Math.round(count) === maxCount) {
        count = 1;

        for(var l = 0; l < particles1.length; l++) {
          randomX[l] = getRandomFloat(startXPositions[l] - radius, startXPositions[l] + radius);
          randomY[l] = getRandomFloat(startYPositions[l] - radius, startYPositions[l] + radius);
        }

        for(var h = 0; h < particles2.length; h++) {
          randomX2[h] = getRandomFloat(startXPositions2[h] - radius, startXPositions2[h] + radius);
          randomY2[h] = getRandomFloat(startYPositions2[h] - radius, startYPositions2[h] + radius);
        }
      }

    }

    function getRandomFloat(min, max) {
      return Math.random() * (max - min) + min;
    }

  });

}());

