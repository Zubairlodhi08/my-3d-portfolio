import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";

const SIGNAL = "#e8a33d";
const PRIMARY = "#5b5fef";
const JOINT = "#4c5a78";

/** A floating framed photo that tilts gently toward the pointer. */
function PhotoCard() {
  const texture = useTexture("/profile-photo.png");
  texture.colorSpace = THREE.SRGBColorSpace;

  const turn = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (turn.current) {
      const targetY = state.pointer.x * 0.3;
      const targetX = -state.pointer.y * 0.15;
      turn.current.rotation.y += (targetY - turn.current.rotation.y) * 0.05;
      turn.current.rotation.x += (targetX - turn.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={turn}>
      {/* glowing frame behind the photo */}
      <mesh position={[0, 0, -0.05]}>
        <planeGeometry args={[2.05, 2.05]} />
        <meshStandardMaterial color={PRIMARY} emissive={PRIMARY} emissiveIntensity={0.45} />
      </mesh>

      {/* the photo itself, shown as-is (unlit so its true colors always show) */}
      <mesh>
        <planeGeometry args={[1.9, 1.9]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </group>
  );
}

/** A small tumbling piece of debris drifting near the photo. */
function Debris({ position, speed }: { position: [number, number, number]; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed;
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.12, 0.12, 0.12]} />
      <meshStandardMaterial color={JOINT} roughness={0.6} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 3, 5]} intensity={30} color={SIGNAL} />
      <pointLight position={[-4, -2, -3]} intensity={10} color={PRIMARY} />
      <Stars radius={30} depth={20} count={900} factor={2} saturation={0} fade speed={0.4} />

      <Float speed={1.1} rotationIntensity={0.1} floatIntensity={0.7}>
        <PhotoCard />
      </Float>

      <Float speed={1.8} floatIntensity={1.4}>
        <Debris position={[1.7, 0.6, -0.6]} speed={0.5} />
      </Float>
      <Float speed={1.4} floatIntensity={1.2}>
        <Debris position={[-1.6, -0.4, -0.4]} speed={0.35} />
      </Float>
    </>
  );
}