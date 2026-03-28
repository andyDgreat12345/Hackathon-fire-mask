const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealItems = document.querySelectorAll('.reveal');
if (!prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((el) => {
    const delay = el.getAttribute('data-delay');
    if (delay) {
      el.style.transitionDelay = `${delay}s`;
    }
    observer.observe(el);
  });
} else {
  revealItems.forEach((el) => el.classList.add('is-visible'));
}

const counters = document.querySelectorAll('[data-count]');
const animateCount = (el) => {
  const target = parseFloat(el.getAttribute('data-count'));
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1200;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const value = target * (0.2 + 0.8 * progress);
    const display = Number.isInteger(target) ? Math.round(value) : value.toFixed(1);
    el.textContent = `${display}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

if (!prefersReducedMotion) {
  counters.forEach((el) => animateCount(el));
} else {
  counters.forEach((el) => {
    const target = el.getAttribute('data-count');
    const suffix = el.getAttribute('data-suffix') || '';
    el.textContent = `${target}${suffix}`;
  });
}

const yearEl = document.querySelector('[data-year]');
if (yearEl) {
  yearEl.textContent = `© ${new Date().getFullYear()}`;
}

const modelViewer = document.querySelector('model-viewer');
const stlWrap = document.querySelector('[data-stl-viewer]');
const stlCanvas = stlWrap ? stlWrap.querySelector('canvas') : null;
const glbUrl = 'assets/esp32/esp32.glb';
const stlUrl = 'assets/esp32/files/ESP32_WeMos.stl';

const hasGlb = async () => {
  try {
    const resp = await fetch(glbUrl, { method: 'HEAD' });
    return resp.ok;
  } catch (err) {
    return false;
  }
};

const initStlViewer = async () => {
  if (!stlWrap || !stlCanvas) return;
  const THREE = await import('https://unpkg.com/three@0.160.0/build/three.module.js');
  const { STLLoader } = await import('https://unpkg.com/three@0.160.0/examples/jsm/loaders/STLLoader.js');

  const renderer = new THREE.WebGLRenderer({ canvas: stlCanvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 1000);
  camera.position.set(3.5, 2.5, 3.5);
  camera.lookAt(0, 0, 0);

  const hemi = new THREE.HemisphereLight(0xffffff, 0x1b2a40, 1.2);
  scene.add(hemi);

  const dir = new THREE.DirectionalLight(0xffffff, 0.8);
  dir.position.set(4, 6, 6);
  scene.add(dir);

  const grid = new THREE.GridHelper(8, 8, 0x1b2a40, 0x0c1422);
  grid.material.opacity = 0.3;
  grid.material.transparent = true;
  scene.add(grid);

  const loader = new STLLoader();
  loader.load(stlUrl, (geometry) => {
    geometry.computeVertexNormals();
    geometry.center();

    const material = new THREE.MeshStandardMaterial({
      color: 0xff7a1a,
      metalness: 0.2,
      roughness: 0.6,
    });
    const mesh = new THREE.Mesh(geometry, material);

    const box = new THREE.Box3().setFromObject(mesh);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = maxDim === 0 ? 1 : 3 / maxDim;
    mesh.scale.setScalar(scale);
    scene.add(mesh);

    const resize = () => {
      const width = stlCanvas.clientWidth;
      const height = stlCanvas.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(stlWrap);

    const animate = () => {
      mesh.rotation.y += 0.003;
      mesh.rotation.x += 0.001;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  });
};

const showStlFallback = async () => {
  if (modelViewer) modelViewer.classList.add('hidden');
  if (stlWrap) stlWrap.classList.remove('hidden');
  await initStlViewer();
};

const setupModelPreview = async () => {
  if (modelViewer) {
    modelViewer.addEventListener(
      'error',
      () => {
        showStlFallback();
      },
      { once: true }
    );
  }

  const isFileProtocol = window.location.protocol === 'file:';
  if (!isFileProtocol) {
    const available = await hasGlb();
    if (!available) {
      await showStlFallback();
      return;
    }
  }

  if (modelViewer) modelViewer.classList.remove('hidden');
  if (stlWrap) stlWrap.classList.add('hidden');
};

setupModelPreview();
