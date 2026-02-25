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
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="p-8 bg-white/40 backdrop-blur-md rounded-3xl border border-white/50 shadow-sm max-w-md"
                        >
                            <div className="space-y-2">
                                {["I'm", "Yours...", "Even", "if", "You're", "not", "mine."].map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.2 + index * 0.3, duration: 0.6 }}
                                        className={`inline-block mx-1 ${
                                            word === "I'm" || word === "Yours..." 
                                                ? "text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-[0.15em] font-serif"
                                                : word === "mine."
                                                ? "text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-[0.15em] font-serif"
                                                : "text-2xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent tracking-[0.1em] font-serif"
                                        }`}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </div>
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
