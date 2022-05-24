interface BlobSphereProps {
  position?: number[];
  radius?: number;
  envMap?: any;
  ref?: React.MutableRefObject<undefined>;
}

const BlobSphere = ({ position, radius, envMap, ref }: BlobSphereProps) => {
  return (
    <mesh position={position || [0, 0, 0]} ref={ref} castShadow={true}>
      <sphereGeometry args={[radius || 1, 32, 32]} />
      <meshPhysicalMaterial
        args={[
          {
            metalness: 0.9,
            roughness: 0.1,
          },
        ]}
        envMap={envMap}
      />
    </mesh>
  );
};

export { BlobSphere };
