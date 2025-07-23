import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const PythonLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/python.glb')
    const meshRef = useRef()

    useFrame((state) => {
    if (meshRef.current) {
      // Rotate on diagonal axis (1, 1, 1) - you can adjust these values
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    //   meshRef.current.rotation.z = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
        ref={meshRef}
          castShadow
          receiveShadow
          geometry={nodes.Python_Python_0.geometry}
          material={materials.Python}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/python.glb');
export default PythonLogo;