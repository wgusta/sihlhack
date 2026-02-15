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
      return { center: new Vector3(-0.9, 0.5, -0.35), radius: 7.8, height: 3.25, speed: 0.12, angle: 0.55 }
    }
    if (challengeId === 'safety-coordination') {
      return { center: new Vector3(1.9, 0.55, -1.1), radius: 5.6, height: 2.7, speed: 0.08, angle: -0.95 }
    }
    return { center: new Vector3(0.4, 0.45, -0.65), radius: 7.4, height: 2.85, speed: 0.22, angle: 0.35 }
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
