import React, { Suspense } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const NodeLogo = (props) => {
  const texture = useTexture('assets/node-js-logo.png'); // Ensure this file is in your public folder

  return (
    <Suspense fallback={null}>
      <mesh {...props}>
        <boxGeometry args={[3, 3, 0.2]} />
        <meshStandardMaterial
          map={texture}
          transparent
          side={2} // DoubleSide
        />
      </mesh>
    </Suspense>
  );
};

export default NodeLogo;