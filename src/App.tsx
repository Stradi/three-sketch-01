import { Backdrop, CubeCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { BlobSphere } from "./BlobSphere";
import { Lights } from "./Lights";
import { Scene } from "./Scene";

const App = () => {
  const blobSphereRef = useRef();

  return (
    <Canvas shadows={true}>
      <Scene />
      <Lights />

      <Backdrop
        receiveShadow={true}
        scale={[30, 10, 10]}
        position={[0, 0, -10]}
        floor={5}
      >
        <meshPhysicalMaterial color={[0.1, 0.1, 0.5]} />
      </Backdrop>

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <BlobSphere
            ref={blobSphereRef}
            position={[0, 3, 0]}
            envMap={texture}
          />
        )}
      </CubeCamera>
    </Canvas>
  );
};

export { App };
