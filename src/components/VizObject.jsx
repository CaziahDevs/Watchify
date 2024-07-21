import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Sphere = ({ radius, widthSegments, heightSegments }) => {
  return (
    <mesh>
      <sphereGeometry args={[radius, widthSegments, heightSegments]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

const VizObject = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} intensity={0.5} />
      <Sphere radius={3} widthSegments={64} heightSegments={64} />
      <OrbitControls />
    </Canvas>
  )
}

export default VizObject