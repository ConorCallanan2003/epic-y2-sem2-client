"use client";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function DeviceAnimation({
  scrollDistance,
}: {
  scrollDistance: number;
}) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    let newWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
    setWidth(newWidth);
  });

  const { scene } = useGLTF("device.glb");
  return (
    <div className="absolute w-full h-full ">
      <Canvas camera={{ position: [0, 0, -200], fov: 9 * (1065 / width) }}>
        <ambientLight intensity={5} />
        <mesh rotation={[-0.7 + 2.4 * (scrollDistance / 800), 0, 0]}>
          <primitive
            position={[
              -17.5 + 17.5 * (scrollDistance / 750),
              0,
              -13 + 20 * (scrollDistance / 750),
            ]}
            scale={0.35 - 0.35 * (scrollDistance / 800)}
            object={scene}
          />
        </mesh>

        <Environment preset="forest" />
        <OrbitControls
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
}
