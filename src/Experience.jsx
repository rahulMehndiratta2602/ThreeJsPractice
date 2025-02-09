import { useThree, extend } from '@react-three/fiber';
import {
    Float,
    Html,
    MeshReflectorMaterial,
    OrbitControls,
    PivotControls,
    Text,
    TransformControls,
} from '@react-three/drei';
import { useRef } from 'react';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// extend({ OrbitControls });

export default function Experience() {
    const { camera, gl } = useThree();
    const cubeRef = useRef(null);
    const sphereRef = useRef(null);
    return (
        <>
            {/* <orbitControls args={[camera, gl.domElement]} /> */}
            <OrbitControls makeDefault={true} />

            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />

            <PivotControls anchor={[0, 0, 0]} depthTest={false}>
                <mesh position-x={-2} ref={sphereRef}>
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" />
                    <Html
                        wrapperClass="label"
                        distanceFactor={6}
                        position={[1, 1, 0]}
                        center
                        occlude={[cubeRef, sphereRef]}
                    >
                        That's a sphere 👍
                    </Html>
                </mesh>
            </PivotControls>

            <mesh ref={cubeRef} position-x={2} scale={1.5}>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
            <Float>
                <Text
                    font="./bebas-neue-v9-latin-regular.woff"
                    fontSize={1}
                    color="salmon"
                    position={[0, 2, 0]}
                >
                    I Love Myself\
                </Text>
            </Float>
            <TransformControls object={cubeRef} />
            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry />
                {/* <meshStandardMaterial color="greenyellow" />0 */}
                <MeshReflectorMaterial resolution={1024} color="pink" mirror={0.75} mixBlur={1} />
            </mesh>
        </>
    );
}
