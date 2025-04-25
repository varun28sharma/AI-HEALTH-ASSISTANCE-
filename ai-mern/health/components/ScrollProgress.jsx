import { motion } from "framer-motion"

interface ScrollProgressProps {
  progress: number
}

export default function DoraemonScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-1 bg-gray-800/50 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-teal-500 to-blue-500"
        style={{ 
          scaleX: progress, 
          transformOrigin: "left",
          // Adding a subtle glow effect inspired by Doraemon's blue
          boxShadow: "0 0 10px rgba(0, 127, 255, 0.3)"
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  )
}
