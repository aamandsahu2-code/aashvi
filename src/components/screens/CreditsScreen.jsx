"use client"

import { motion } from "framer-motion"
import Button from "../Button"

const credits = [
    { role: "The Birthday Queen", name: "ANSHIKA" },
    { role: "Directed & Developed By", name: "Your Favorite Person" },
    { role: "Graphic Artist", name: "KD" },
    { role: "Chief Happiness Officer", name: "You" },
    { role: "Music Curator", name: "KD" },
    { role: "Special Thanks", name: "To everyone who loves you" },
    { role: "Location", name: "Right in your heart" },
    { role: "Dedicated to", name: "Making you smile today" },
]

export default function CreditsScreen() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#fff8fc] p-7 rounded-[60px] shadow-2xl min-w-48 w-full max-w-110 relative flex flex-col items-center gap-6 my-10 card-glow overflow-hidden h-[500px] border border-pink-100"
        >
            {/* Background Orbs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="relative w-full h-full overflow-hidden flex flex-col items-center">
                <motion.div
                    animate={{ y: ["20%", "-155%"] }}
                    transition={{ duration: 40, ease: "linear" }}
                    className="flex flex-col items-center gap-16 py-20 w-full"
                >
                    {credits.map((item, i) => (
                        <div key={i} className="text-center group">
                            <p className="text-pink-400 text-sm uppercase tracking-[0.2em] mb-2 font-medium">
                                {item.role}
                            </p>
                            <h3 className="text-[#594ba0] text-3xl font-bold tracking-tight">
                                {item.name}
                            </h3>
                        </div>
                    ))}

                    <div className="py-20 flex flex-col items-center text-center">
                        <h2 className="text-5xl font-extrabold shimmer-text leading-tight mb-8">
                            THE END
                        </h2>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="p-6 bg-white/50 backdrop-blur-sm rounded-3xl border border-pink-100 shadow-sm"
                        >
                            <p className="text-[#594ba0] text-2xl font-bold leading-relaxed italic">
                                "I'am Yours . Even if You're not mine"
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 z-50 px-8 w-full max-w-xs"
            >
                <Button
                    onClick={() => window.location.reload()}
                    className="bg-white/80 hover:bg-white text-pink-600 border border-pink-100 backdrop-blur-md w-full shadow-md"
                >
                    Replay Surprise ✨
                </Button>
            </motion.div>

            <style jsx>{`
        .card-glow {
          box-shadow: 0 0 40px rgba(255, 182, 193, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.5);
        }
      `}</style>
        </motion.div>
    )
}
