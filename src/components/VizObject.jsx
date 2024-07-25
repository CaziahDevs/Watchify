import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from 'styled-components';

const Sphere = ({ radius, widthSegments, heightSegments }) => {
  return (
    <mesh>
      <sphereGeometry args={[radius, widthSegments, heightSegments]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

const VizContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  background-color: #f0f0f0; 
`;


const VizObject = () => {
  return (
    <VizContainer>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }} >
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
        <Sphere radius={3} widthSegments={64} heightSegments={64} />
        <OrbitControls />
      </Canvas>
    </VizContainer>
  )
}


export default VizObject