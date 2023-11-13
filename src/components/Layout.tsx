import {
    siteCanonical,
    siteDescription,
    siteAuthor,
    siteNavItems,
    siteTitle,
} from "@/constants"
import { NavItem } from "@/types"
import { Flex, FlexProps } from "@chakra-ui/react"
import Head from "next/head"
import React, { useState, useEffect } from "react"
import Navbar from "./Navbar"
import SlideFadeOnView from "./SlideFadeOnView"
import Footer from "./Footer"

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
    layoutPadding = 6,
    layoutGap = 6,
    layoutMaxWidth = "full",
    layoutAlign = "center",
    mainPadding = 0,
    mainGap = 6,
    mainMaxWidth = "container.lg",
    mainAlign = "start",
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
            >
                {!hideNavbar && (
                    <Navbar navItems={mergedNavItems} showColorModeToggle />
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
                {!hideFooter && <Footer hideSiteTitle />}
            </Flex>
        </>
    )
}

export default Layout
