const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <spotLight
        position={[-10, 10, 5]}
        distance={50}
        intensity={2}
        angle={0.7}
        penumbra={1}
        decay={1}
        focus={1}
        castShadow={true}
      />
      <spotLight
        position={[5, 5, 5]}
        distance={50}
        intensity={1}
        angle={0.7}
        penumbra={1}
        decay={1}
        focus={1}
        castShadow={false}
      />
      <spotLight
        position={[0, 9, -15]}
        distance={50}
        intensity={2}
        angle={0.7}
        penumbra={1}
        decay={1}
        focus={1}
      />
    </>
  );
};

export { Lights };
