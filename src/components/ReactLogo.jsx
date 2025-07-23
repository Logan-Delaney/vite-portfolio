import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/react_logo.glb')
  const meshRef = useRef()
  
  // Animate diagonal rotation
  useFrame((state) => {
    if (meshRef.current) {
      // Rotate on diagonal axis (1, 1, 1) - you can adjust these values
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.5
    }
  })
  
  return (
    <group scale={0.01} {...props}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes['React-Logo_Material002_0'].geometry}
        material={materials['Material.002']}
        position={[0, 7.935, 18.102]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[39.166, 39.166, 52.734]}
      />
    </group>
  )
}

useGLTF.preload('models/react_logo.glb')
export default ReactLogo