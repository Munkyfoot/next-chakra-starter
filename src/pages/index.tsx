import Layout from "@/components/Layout"
import { Heading, UnorderedList, List, ListItem, Text } from "@chakra-ui/react"

export default function Home() {
    return (
        <Layout
            title="Home"
            description="Home page"
            gap={6}
            padding={6}
            maxW="container.lg"
        >
            <Heading as="h1" size="2xl">
                Next.js + TypeScript + ChakraUI Starter
            </Heading>
            <Text>
                This is a starter template for Next.js projects using TypeScript
                and ChakraUI. It is meant to be a starting point for new
                projects and contains some basic components and configuration to
                get you started.
            </Text>
            <List spacing={4}>
                <ListItem>
                    <Heading as="h2" size="lg">
                        Next.js 14
                    </Heading>
                    <List>
                        <ListItem>Using the Pages Router</ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    <Heading as="h2" size="lg">
                        TypeScript
                    </Heading>
                </ListItem>
                <ListItem>
                    <Heading as="h2" size="lg">
                        ChakraUI
                    </Heading>
                    <List>
                        <ListItem>+ Integration with Next.js Fonts</ListItem>
                        <ListItem>+ Custom Theme Support</ListItem>
                        <ListItem>
                            + Color Mode Support (Light/Dark Mode)
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    <Heading as="h2" size="lg">
                        Custom Components
                    </Heading>
                    <List spacing={2} mt={2}>
                        <ListItem>
                            <Heading as="h3" size="md">
                                Layout
                            </Heading>
                            <i>
                                Contains the basic layout for the pages
                                including...
                            </i>
                            <UnorderedList>
                                <ListItem>
                                    <b>Head</b>:{" "}
                                    <i>
                                        Setup with basic meta tags for SEO and
                                        integrated with site information from{" "}
                                        <code>@/constants.ts</code>. Title and
                                        description can be passed as props.
                                    </i>
                                </ListItem>
                                <ListItem>
                                    <b>Main</b>:{" "}
                                    <i>
                                        The main content of the page wrapped in
                                        a <code>Flex</code> component. Padding,
                                        gap, and maxWidth can be passed as
                                        props. Children are wrapped in a{" "}
                                        <code>SlideFadeOnView</code> component
                                        to animate the content on page load.
                                        This can be disabled by setting{" "}
                                        <code>fadeStyle</code> to{" "}
                                        <code>none</code>.
                                    </i>
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            <Heading as="h3" size="md">
                                SlideFadeOnView
                            </Heading>
                            <i>
                                A wrapper component for <code>SlideFade</code>{" "}
                                from ChakraUI that uses{" "}
                                <code>framer-motion</code> to animate the
                                component when it comes into view.
                            </i>
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    <Heading as="h2" size="lg">
                        Constants
                    </Heading>
                    <List>
                        <ListItem>
                            <b>siteTitle</b>:{" "}
                            <i>The title of the site. Used in the title tag.</i>
                        </ListItem>
                        <ListItem>
                            <b>siteDescription</b>:{" "}
                            <i>
                                The description of the site. Used in the meta
                                description tag and og:description tag when a
                                page description is not provided.
                            </i>
                        </ListItem>
                        <ListItem>
                            <b>siteCanonical</b>:{" "}
                            <i>
                                The canonical URL of the site. Used in the
                                canonical link tag and og:url tag.
                            </i>
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    <Heading as="h2" size="lg">
                        And More...
                    </Heading>
                    <UnorderedList>
                        <ListItem>
                            <b>Custom 404 Page</b>:{" "}
                            <i>
                                A custom 404 page with a link back to the home
                                page.
                            </i>
                        </ListItem>
                        <ListItem>
                            <b>robots.txt</b>:{" "}
                            <i>A robots.txt file that disallows api routes.</i>
                        </ListItem>
                        <ListItem>
                            <b>sitemap.xml</b>:{" "}
                            <i>
                                A sitemap.xml file that includes the home page.
                            </i>
                        </ListItem>
                    </UnorderedList>
                </ListItem>
            </List>
        </Layout>
    )
}
