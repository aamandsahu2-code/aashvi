"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Button from "../Button"

export default function WishScreen({ onNext }) {
    const [wish, setWish] = useState("")
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)

    const TELEGRAM_TOKEN = "8281499088:AAFX3tkSFlYGVtTN0lhp7Yk39jlKs-OJIcY"
    const CHAT_ID = "7842724579"

    const handleSend = async () => {
        if (!wish.trim() || loading) return

        setLoading(true)

        try {
            const message = `🌟 **New Birthday Wish!** 🌟\n\n"${wish}"`
            const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`

            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: 'Markdown'
                }),
            })

            setSent(true)
        } catch (error) {
            console.error("Failed to send wish to Telegram:", error)
            // Even if Telegram fails, we show success to the user to not ruin the mood
            setSent(true)
        } finally {
            setLoading(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#fff8fc] p-7 rounded-[60px] shadow-2xl min-w-48 w-full max-w-110 relative flex flex-col items-center gap-6 my-10 card-glow overflow-hidden h-[500px]"
        >
            {/* Decorative elements similar to other screens */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="ambient-glow" />
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-center shimmer-text z-10">
                Make a Special Wish
            </h2>

            <div className="relative w-full h-full flex flex-col items-center justify-center gap-6 z-10">
                <AnimatePresence mode="wait">
                    {!sent ? (
                        <motion.div
                            key="wish-form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.5, y: -100 }}
                            transition={{ duration: 0.6 }}
                            className="w-full flex flex-col items-center gap-4"
                        >
                            <textarea
                                value={wish}
                                onChange={(e) => setWish(e.target.value)}
                                placeholder="Type your birthday wish here..."
                                className="w-full h-32 p-4 bg-white/80 border border-pink-200 rounded-2xl text-[#594ba0] placeholder:text-pink-300 focus:outline-none focus:border-pink-400 transition-colors resize-none shadow-inner"
                            />
                            <Button
                                onClick={handleSend}
                                className="bg-[#ffccd3] text-[#594ba0] w-full py-4 shadow-lg active:scale-95 transition-transform"
                                disabled={!wish.trim() || loading}
                            >
                                {loading ? "Sending..." : "Send to the Stars ✨"}
                            </Button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="wish-sent"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex flex-col items-center gap-8"
                        >
                            {/* Premium Animated Star */}
                            <div className="relative h-40 w-40 flex items-center justify-center">
                                {/* Rotating background glow */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-gradient-to-r from-pink-300/30 to-yellow-300/30 rounded-full blur-2xl"
                                />

                                {/* Main Star */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.15, 1],
                                        filter: [
                                            "drop-shadow(0 0 10px rgba(255,215,0,0.4))",
                                            "drop-shadow(0 0 25px rgba(255,215,0,0.8))",
                                            "drop-shadow(0 0 10px rgba(255,215,0,0.4))"
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative z-10"
                                >
                                    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                            className="fill-yellow-400 stroke-yellow-600 stroke-2"
                                            style={{ filter: 'url(#shimmer)' }}
                                        />
                                        <defs>
                                            <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#FBFF8F" />
                                                <stop offset="50%" stopColor="#FACC15" />
                                                <stop offset="100%" stopColor="#EAB308" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </motion.div>

                                {/* Floating sparkles */}
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute text-yellow-500 font-bold pointer-events-none"
                                        initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                                        animate={{
                                            x: [0, (i % 2 === 0 ? 1 : -1) * (40 + Math.random() * 40)],
                                            y: [0, (i % 3 === 0 ? 1 : -1) * (40 + Math.random() * 40)],
                                            opacity: [0, 1, 0],
                                            scale: [0, 1.2, 0],
                                            rotate: [0, 180]
                                        }}
                                        transition={{
                                            duration: 2 + Math.random(),
                                            repeat: Infinity,
                                            delay: i * 0.4,
                                            ease: "easeOut"
                                        }}
                                    >
                                        {i % 2 === 0 ? "✦" : "✨"}
                                    </motion.div>
                                ))}
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-pink-500 mb-2">Wish Received!</h3>
                                <p className="text-[#594ba0]/70">Your wish is now a star in the sky, watching over you.</p>
                            </div>
                            <Button
                                onClick={onNext}
                                className="bg-pink-100 text-pink-600 hover:bg-pink-200 border border-pink-200 px-8"
                            >
                                NEXT ✨
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style jsx>{`
        .ambient-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255,143,171,0.1), transparent 70%);
          animation: pulse 4s ease-in-out infinite alternate;
        }

        @keyframes pulse {
          from { opacity: 0.3; transform: scale(0.8); }
          to { opacity: 0.6; transform: scale(1.1); }
        }
      `}</style>
        </motion.div>
    )
}
