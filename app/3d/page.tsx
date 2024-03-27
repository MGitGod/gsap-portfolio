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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Canvas camera={{ position: [2, 1, 2], near: 0.05 }}>
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
