'use client'

import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three'
import type { SimChallengeId } from '@/types/sim'

interface UseGuidedCameraParams {
  challengeId: SimChallengeId
  focusPosition?: [number, number, number] | null
  freezeUntil: number
  reducedMotion: boolean
}

export function useGuidedCamera({
  challengeId,
  focusPosition,
  freezeUntil,
  reducedMotion,
}: UseGuidedCameraParams): void {
  const { camera } = useThree()
  const orbit = useRef(0)

  const viewPreset = useMemo(() => {
    if (challengeId === 'sensor-logic') {
      return { center: new Vector3(-0.35, 0.5, 0), radius: 8.2, height: 3.4, speed: 0.16, angle: 0.2 }
    }
    if (challengeId === 'safety-coordination') {
      return { center: new Vector3(0.8, 0.6, -0.8), radius: 6.4, height: 2.9, speed: 0.12, angle: -0.4 }
    }
    return { center: new Vector3(0, 0.45, -0.55), radius: 7.1, height: 2.8, speed: 0.2, angle: 0.55 }
  }, [challengeId])
  const focusTarget = useMemo(
    () => (focusPosition ? new Vector3(...focusPosition) : null),
    [focusPosition]
  )

  useFrame((state, delta) => {
    if (!reducedMotion && Date.now() > freezeUntil) {
      orbit.current += delta * viewPreset.speed
    }

    let desiredPosition: Vector3
    let lookAtTarget: Vector3

    if (focusTarget) {
      desiredPosition = new Vector3(
        focusTarget.x + 2.8,
        focusTarget.y + 1.9,
        focusTarget.z + 3.2
      )
      lookAtTarget = focusTarget
    } else {
      const radius = reducedMotion ? viewPreset.radius - 0.45 : viewPreset.radius
      const angle = reducedMotion ? viewPreset.angle : orbit.current + viewPreset.angle
      desiredPosition = new Vector3(
        Math.cos(angle) * radius + viewPreset.center.x,
        viewPreset.height,
        Math.sin(angle) * radius + viewPreset.center.z
      )
      lookAtTarget = viewPreset.center
    }

    camera.position.lerp(desiredPosition, 0.07)
    camera.lookAt(lookAtTarget)

    if (typeof camera.updateProjectionMatrix === 'function') {
      camera.updateProjectionMatrix()
    }

    state.invalidate()
  })
}
