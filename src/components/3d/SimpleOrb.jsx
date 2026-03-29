import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Orb() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh 
      ref={meshRef}
      onPointerOver={() => (meshRef.current.scale.set(1.1,1.1,1.1))}
      onPointerOut={() => (meshRef.current.scale.set(1,1,1))}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#16a34a" emissive="#16a34a" emissiveIntensity={0.4} />
    </mesh>
  );
}

export default function SimpleOrb() {
  return (
    <Canvas style={{ height: "300px" }}>
      <ambientLight />
      <directionalLight position={[2, 2, 2]} />
      <Orb />
    </Canvas>
  );
}
