import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import HeroOrb from "./HeroOrb";
import { Suspense } from "react";

export default function Scene() {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative z-20">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#009351" />
        
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <HeroOrb />
          </Float>
        </Suspense>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 2 - 0.2}
        />
      </Canvas>
    </div>
  );
}
