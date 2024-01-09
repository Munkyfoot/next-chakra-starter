import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
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

const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: true,
}

const styles = {
    global: (props: any) => ({
        body: {
            backgroundAttachment: "fixed",
            bgGradient: mode(
                "linear(to-t, #dbdbdb, #fff)",
                "linear(to-t, #000, #181818)"
            )(props),
        },
    }),
}

const layerStyles = {
    glass: {
        background: "whiteAlpha.800",
        backdropFilter: "blur(0.5rem)",

        _dark: {
            background: "blackAlpha.800",
        },
    },
}

export const theme = extendTheme({ fonts, config, styles, layerStyles })
