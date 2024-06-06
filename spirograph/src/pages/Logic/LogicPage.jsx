// import React, { Suspense, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { useThree } from "@react-three/fiber";
// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Header } from "../../components/Header/Header";
// import './LogicPage.css';

// gsap.registerPlugin(ScrollTrigger);

// const Model = () => {
//  // const gltf = useGLTF("/assets/videos/humanSample.glb");
//   const ref = useRef();
//   const { camera } = useThree();

//   useEffect(() => {
//     const updateCamera = (scrollProgress, phase) => {
//       if (phase === 1) {
//         camera.position.set(0, 20, 0);
//       } else if (phase === 2) {
//         camera.position.set(0, 0, 20);
//       } else if (phase === 3) {
//         camera.position.set(2, 0, 5);
//       }

//       camera.lookAt(ref.current.position);

//       document.getElementById("angle").textContent = `Angle: ${Math.round(camera.rotation.y * (180 / Math.PI))}°`;
//       document.getElementById("distance").textContent = `Distance: ${(camera.position.z).toFixed(2)}`;
//     };

//     ScrollTrigger.create({
//       trigger: ".model-container",
//       start: "top top",
//       end: "bottom bottom",
//       scrub: true,
//       markers: true,
//       pin: ".model-container",
//       pinSpacing: false,
//       onUpdate: (self) => {
//         const progress = self.progress;
//         if (progress <= 0.3) {
//           updateCamera(progress, 1);
//         } else if (progress > 0.3 && progress <= 0.6) {
//           updateCamera(progress, 2);
//         } else if (progress > 0.6 && progress <= 0.9) {
//           updateCamera(progress, 3);
//         }
//       }
//     });

//     ScrollTrigger.create({
//       trigger: ".model-container",
//       start: "25%",
//       onEnter: () => {
//         document.getElementById("special-text").style.display = "block";
//       }
//     });

//     ScrollTrigger.create({
//       trigger: ".model-container",
//       start: "30%",
//       onLeaveBack: () => {
//         document.getElementById("special-text").style.display = "none";
//       }
//     });
//   }, [camera]);

//   return <primitive ref={ref} object={gltf.scene} scale={2} position={[0, 0, 0]} />;
// };

// export default function LogicPage() {
//   const navigate = useNavigate();
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const updateScrollProgress = () => {
//       const scrollTop = window.scrollY;
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrollPercent = (scrollTop / docHeight) * 100;
//       setScrollProgress(scrollPercent);
//     };

//     window.addEventListener("scroll", updateScrollProgress);
//     return () => {
//       window.removeEventListener("scroll", updateScrollProgress);
//     };
//   }, []);

//   return (
//     <div className="bg-white font-pretendard">
//       <Header />
//       <div className="model-container" style={{ height: "200vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
//         <Canvas camera={{ position: [0, 20, 0], fov: 50 }}>
//           <Suspense fallback={null}>
//             <ambientLight intensity={0.5} />
//             <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//             <pointLight position={[-10, -10, -10]} />
//             <Model />
//             <OrbitControls enablePan={false} enableRotate={false} enableZoom={false} />
//           </Suspense>
//         </Canvas>
//       </div>
//       <div id="special-text" style={{ display: "none", color: "black", textAlign: "center", marginTop: "20px" }}>
//         특별한 문구
//       </div>
//       <div style={{ position: "fixed", top: "10%", right: "10px", color: "black" }}>
//         {Math.round(scrollProgress)}%
//       </div>
//       <div id="angle" style={{ position: "fixed", top: "20%", right: "10px", color: "black" }}>
//         Angle: 0°
//       </div>
//       <div id="distance" style={{ position: "fixed", top: "30%", right: "10px", color: "black" }}>
//         Distance: 20
//       </div>
//     </div>
//   );
// }
