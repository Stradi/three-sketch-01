import { folder, useControls } from "leva";

interface BlobSphereProps {
  envMap?: any;
  ref?: React.MutableRefObject<undefined>;
}

const BlobSphere = ({ envMap, ref }: BlobSphereProps) => {
  const {
    radius,
    resolutionX,
    resolutionY,
    pX,
    pY,
    pZ,
    rX,
    rY,
    rZ,
    color,
    opacity,
    transparent,
    roughness,
    metalness,
    reflectivity,
    clearcoat,
    clearcoatRoughness,
    ior,
    sheen,
    sheenColor,
    sheenRoughness,
    thickness,
    transmission,
  } = useControls("Blob", {
    Object: folder(
      {
        radius: {
          value: 1,
          min: 0.5,
          max: 5,
          step: 0.1,
        },
        resolutionX: {
          value: 16,
          min: 4,
          max: 64,
          step: 1,
        },
        resolutionY: {
          value: 16,
          min: 4,
          max: 64,
          step: 1,
        },
      },
      { collapsed: true }
    ),
    Position: folder(
      {
        pX: {
          value: 0,
          min: -10,
          max: 10,
          step: 0.1,
        },
        pY: {
          value: 3,
          min: -10,
          max: 10,
          step: 0.1,
        },
        pZ: {
          value: 0,
          min: -10,
          max: 10,
          step: 0.1,
        },
      },
      { collapsed: true }
    ),
    Rotation: folder(
      {
        rX: {
          value: 0,
          min: -10,
          max: 10,
          step: 0.1,
        },
        rY: {
          value: 3,
          min: -10,
          max: 10,
          step: 0.1,
        },
        rZ: {
          value: 0,
          min: -10,
          max: 10,
          step: 0.1,
        },
      },
      { collapsed: true }
    ),
    Material: folder(
      {
        color: "#000000",
        opacity: {
          value: 0,
          min: 0,
          max: 1,
          step: 0.01,
        },
        transparent: {
          value: false,
        },
        roughness: {
          value: 0.25,
          min: 0,
          max: 1,
          step: 0.01,
        },
        metalness: {
          value: 0.5,
          min: 0,
          max: 1,
          step: 0.01,
        },
        reflectivity: {
          value: 0.5,
          min: 0,
          max: 1,
          step: 0.01,
        },
        clearcoat: {
          value: 1,
          min: 0,
          max: 1,
          step: 0.01,
        },
        clearcoatRoughness: {
          value: 1,
          min: 0,
          max: 1,
          step: 0.01,
        },
        ior: {
          value: 1.5,
          min: 1,
          max: 2.333,
          step: 0.01,
        },
        sheen: {
          value: 0,
          min: 0,
          max: 1,
          step: 0.01,
        },
        sheenRoughness: {
          value: 0,
          min: 0,
          max: 1,
          step: 0.01,
        },
        sheenColor: "#ffffff",
        thickness: {
          value: 0,
          min: 0,
          max: 10,
          step: 0.01,
        },
        transmission: {
          value: 0,
          min: 0,
          max: 1,
          step: 0.01,
        },
      },
      { collapsed: true }
    ),
  });

  return (
    <mesh
      position={[pX, pY, pZ]}
      rotation={[rX, rY, rZ]}
      ref={ref}
      castShadow={true}
    >
      <sphereGeometry args={[radius, resolutionX, resolutionY]} />
      <meshPhysicalMaterial
        args={[
          {
            color,
            opacity,
            transparent,
            roughness,
            metalness,
            reflectivity,
            clearcoat,
            clearcoatRoughness,
            ior,
            sheen,
            sheenColor,
            thickness,
            transmission,
          },
        ]}
        envMap={envMap}
      />
    </mesh>
  );
};

export { BlobSphere };
