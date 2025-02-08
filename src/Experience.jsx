import { OrbitControls } from '@react-three/drei';
import Lights from './Lights.jsx';

export default function Experience() {
    return (
        <>
            <mesh>
                <torusKnotGeometry />
                <meshNormalMaterial />
            </mesh>
        </>
    );
}
