/* import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Korones = ({ isMobile }) => {
  const korone = useGLTF('./inugami_korone_hololive/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.50} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
        <primitive
        object={korone.scene}
        scale={isMobile ? 0.7 : 1}
        position={isMobile ? [0, 0, 0] : [0, -2.5, 0]}
        rotation={[0, 20, 0]}
      />
    </mesh>
  )
}

const KoroneCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to screen size here
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set init value of 'isMobile' state var
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    // Add the callback function to a listener for changes to media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Korones isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default KoroneCanvas */