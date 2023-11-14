import {
    externalNavItems,
    siteAuthor,
    siteCanonical,
    siteDescription,
    siteNavItems,
    siteTitle,
} from "@/constants"
import { NavItem } from "@/types"
import { Flex, FlexProps } from "@chakra-ui/react"
import Head from "next/head"
import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import SlideFadeOnView from "./SlideFadeOnView"

interface LayoutProps {
    title: string
    description?: string
    fadeStyle?: "sync" | "delayed" | "none"
    hideNavbar?: boolean
    hideFooter?: boolean
    navItems?: NavItem[]
    navItemsMergeConstants?: "replace" | "append" | "prepend"
    layoutPadding?: FlexProps["p"]
    layoutGap?: FlexProps["gap"]
    layoutMaxWidth?: FlexProps["maxW"]
    layoutAlign?: FlexProps["align"]
    mainPadding?: FlexProps["p"]
    mainGap?: FlexProps["gap"]
    mainMaxWidth?: FlexProps["maxW"]
    mainAlign?: FlexProps["align"]
    navPadding?: FlexProps["p"]
    navGap?: FlexProps["gap"]
    navMaxWidth?: FlexProps["maxW"]
    navAlign?: FlexProps["align"]
    navSticky?: boolean
    footerPadding?: FlexProps["p"]
    footerGap?: FlexProps["gap"]
    footerMaxWidth?: FlexProps["maxW"]
    footerAlign?: FlexProps["align"]
    children: React.ReactNode
}

const Layout = ({
    title,
    description,
    children,
    fadeStyle = "delayed",
    hideNavbar = false,
    hideFooter = false,
    navItems = [],
    navItemsMergeConstants = "append",
    layoutPadding = 0,
    layoutGap = 0,
    layoutMaxWidth = "full",
    layoutAlign = "center",
    mainPadding = 6,
    mainGap = 6,
    mainMaxWidth = "container.lg",
    mainAlign = "start",
    navPadding = 4,
    navGap = 4,
    navMaxWidth = "full",
    navSticky = true,
    footerPadding = 6,
    footerGap = 6,
    footerMaxWidth = "container.lg",
}: LayoutProps) => {
    const mergedNavItems =
        navItemsMergeConstants === "replace"
            ? navItems
            : navItemsMergeConstants === "append"
            ? [...siteNavItems, ...navItems]
            : [...navItems, ...siteNavItems]

    return (
        <>
            <Head>
                <title>{`${siteTitle} | ${title}`}</title>
                <meta
                    name="description"
                    content={description || siteDescription}
                />
                <meta name="author" content={siteAuthor} />
                <link rel="icon" href="/favicon.ico" />

                <link rel="canonical" href={siteCanonical} />

                <meta property="og:title" content={`${siteTitle} | ${title}`} />
                <meta
                    property="og:description"
                    content={description || siteDescription}
                />
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
            <Flex
                direction="column"
                w="full"
                minH="100vh"
                p={layoutPadding}
                gap={layoutGap}
                maxW={layoutMaxWidth}
                align={layoutAlign}
                mx="auto"
            >
                {!hideNavbar && (
                    <Navbar
                        navItems={mergedNavItems}
                        sticky={navSticky}
                        showColorModeToggle
                        p={navPadding}
                        gap={navGap}
                        maxW={navMaxWidth}
                    />
                )}
                <Flex
                    as="main"
                    direction="column"
                    w="full"
                    flex={1}
                    p={mainPadding}
                    gap={mainGap}
                    maxW={mainMaxWidth}
                    align={mainAlign}
                >
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
                {!hideFooter && (
                    <Footer
                        p={footerPadding}
                        gap={footerGap}
                        hideCopyright
                        sections={[
                            {
                                title: "Sitemap",
                                navItems: siteNavItems,
                            },
                            {
                                title: "Links",
                                navItems: externalNavItems,
                            },
                        ]}
                        maxW={footerMaxWidth}
                    />
                )}
            </Flex>
        </>
    )
}

export default Layout
