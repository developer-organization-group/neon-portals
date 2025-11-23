import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

function FloatingShape({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001 * speed;
      meshRef.current.rotation.y += 0.002 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002 * speed;
      meshRef.current.rotation.z += 0.001 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00C3FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#2aa149" />
        <spotLight position={[0, 5, 0]} intensity={1} angle={0.3} penumbra={1} color="#00C3FF" />
        
        {/* Cyan shapes */}
        <FloatingShape position={[-3, 2, 0]} color="#00C3FF" speed={0.8} />
        <FloatingTorus position={[3, -1, -2]} color="#00C3FF" speed={1.2} />
        <FloatingShape position={[4, 2, -3]} color="#00C3FF" speed={0.6} />
        
        {/* Green shapes */}
        <FloatingShape position={[2, 1, -1]} color="#2aa149" speed={1} />
        <FloatingTorus position={[-4, -2, -1]} color="#2aa149" speed={0.9} />
        <FloatingShape position={[-2, -3, -2]} color="#2aa149" speed={1.1} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
