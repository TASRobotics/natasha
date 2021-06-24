import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
import TWEEN from '@tweenjs/tween.js';

export const init = () => {
  /**
   * Base
   */
  // Debug
  const gui = new dat.GUI({ closed: true });

  // Canvas
  const canvas = document.querySelector('canvas.webgl');

  // Scene
  const scene = new THREE.Scene();
  const fog = new THREE.Fog('#37C5DF', 15, 20);
  scene.fog = fog;

  /**
   * Models
   */
  const gltfLoader = new GLTFLoader();

  let mixer = null;

  let player = null;

  let leftShoulder = null;
  let rightShoulder = null;
  let leftElbow = null;
  let rightElbow = null;

  let wallOne = null;
  let wallTwo = null;
  let wallThree = null;
  let wallFour = null;
  let wallFive = null;

  /**
   * Textures
   */
  const textureLoader = new THREE.TextureLoader();
  const titleTexture = textureLoader.load(
    'http://localhost:5000/textures/matcaps/1.png'
  );
  const subtitleTexture = textureLoader.load(
    'http://localhost:5000/textures/matcaps/2.png'
  );
  const wallOneTexture = textureLoader.load(
    'http://localhost:5000/textures/matcaps/3.png'
  );
  const wallTwoTexture = textureLoader.load(
    'http://localhost:5000/textures/matcaps/4.png'
  );
  const wallThreeTexture = textureLoader.load(
    'http://localhost:5000/textures/matcaps/5.png'
  );
  const wallFourTexture = textureLoader.load(
    'http://localhost:5000/textures/matcaps/6.png'
  );
  const wallFiveTexture = textureLoader.load(
    'http://localhost:5000/textures/matcaps/7.png'
  );

  gltfLoader.load('http://localhost:5000/models/RiggedFigure.glb', (gltf) => {
    player = gltf.scene;

    leftShoulder = gltf.scene.getObjectByName('arm_joint_L_1');
    rightShoulder = gltf.scene.getObjectByName('arm_joint_R_1');
    leftElbow = gltf.scene.getObjectByName('arm_joint_L_2');
    rightElbow = gltf.scene.getObjectByName('arm_joint_R_2');

    gui
      .add(leftShoulder.rotation, 'x', -Math.PI, Math.PI, 0.01)
      .name('leftShoulderX');
    gui
      .add(leftShoulder.rotation, 'y', -Math.PI, Math.PI, 0.01)
      .name('leftShoulderY');
    gui
      .add(leftShoulder.rotation, 'z', -Math.PI, Math.PI, 0.01)
      .name('leftShoulderZ');
    gui
      .add(rightShoulder.rotation, 'x', -Math.PI, Math.PI, 0.01)
      .name('rightShoulderX');
    gui
      .add(rightShoulder.rotation, 'y', -Math.PI, Math.PI, 0.01)
      .name('rightShoulderY');
    gui
      .add(rightShoulder.rotation, 'z', -Math.PI, Math.PI, 0.01)
      .name('rightShoulderZ');

    gui
      .add(leftElbow.rotation, 'x', -Math.PI, Math.PI, 0.01)
      .name('leftElbowX');
    gui
      .add(leftElbow.rotation, 'y', -Math.PI, Math.PI, 0.01)
      .name('leftElbowY');
    gui
      .add(leftElbow.rotation, 'z', -Math.PI, Math.PI, 0.01)
      .name('leftElbowZ');
    gui
      .add(rightElbow.rotation, 'x', -Math.PI, Math.PI, 0.01)
      .name('rightElbowX');
    gui
      .add(rightElbow.rotation, 'y', -Math.PI, Math.PI, 0.01)
      .name('rightElbowY');
    gui
      .add(rightElbow.rotation, 'z', -Math.PI, Math.PI, 0.01)
      .name('rightElbowZ');

    scene.add(gltf.scene);

    // Animation
    mixer = new THREE.AnimationMixer(gltf.scene);
    const action = mixer.clipAction(gltf.animations[0]);
    action.play();
  });

  gltfLoader.load('http://localhost:5000/models/Walls1.glb', (gltf) => {
    wallOne = new THREE.Mesh(
      gltf.scene.getObjectByName('Cube').geometry,
      new THREE.MeshMatcapMaterial({ matcap: wallOneTexture })
    );
    wallOne.position.z += 20;
    scene.add(wallOne);
  });

  gltfLoader.load('http://localhost:5000/models/Walls2.glb', (gltf) => {
    wallTwo = new THREE.Mesh(
      gltf.scene.getObjectByName('Cube').geometry,
      new THREE.MeshMatcapMaterial({ matcap: wallTwoTexture })
    );
    wallTwo.position.z += 40;
    scene.add(wallTwo);
  });

  gltfLoader.load('http://localhost:5000/models/Walls3.glb', (gltf) => {
    wallThree = new THREE.Mesh(
      gltf.scene.getObjectByName('Cube').geometry,
      new THREE.MeshMatcapMaterial({ matcap: wallThreeTexture })
    );
    wallThree.position.z += 60;
    scene.add(wallThree);
  });

  gltfLoader.load('http://localhost:5000/models/Walls4.glb', (gltf) => {
    wallFour = new THREE.Mesh(
      gltf.scene.getObjectByName('Cube').geometry,
      new THREE.MeshMatcapMaterial({ matcap: wallFourTexture })
    );
    wallFour.position.z += 80;
    scene.add(wallFour);
  });

  gltfLoader.load('http://localhost:5000/models/Walls5.glb', (gltf) => {
    wallFive = new THREE.Mesh(
      gltf.scene.getObjectByName('Cube').geometry,
      new THREE.MeshMatcapMaterial({ matcap: wallFiveTexture })
    );
    wallFive.position.z += 100;
    scene.add(wallFive);
  });

  /**
   * Fonts
   */
  const fontLoader = new THREE.FontLoader();

  let endMesh = null;

  fontLoader.load(
    'http://localhost:5000/fonts/helvetiker_regular.typeface.json',
    (font) => {
      const titleGeometry = new THREE.TextGeometry('Hole in the Wall', {
        font: font,
        size: 0.5,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5
      });
      titleGeometry.computeBoundingBox();
      titleGeometry.translate(
        -(titleGeometry.boundingBox.max.x - 0.02) * 0.5, // Subtract bevel size
        1.6,
        -10
      );

      const endGeometry = new THREE.TextGeometry('Level One Complete', {
        font: font,
        size: 0.5,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5
      });
      endGeometry.computeBoundingBox();
      endGeometry.translate(
        -(endGeometry.boundingBox.max.x - 0.02) * 0.5, // Subtract bevel size
        1.6,
        -2
      );
      endGeometry.rotateY(Math.PI);

      const subtitleGeometry = new THREE.TextGeometry(
        'Press anywhere to start',
        {
          font: font,
          size: 0.1,
          height: 0.2,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.01,
          bevelOffset: 0,
          bevelSegments: 5
        }
      );
      subtitleGeometry.computeBoundingBox();
      subtitleGeometry.translate(
        -(subtitleGeometry.boundingBox.max.x - 0.02) * 0.5, // Subtract bevel size
        1.2,
        -10
      );

      const titleMaterial = new THREE.MeshMatcapMaterial({
        matcap: titleTexture
      });

      const endMaterial = new THREE.MeshMatcapMaterial({
        matcap: titleTexture
      });

      const subtitleMaterial = new THREE.MeshMatcapMaterial({
        matcap: subtitleTexture
      });

      const title = new THREE.Mesh(titleGeometry, titleMaterial);
      scene.add(title);

      const subtitle = new THREE.Mesh(subtitleGeometry, subtitleMaterial);
      scene.add(subtitle);

      endMesh = new THREE.Mesh(endGeometry, endMaterial);
      scene.add(endMesh);
      endMesh.material.transparent = true;
      endMesh.material.opacity = 0;
    }
  );

  /**
   * Floor
   */
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshStandardMaterial({
      color: '#699b2c',
      metalness: 0,
      roughness: 0.5
    })
  );
  floor.receiveShadow = true;
  floor.rotation.x = -Math.PI * 0.5;
  scene.add(floor);

  /**
   * Lights
   */
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.set(1024, 1024);
  directionalLight.shadow.camera.far = 15;
  directionalLight.shadow.camera.left = -7;
  directionalLight.shadow.camera.top = 7;
  directionalLight.shadow.camera.right = 7;
  directionalLight.shadow.camera.bottom = -7;
  directionalLight.position.set(-5, 5, 0);
  scene.add(directionalLight);

  /**
   * Sizes
   */
  const sizes = {
    width: 600,
    height: 500,
    mag: 2
  };

  document.addEventListener('fullscreenchange', () => {
    const fullscreenElement =
      document.fullscreenElement || document.webkitFullscreenElement;

    if (fullscreenElement) {
      console.log(canvas.style);
      canvas.style.border = 'none';

      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } else {
      canvas.style.border = null;

      sizes.width = 600;
      sizes.height = 500;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
  });

  window.addEventListener('keydown', (e) => {
    console.log(e);
    if (e.keyCode !== 70) {
      return;
    }

    const fullscreenElement =
      document.fullscreenElement || document.webkitFullscreenElement;

    if (!fullscreenElement) {
      if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
      } else if (canvas.webkitRequestFullscreen) {
        canvas.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  });

  /**
   * Camera
   */
  // Base camera
  const camera = new THREE.PerspectiveCamera(
    50,
    sizes.width / sizes.height,
    1,
    20
  );
  const lookAt = {
    x: 0,
    y: 1,
    z: 0
  };
  camera.position.set(0, 1.5, -5);
  camera.lookAt(new THREE.Vector3(5, 1, -5));
  const interQuaternion = camera.quaternion.clone();
  camera.lookAt(new THREE.Vector3(0, 0.5, 0));
  const gameQuaternion = camera.quaternion.clone();
  camera.lookAt(new THREE.Vector3(0, 1.5, -10));
  scene.add(camera);

  gui.add(camera.position, 'x', -3, 3, 0.01).name('camera x');
  gui.add(camera.position, 'y', -3, 3, 0.01).name('camera y');
  gui.add(camera.position, 'z', -10, -1, 0.01).name('camera z');
  gui
    .add(lookAt, 'x', -3, 3, 0.01)
    .name('look at x')
    .onChange(() => {
      camera.lookAt(new THREE.Vector3(lookAt.x, lookAt.y, lookAt.z));
    });
  gui
    .add(lookAt, 'y', -3, 3, 0.01)
    .name('look at y')
    .onChange(() => {
      camera.lookAt(new THREE.Vector3(lookAt.x, lookAt.y, lookAt.z));
    });
  gui
    .add(lookAt, 'z', -3, 3, 0.01)
    .name('look at z')
    .onChange(() => {
      camera.lookAt(new THREE.Vector3(lookAt.x, lookAt.y, lookAt.z));
    });

  /**
   * Game State
   */
  const state = {
    play: false,
    end: false,
    goingThrough: false,
    zoomedIn: false,
    zoomedIn: false
  };

  window.addEventListener('click', () => {
    if (state.play) return;

    const startQuaternion = camera.quaternion.clone();
    let time = { t: 0 };
    new TWEEN.Tween(time)
      .to({ t: 1 }, 500)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(() => {
        THREE.Quaternion.slerp(
          startQuaternion,
          interQuaternion,
          camera.quaternion,
          time.t
        );
      })
      .onComplete(() => {
        let secondTime = { t: 0 };
        new TWEEN.Tween(secondTime)
          .to({ t: 1 }, 500)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .onUpdate(() => {
            THREE.Quaternion.slerp(
              interQuaternion,
              gameQuaternion,
              camera.quaternion,
              secondTime.t
            );
          })
          .onComplete(() => {
            state.play = true;
          })
          .start();
      })
      .start();
  });
  // const controls = new OrbitControls(camera, canvas);
  // controls.target.set(0, 0.75, 0);
  // controls.enableDamping = true;

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas
  });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor('#37C5DF');

  /**
   * Animate
   */
  const clock = new THREE.Clock();
  let previousTime = 0;
  let wallIdx = 0;

  const tick = (time) => {
    TWEEN.update(time);

    const walls = [wallOne, wallTwo, wallThree, wallFour, wallFive];
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;

    const speed = 5;

    if (state.play) {
      for (const wall of walls) {
        if (wall) {
          wall.position.z -= deltaTime * speed;
        }
      }

      if (wallIdx < walls.length && walls[wallIdx]) {
        const curWall = walls[wallIdx];
        if (curWall.position.z <= 5) {
          state.goingThrough = true;
          state.zoomedIn = false;
          state.zoomedOut = false;
          switch (curWall) {
            case wallOne:
              gsap.to(leftShoulder.rotation, { duration: 1, x: 1.25 });
              gsap.to(leftShoulder.rotation, { duration: 1, y: 0 });
              gsap.to(leftShoulder.rotation, { duration: 1, z: -1.59 });
              gsap.to(rightShoulder.rotation, { duration: 1, x: -2.06 });
              gsap.to(rightShoulder.rotation, { duration: 1, y: 0.05 });
              gsap.to(rightShoulder.rotation, { duration: 1, z: 1.54 });
              break;
            case wallTwo:
              gsap.to(leftShoulder.rotation, { duration: 1, x: 1.25 });
              gsap.to(leftShoulder.rotation, { duration: 1, y: -0.77 });
              gsap.to(leftShoulder.rotation, { duration: 1, z: -1.65 });
              gsap.to(rightShoulder.rotation, { duration: 1, x: -1.93 });
              gsap.to(rightShoulder.rotation, { duration: 1, y: -0.63 });
              gsap.to(rightShoulder.rotation, { duration: 1, z: 1.41 });
              break;
            case wallThree:
              gsap.to(leftShoulder.rotation, { duration: 1, x: -0.29 });
              gsap.to(leftShoulder.rotation, { duration: 1, y: 0 });
              gsap.to(leftShoulder.rotation, { duration: 1, z: -1.59 });
              gsap.to(rightShoulder.rotation, { duration: 1, x: -2.75 });
              gsap.to(rightShoulder.rotation, { duration: 1, y: 0.05 });
              gsap.to(rightShoulder.rotation, { duration: 1, z: 1.68 });
              gsap.to(leftElbow.rotation, { duration: 1, x: -0.16 });
              gsap.to(leftElbow.rotation, { duration: 1, y: 0.27 });
              gsap.to(leftElbow.rotation, { duration: 1, z: 1.61 });
              gsap.to(rightElbow.rotation, { duration: 1, x: 2.02 });
              gsap.to(rightElbow.rotation, { duration: 1, y: -0.53 });
              gsap.to(rightElbow.rotation, { duration: 1, z: 1.07 });
              break;
            case wallFour:
              gsap.to(leftShoulder.rotation, { duration: 1, x: 2.63 });
              gsap.to(leftShoulder.rotation, { duration: 1, y: 0 });
              gsap.to(leftShoulder.rotation, { duration: 1, z: -1.76 });
              gsap.to(rightShoulder.rotation, { duration: 1, x: 0.18 });
              gsap.to(rightShoulder.rotation, { duration: 1, y: -0.38 });
              gsap.to(rightShoulder.rotation, { duration: 1, z: 1.61 });
              gsap.to(leftElbow.rotation, { duration: 1, x: -0.16 });
              gsap.to(leftElbow.rotation, { duration: 1, y: 0.27 });
              gsap.to(leftElbow.rotation, { duration: 1, z: 1.61 });
              gsap.to(rightElbow.rotation, { duration: 1, x: 2.02 });
              gsap.to(rightElbow.rotation, { duration: 1, y: -0.29 });
              gsap.to(rightElbow.rotation, { duration: 1, z: 1.07 });
              break;
            case wallFive:
              gsap.to(leftShoulder.rotation, { duration: 1, x: 1.25 });
              gsap.to(leftShoulder.rotation, { duration: 1, y: -1.38 });
              gsap.to(leftShoulder.rotation, { duration: 1, z: -1.65 });
              gsap.to(rightShoulder.rotation, { duration: 1, x: -2.34 });
              gsap.to(rightShoulder.rotation, { duration: 1, y: -1.32 });
              gsap.to(rightShoulder.rotation, { duration: 1, z: 1.09 });
              gsap.to(leftElbow.rotation, { duration: 1, x: -0.08 });
              gsap.to(leftElbow.rotation, { duration: 1, y: 0.27 });
              gsap.to(leftElbow.rotation, { duration: 1, z: 0.57 });
              gsap.to(rightElbow.rotation, { duration: 1, x: 2.64 });
              gsap.to(rightElbow.rotation, { duration: 1, y: -0.53 });
              gsap.to(rightElbow.rotation, { duration: 1, z: 2.51 });
              break;
            default:
              break;
          }
          wallIdx += 1;
        }
      }
      if (
        state.goingThrough &&
        wallIdx > 0 &&
        walls[wallIdx - 1].position.z < -1
      ) {
        state.goingThrough = false;

        gsap.to(leftShoulder.rotation, { duration: 1, x: 1.25 });
        gsap.to(leftShoulder.rotation, { duration: 1, y: -1.2 });
        gsap.to(leftShoulder.rotation, { duration: 1, z: -1.65 });
        gsap.to(rightShoulder.rotation, { duration: 1, x: -2.29 });
        gsap.to(rightShoulder.rotation, { duration: 1, y: -1.14 });
        gsap.to(rightShoulder.rotation, { duration: 1, z: 0.97 });
        gsap.to(leftElbow.rotation, { duration: 1, x: -0.08 });
        gsap.to(leftElbow.rotation, { duration: 1, y: 0.27 });
        gsap.to(leftElbow.rotation, { duration: 1, z: 0.57 });
        gsap.to(rightElbow.rotation, { duration: 1, x: 2.64 });
        gsap.to(rightElbow.rotation, { duration: 1, y: -0.53 });
        gsap.to(rightElbow.rotation, { duration: 1, z: 2.51 });
      }

      if (
        wallIdx == walls.length &&
        walls[wallIdx - 1].position.z < -10 &&
        !state.end
      ) {
        state.end = true;

        gsap.to(endMesh.material, { duration: 0.5, opacity: 1 });

        const startQuaternion = camera.quaternion.clone();
        camera.lookAt(new THREE.Vector3(0, 1.5, 0));

        const endQuaternion = camera.quaternion.clone();
        camera.lookAt(new THREE.Vector3(0, 0.5, 0));

        let time = { t: 0 };
        new TWEEN.Tween(time)
          .to({ t: 1 }, 500)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .onUpdate(() => {
            THREE.Quaternion.slerp(
              startQuaternion,
              endQuaternion,
              camera.quaternion,
              time.t
            );
          })
          .start();
      }

      if (
        !state.zoomedIn &&
        wallIdx > 0 &&
        walls[wallIdx - 1].position.z < -1
      ) {
        state.zoomedIn = true;

        const startQuaternion = camera.quaternion.clone();
        camera.position.set(0, 1.2, -5);
        camera.lookAt(new THREE.Vector3(0, 1, 0));
        const endQuaternion = camera.quaternion.clone();
        camera.position.set(0, 1.5, -5);
        camera.lookAt(new THREE.Vector3(0, 0.5, 0));

        let time = { t: 0 };
        new TWEEN.Tween(time)
          .to({ t: 1 }, 500)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .onUpdate(() => {
            THREE.Quaternion.slerp(
              startQuaternion,
              endQuaternion,
              camera.quaternion,
              time.t
            );
            camera.position.y = 1.5 - 0.3 * time.t;
            camera.fov = 50 - 40 * time.t;
            camera.updateProjectionMatrix();
          })
          .start();
      }

      if (
        !state.zoomedOut &&
        wallIdx > 0 &&
        walls[wallIdx - 1].position.z < -6
      ) {
        state.zoomedOut = true;
        const startQuaternion = camera.quaternion.clone();
        camera.position.set(0, 1.5, -5);
        camera.lookAt(new THREE.Vector3(0, 0.5, 0));
        const endQuaternion = camera.quaternion.clone();
        camera.position.set(0, 1.2, -5);
        camera.lookAt(new THREE.Vector3(0, 1, 0));

        let time = { t: 0 };
        new TWEEN.Tween(time)
          .to({ t: 1 }, 500)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .onUpdate(() => {
            THREE.Quaternion.slerp(
              startQuaternion,
              endQuaternion,
              camera.quaternion,
              time.t
            );
            camera.position.y = 1.2 + 0.3 * time.t;
            camera.fov = 10 + 40 * time.t;
            camera.updateProjectionMatrix();
          })
          .start();
      }

      // Model animation
      if (mixer) {
        mixer.update(deltaTime);
      }
    }

    if (state.end) {
      player.position.z += deltaTime * 1;
    }

    // Update controls
    // controls.update();

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();
};
