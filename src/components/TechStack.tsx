import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Physics, useSphere } from "@react-three/cannon";
import { Text, Environment } from "@react-three/drei";
import { techStack } from "../data/techStack";
import { useReveal } from "../hooks/useReveal";
import "./styles/TechStack.css";

// Soft pastel colors ki list
const COLORS = [
  "#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", 
  "#a0c4ff", "#bdb2ff", "#ffc6ff", "#f8edeb", "#e2ece9",
];

// Invisible Mouse Pointer
function Pointer() {
  const { viewport } = useThree();
  const [ref, api] = useSphere(() => ({ 
    type: "Kinematic", 
    args: [2], 
    position: [0, 0, 0] 
  }));

  useFrame(({ mouse }) => {
    api.position.set(
      (mouse.x * viewport.width) / 2,
      (mouse.y * viewport.height) / 2,
      0
    );
  });

  return <mesh ref={ref as any} />;
}

// 3D Ball Component (Jisme text bahar jane ka masla fix kiya hai)
function TechBall({ text, position, color }: { text: string; position: number[]; color: string }) {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    args: [1.2],
    position: position as any,
    linearDamping: 0.65, 
    angularDamping: 0.65,
    restitution: 0.9, 
    friction: 0.2,
  }));
  
  const pos = useRef([0, 0, 0]);
  
  useEffect(() => {
    const unsubscribe = api.position.subscribe((v) => (pos.current = v));
    return unsubscribe;
  }, [api]);

  useFrame(() => {
    api.applyForce(
      [
        -pos.current[0] * 2, 
        -pos.current[1] * 2, 
        -pos.current[2] * 5, 
      ],
      [0, 0, 0]
    );
  });

  return (
    <mesh ref={ref as any} castShadow receiveShadow>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.1} metalness={0.1} />
      
      {/* Front Text */}
      <Text
        position={[0, 0, 1.21]}
        fontSize={0.28}
        color="#000000"
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
        maxWidth={2.0} /* Text ko ball ke andar rakhne ke liye limit */
        textAlign="center"
      >
        {text}
      </Text>
      
      {/* Back Text */}
      <Text
        position={[0, 0, -1.21]}
        rotation={[0, Math.PI, 0]}
        fontSize={0.28}
        color="#000000"
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
        maxWidth={2.0}
        textAlign="center"
      >
        {text}
      </Text>
    </mesh>
  );
}

// Main Component
export default function TechStack() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="stack" className="section tech-stack alt-bg">
      <div className={`container reveal ${visible ? "is-visible" : ""}`} ref={ref}>
        <div className="section-head" style={{ position: "relative", zIndex: 10 }}>
          <h2>Tools I reach for</h2>
          <span className="section-index">04</span>
        </div>
      </div>

      <div className="tech-stack-canvas">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 35 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 10]} intensity={2} castShadow />
          <Environment preset="city" />
          
          <Physics gravity={[0, 0, 0]} iterations={7}>
            <Pointer />
            {techStack.map((tech, i) => (
              <TechBall 
                key={tech} 
                text={tech} 
                color={COLORS[i % COLORS.length]} 
                position={[
                  Math.random() * 8 - 4, 
                  Math.random() * 8 - 4, 
                  Math.random() * 4 - 2
                ]} 
              />
            ))}
          </Physics>
        </Canvas>
      </div>
    </section>
  );
}