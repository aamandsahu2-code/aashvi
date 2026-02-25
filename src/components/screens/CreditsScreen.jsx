"use client"

import { motion } from "framer-motion"
import Button from "../Button"

const credits = [
    { role: "The Birthday Queen", name: "ANSHIKA" },
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
            className="image-style-card relative flex flex-col items-center gap-6 my-10 card-glow overflow-hidden h-[550px]"
        >
            {/* Background Orbs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="relative w-full h-full overflow-hidden flex flex-col items-center">
                <motion.div
                    animate={{ y: ["20%", "-165%"] }}
                    transition={{ duration: 35, ease: "linear" }}
                    className="flex flex-col items-center gap-16 py-20 w-full"
                >
                    {credits.map((item, i) => (
                        <div key={i} className="text-center group">
                            <p className="text-pink-400 text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
                                {item.role}
                            </p>
                            <h3 className={`text-foreground text-3xl font-bold tracking-tight ${item.role === "The Birthday Queen" ? "princess-text text-secondary text-4xl" : ""}`}>
                                {item.name}
                            </h3>
                        </div>
                    ))}

                    <div className="py-20 flex flex-col items-center text-center px-4">
                        <h2 className="text-5xl font-extrabold shimmer-text leading-tight mb-8">
                            THE END
                        </h2>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="p-6 bg-white/40 backdrop-blur-md rounded-3xl border border-white/50 shadow-sm"
                        >
                            <p className="text-foreground text-xl font-bold leading-relaxed italic">
                                "I'm Yours... <br />
                                Even if You're not mine."
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 }}
                className="absolute bottom-10 z-50 px-8 w-full"
            >
                <Button
                    onClick={() => window.location.reload()}
                    className="image-style-button w-full"
                >
                    <span>Replay Surprise</span> ✨
                </Button>
            </motion.div>
        </motion.div>
    )
}
