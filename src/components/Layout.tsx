import { siteCanonical, siteDescription, siteTitle } from "@/constants"
import { Flex, FlexProps } from "@chakra-ui/react"
import Head from "next/head"
import React from "react"
import SlideFadeOnView from "./SlideFadeOnView"

interface LayoutProps extends FlexProps {
    title: string
    description?: string
    children: React.ReactNode
    fadeStyle?: "sync" | "delayed" | "none"
}

const Layout = ({
    title,
    description = siteDescription,
    children,
    fadeStyle = "delayed",
    ...rest
}: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{`${siteTitle} | ${title}`}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />

                <link rel="canonical" href={siteCanonical} />

                <meta property="og:title" content={`${siteTitle} | ${title}`} />
                <meta property="og:description" content={description} />
                {/* TODO: Add og image */}
                {/*<meta property="og:image" content="/og-image.png" />*/}
                <meta property="og:url" content={siteCanonical} />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={`${siteTitle} | ${title}`}
                />
                <meta name="twitter:description" content={description} />
                {/* TODO: Add twitter image */}
                {/*<meta name="twitter:image" content="/twitter-image.png" />*/}
            </Head>
            <Flex as="main" direction="column" mx="auto" {...rest}>
                {fadeStyle === "none"
                    ? children
                    : React.Children.map(children, (child, index) => {
                          return (
                              <SlideFadeOnView
                                  offsetY="-20px"
                                  key={index}
                                  transition={{
                                      enter: {
                                          duration: 0.4,
                                          delay:
                                              fadeStyle === "delayed"
                                                  ? 0.2 * index
                                                  : 0,
                                      },
                                  }}
                              >
                                  {child}
                              </SlideFadeOnView>
                          )
                      })}
            </Flex>
        </>
    )
}

export default Layout
