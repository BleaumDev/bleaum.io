import { IBM_Plex_Sans, Montserrat } from "next/font/google"

const display = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-montserrat", display: "swap" })
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex", display: "swap" })

// Class that defines the two font variables used by home.module.css.
export const homeFonts = `${display.variable} ${body.variable}`
