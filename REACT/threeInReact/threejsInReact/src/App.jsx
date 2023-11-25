import React from 'react'
import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react'
import Three from './components/three'

const App = () => {
  return (
    <Canvas id = "three-canvas-container">
      <Suspense fallback={null}>
        <Three />
      </Suspense>
    </Canvas>
  )
}

export default App