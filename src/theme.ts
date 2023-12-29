import { extendTheme } from "@chakra-ui/react"
import { Inter } from "next/font/google"

export const fontHeading = Inter({ subsets: ["latin-ext"] })
export const fontBody = fontHeading // Change this to another font if you like

export const fontCss = `
:root {
    --font-custom-heading: ${fontHeading.style.fontFamily};
    --font-custom-body: ${fontBody.style.fontFamily};
}`

const fonts = {
    heading: "var(--font-custom-heading)",
    body: "var(--font-custom-body)",
}

const config = {
    initialColorMode: "system",
    useSystemColorMode: true,
}

export const theme = extendTheme({ fonts, config })
