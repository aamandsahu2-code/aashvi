"use client"

import { useEffect, useRef } from "react"

export default function BackgroundMusic() {
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.3

      const attemptPlay = async () => {
        try {
          await audio.play()
          console.log('Music started successfully')
        } catch (error) {
          console.log('Autoplay blocked, waiting for interaction...')
        }
      }

      attemptPlay()

      // Unlock audio on any interaction
      const unlockAudio = () => {
        if (audio.paused) {
          audio.play()
            .then(() => {
              console.log('Music unlocked and playing')
              removeInteractions()
            })
            .catch(() => { })
        } else {
          removeInteractions()
        }
      }

      const removeInteractions = () => {
        window.removeEventListener('click', unlockAudio)
        window.removeEventListener('touchstart', unlockAudio)
        window.removeEventListener('keydown', unlockAudio)
      }

      window.addEventListener('click', unlockAudio)
      window.addEventListener('touchstart', unlockAudio)
      window.addEventListener('keydown', unlockAudio)

      return () => {
        removeInteractions()
      }
    }
  }, [])

  return (
    <audio
      ref={audioRef}
      loop
      autoPlay
      playsInline
      muted={false}
      src="/music/birthday-song.mp3"
    />
  )
}
