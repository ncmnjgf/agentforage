import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function HeroOrb() {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    // Rotation
    const rotationSpeed = hovered ? 0.008 : 0.003;
    meshRef.current.rotation.y += rotationSpeed;

    // Floating effect
    meshRef.current.position.y = Math.sin(t * 1.5) * 0.15;

    // Smooth scale on hover
    const targetScale = hovered ? 1.05 : 1;
    meshRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.1);
  });

  return (
    <mesh 
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial
        color="#009351"
        emissive="#00b061"
        emissiveIntensity={hovered ? 0.8 : 0.4}
        roughness={0.15}
        metalness={0.4}
        transparent={true}
        opacity={0.9}
      />
    </mesh>
  );
}
