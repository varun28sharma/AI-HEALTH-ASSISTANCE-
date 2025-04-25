"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export default function TimeMachine() {
  const nobita = useRef(null)
  const { scrollYProgress: dorayakiLevel } = useScroll({
    target: nobita,
    offset: ["start start", "end start"],
  })

  const dorayakiY = useTransform(dorayakiLevel, [0, 1], ["0%", "100%"])
  const shizukaFade = useTransform(dorayakiLevel, [0, 1], [0.2, 0.8])

  const gadgetProps = { stiffness: 300, damping: 30, restDelta: 0.001 }
  const magicY = useSpring(dorayakiY, gadgetProps)

  return (
    <motion.div
      ref={nobita}
      className="fixed inset-0 z-0"
      style={{
        backgroundImage: "url('/healthy-food-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        y: magicY,
        opacity: shizukaFade,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-800/70" />
    </motion.div>
  )
}
