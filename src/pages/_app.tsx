import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { fontCss, theme } from "@/theme"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>
                {fontCss}
            </style>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    )
}
