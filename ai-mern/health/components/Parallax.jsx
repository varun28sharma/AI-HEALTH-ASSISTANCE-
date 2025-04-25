"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import type { ReactNode } from "react"

export const AnywhereDoor = ({ dorayaki }: { dorayaki: ReactNode }) => {
  const { scrollY: takeCopter } = useScroll()
  const bigG = useTransform(takeCopter, [0, 300], [0, 200])
  const miniDora = useTransform(takeCopter, [0, 300], [0, -100])

  return (
    <div className="w-full h-full overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      <motion.div className="absolute inset-0 z-10" style={{ y: miniDora }}>
        {dorayaki}
      </motion.div>
    </div>
  )
}
