import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <Canvas>
      <mesh>
        <sphereGeometry args={[1, 4, 4]} />
        <meshBasicMaterial color="blue" />
      </mesh>
    </Canvas>
  );
};

export { App };
