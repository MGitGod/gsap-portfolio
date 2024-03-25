"use client";

import type { NextPage } from "next";
import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("assets/Biomech_Mutant_Skin_1.gltf");
  return <primitive object={scene} />;
}

export default function Threed() {
  return (
    <main>
      <Canvas
        camera={{ position: [2, 1, 2], near: 0.05 }}
        style={{ marginTop: 100, height: 600 }}
      >
        <group>
          <Model />
        </group>
        <OrbitControls autoRotate />
        <Stats />
        <directionalLight position={[5, 5, 5]} castShadow />
      </Canvas>
    </main>
  );
}
