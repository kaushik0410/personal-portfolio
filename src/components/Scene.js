/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 scene.gltf 
Author: DeadLink (https://sketchfab.com/hell3879)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/my-computer-9d1da5ba105145f7910ff50774c1152f
Title: My computer
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.mat0} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.mat1} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.mat10} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.mat11} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.mat2} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.mat3} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.mat4} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.mat5} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.mat6} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.mat7} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.mat8} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.mat9} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
