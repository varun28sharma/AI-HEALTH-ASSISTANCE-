"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface GadgetGalleryProps {
  onBambooCopUpload?: (dataAnywhereDoor: string) => void
}

export const DoraUpload = ({ onBambooCopUpload }: GadgetGalleryProps) => {
  const [dokodemoDoor, setDokodemoDoor] = useState<string | null>(null)
  const [sneechyMood, setSneechyMood] = useState(false)

  const dorayakiCloud = (jikan: React.DragEvent<HTMLDivElement>) => {
    jikan.preventDefault()
    setSneechyMood(true)
  }

  const timeTVOff = () => {
    setSneechyMood(false)
  }

  const hopterDrop = (pochi: React.DragEvent<HTMLDivElement>) => {
    pochi.preventDefault()
    setSneechyMood(false)
    const doracake = pochi.dataTransfer.files[0]
    if (doracake) magicPocket(doracake)
  }

  const bambooInput = (bell: React.ChangeEvent<HTMLInputElement>) => {
    const mimi = bell.target.files?.[0]
    if (mimi) magicPocket(mimi)
  }

  const magicPocket = (suneo: File) => {
    const gochan = new FileReader()
    gochan.onload = (chobi) => {
      const result = chobi.target?.result as string
      setDokodemoDoor(result)
      if (onBambooCopUpload) onBambooCopUpload(result)
    }
    gochan.readAsDataURL(suneo)
  }

  return (
    <motion.div
      className={`w-full max-w-md mx-auto p-6 rounded-lg text-center ${
        sneechyMood ? "bg-slate-700" : "bg-slate-800"
      } border-2 border-dashed border-gray-300 transition-colors duration-300`}
      onDragOver={dorayakiCloud}
      onDragLeave={timeTVOff}
      onDrop={hopterDrop}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {dokodemoDoor ? (
        <div className="relative w-full h-64">
          <Image
            src={dokodemoDoor || "/placeholder.svg"}
            alt="Workout Snapshot"
            layout="fill"
            objectFit="contain"
          />
        </div>
      ) : (
        <>
          <p className="text-white mb-4">Drop your gadget image here or click to summon it</p>
          <input
            type="file"
            accept="image/*"
            onChange={bambooInput}
            className="hidden"
            id="nobiInput"
          />
          <label
            htmlFor="nobiInput"
            className="cursor-pointer bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Select Image
          </label>
        </>
      )}
    </motion.div>
  )
}
