import React from 'react'
import { Canvas } from "@react-three/fiber";


const VizObject = () => {
  return (
    <Canvas>
      <mesh>
        <sphereGeometry args={[]}/>
        <meshStandardMaterial />
      </mesh>
      <ambientLight args={[0xff0000]} intensity={0.1} />
      <directionalLight position={[0, 0, 5]} intensity={0.5} />
    </Canvas>
  )
}

export default VizObject