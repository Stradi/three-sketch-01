import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  PerspectiveCamera,
  Stats,
} from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <color args={[0, 0, 0]} attach="background" />
      <Stats />
      <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
        <GizmoViewport axisColors={["red", "green", "blue"]} />
      </GizmoHelper>

      <PerspectiveCamera makeDefault position={[0, 5, 10]} {...{}} />
      <OrbitControls target={[0, 3, 0]} />
    </>
  );
};

export { Scene };
