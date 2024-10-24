"use client"

import { MouseEvent, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)

  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    const { clientX, clientY } = e
    if (!ref.current) return
    const { height, width, left, top } = ref.current.getBoundingClientRect()

    const middleX = clientX - (left + width / 2)

    const middleY = clientY - (top + height / 2)

    setPosition({ x: middleX, y: middleY })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={(e) => handleMouse(e)}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  )
}
