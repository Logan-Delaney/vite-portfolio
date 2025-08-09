import { useGLTF, useVideoTexture } from '@react-three/drei'
import { useMemo, useEffect } from 'react'
import * as THREE from 'three'

const Monitor = (props) => {
  const { nodes, materials } = useGLTF('/models/monitor.glb')
  const txt = useVideoTexture(props.project, {
    loop: true,
    autoplay: true,
    muted: true,
    start: true,
    crossOrigin: 'anonymous',
  })

  const videoTexture = new THREE.MeshBasicMaterial({
    map: txt,
    side: THREE.DoubleSide,
    toneMapped: false,
  })
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.065}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-0.106, 358.788, -251.948]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plano001_Base_0.geometry}
              material={materials.Base}
            />
            <mesh
              geometry={nodes.Plano001_Screen_0.geometry}
              material={videoTexture}
              visible={true}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plano001_Backboard_0.geometry}
              material={materials.Backboard}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plano_Base_0.geometry}
            material={materials.Base}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bolt_Bolt_0.geometry}
            material={materials.Bolt}
            position={[138.582, 413.877, -176.412]}
            scale={5.554}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bolt001_Bolt_0.geometry}
            material={materials.Bolt}
            position={[138.582, 330.051, -176.412]}
            scale={5.554}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bolt002_Bolt_0.geometry}
            material={materials.Bolt}
            position={[-137.909, 413.877, -176.412]}
            scale={5.554}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bolt003_Bolt_0.geometry}
            material={materials.Bolt}
            position={[-137.909, 330.051, -176.412]}
            scale={5.554}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/monitor.glb')

export default Monitor
