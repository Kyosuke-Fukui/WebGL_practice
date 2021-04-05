window.addEventListener("DOMContentLoaded", init);

function init() {
  const width = 960;
  const height = 540;

  //シーンはオブジェクトや光源などの置き場のこと
  var scene = new THREE.Scene();
  // Three.jsではカメラを作成し、その視点から見えるものがレンダラーを介してcanvasへ描画される
  var camera = new THREE.PerspectiveCamera(
    45, //画角
    width / height, //アスペクト比
    1, //描画開始距離
    10000 //描画終了距離
  );

  // WebGLのレンダリングをするためのレンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas"),
  });
  // renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setSize(width, height);
  // スマホでも綺麗に見えるように、デバイスピクセル比も設定
  renderer.setPixelRatio(window.devicePixelRatio);
  // document.body.appendChild(renderer.domElement);

  //形状の設定（頂点情報や面情報）
  var geometry = new THREE.BoxGeometry(200, 200, 200);
  //素材の設定（色や質感の情報）
  var material = new THREE.MeshBasicMaterial({ color: "green" });
  //立方体の作成（メッシュという表示オブジェクトを使用する）
  var cube = new THREE.Mesh(geometry, material);
  //シーンに追加
  scene.add(cube);

  //   //ライトを作る
  //   // new THREE.DirectionalLight(色、光の強さ)
  //   const light = new THREE.DirectionalLight(0xffffff, 1.0);
  //   // シーンに追加
  //   scene.add(light);
  //   // ライトの位置を変更
  //   light.position.set(1, 1, 1);

  // 描画
  //camera.position.z = 5;
  camera.position.set(0, 0, +1000);

  var animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  animate();
}
