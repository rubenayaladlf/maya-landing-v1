import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Jua } from "next/font/google"

const jua = Jua({
  weight: "400",
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={jua.className}>
      <Component {...pageProps} />
    </main>
  )
}

