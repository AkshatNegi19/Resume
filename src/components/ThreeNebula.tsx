import { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeNebula = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Geometry
    const geometry = new THREE.SphereGeometry(2, 64, 64);

    // Nebula shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColorA: { value: new THREE.Color("#8B5CF6") }, // Premium violet
        uColorB: { value: new THREE.Color("#0EA5E9") }, // Cyan
        uColorC: { value: new THREE.Color("#F472B6") }, // Pink glow
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform vec3 uColorC;

        // Premium smoother nebula blending
        void main() {
          float wave = sin(vUv.x * 6.0 + uTime * 0.4) * 0.5 + 0.5;
          float glow = sin(vUv.y * 6.0 + uTime * 0.7) * 0.5 + 0.5;

          vec3 color = mix(uColorA, uColorB, wave);
          color = mix(color, uColorC, glow * 0.35);

          gl_FragColor = vec4(color, 0.35); // Softer, cleaner
        }
      `,
      transparent: true,
      depthWrite: false,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Animation
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      material.uniforms.uTime.value = elapsed;
      sphere.rotation.y += 0.001;
      sphere.rotation.x += 0.0005;

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
};

export default ThreeNebula;
