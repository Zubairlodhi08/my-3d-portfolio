import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
