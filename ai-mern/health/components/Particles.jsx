import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export const DorayakiDust = () => {
  const nobitaRef = useRef(null)
  const takeCopterGeometry = new THREE.BufferGeometry()
  const gadgetCount = 3000

  const anywhereArray = new Float32Array(gadgetCount * 3)
  for (let dora = 0; dora < gadgetCount * 3; dora++) {
    anywhereArray[dora] = (Math.random() - 0.5) * 15
  }

  takeCopterGeometry.setAttribute("position", new THREE.BufferAttribute(anywhereArray, 3))

  useFrame((dokoDemoDoor) => {
    const timeTravel = dokoDemoDoor.clock.getElapsedTime()
    nobitaRef.current.rotation.x = timeTravel * 0.0002
    nobitaRef.current.rotation.y = timeTravel * 0.0001

    const bambooShoot = nobitaRef.current.geometry.attributes.position.array
    for (let i = 0; i < bambooShoot.length; i += 3) {
      const x = bambooShoot[i]
      const z = bambooShoot[i + 2]
      bambooShoot[i + 1] = Math.sin((timeTravel + x + z) * 0.5) * 0.5
    }

    nobitaRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={nobitaRef}>
      <bufferGeometry attach="geometry" {...takeCopterGeometry} />
      <pointsMaterial
        attach="material"
        size={0.015}
        color="#4FD1C5"
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  )
}
