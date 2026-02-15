"use client"

import { useEffect, useRef } from "react"

export default function BackgroundMusic() {
  const audioRef = useRef(null)

  useEffect(() => {
    // Force auto-play immediately when component mounts
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.3
      
      // Multiple attempts to play music
      const attemptPlay = async () => {
        try {
          await audio.play()
          console.log('Music started successfully')
        } catch (error) {
          console.log('Auto-play blocked, trying alternative methods...')
          
          // Try different methods to bypass browser restrictions
          setTimeout(() => {
            audio.play().then(() => {
              console.log('Music started on retry')
            }).catch(() => {
              console.log('Still blocked, trying on window focus...')
            })
          }, 1000)
        }
      }

      attemptPlay()

      // Also try on window focus
      const handleFocus = () => {
        if (audio.paused) {
          audio.play().then(() => {
            console.log('Music started on window focus')
          }).catch(() => {})
        }
      }

      // Try on page visibility change
      const handleVisibilityChange = () => {
        if (!document.hidden && audio.paused) {
          audio.play().then(() => {
            console.log('Music started on visibility change')
          }).catch(() => {})
        }
      }

      window.addEventListener('focus', handleFocus)
      document.addEventListener('visibilitychange', handleVisibilityChange)

      return () => {
        window.removeEventListener('focus', handleFocus)
        document.removeEventListener('visibilitychange', handleVisibilityChange)
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
