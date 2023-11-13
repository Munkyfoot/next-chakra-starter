import Layout from "@/components/Layout"
import {
    Code,
    Heading,
    List,
    ListItem,
    Text,
    UnorderedList,
} from "@chakra-ui/react"

export default function Home() {
    return (
        <Layout
            title="Start Here"
            description="A starter template for Next.js projects using TypeScript and ChakraUI."
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
                            Contains the basic layout for the pages including...
                            <List>
                                <ListItem>
                                    <Code
                                        colorScheme="blue"
                                        fontWeight="semibold"
                                    >
                                        Head
                                    </Code>{" "}
                                    <i>
                                        Setup with basic meta tags for SEO and
                                        integrated with site information from{" "}
                                        <Code>@/constants.ts</Code>. Title and
                                        description can be passed as props.
                                    </i>
                                </ListItem>
                                <ListItem>
                                    <Code
                                        colorScheme="blue"
                                        fontWeight="semibold"
                                    >
                                        Main
                                    </Code>{" "}
                                    <i>
                                        A <Code>Flex</Code> component that
                                        contains the custom <Code>Navbar</Code>{" "}
                                        and <Code>Footer</Code> components,
                                        which can be optionally hidden, and page
                                        content. Children are wrapped in{" "}
                                        <Code>SlideFadeOnView</Code> components
                                        to animate them when they come into
                                        view. This can be disabled by passing{" "}
                                        <Code>fadeStyle="none"</Code> as a prop.
                                    </i>
                                </ListItem>
                            </List>
                        </ListItem>
                        <ListItem>
                            <Heading as="h3" size="md">
                                SlideFadeOnView
                            </Heading>
                            A wrapper component for <Code>SlideFade</Code> from
                            ChakraUI that uses <Code>framer-motion</Code> to
                            animate the component when it comes into view.
                        </ListItem>
                        <ListItem>
                            <Heading as="h3" size="md">
                                Navbar
                            </Heading>
                            A responsive navbar component that can be configured
                            with navigation items and a color mode toggle.
                        </ListItem>
                        <ListItem>
                            <Heading as="h3" size="md">
                                Footer
                            </Heading>
                            A footer component that can be configured with
                            navigation items. Also displays the site title and
                            copyright information, which can be toggled by
                            passing <Code>hideSiteTitle</Code> and{" "}
                            <Code>hideCopyRight</Code> as props.
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    <Heading as="h2" size="lg">
                        Constants
                    </Heading>
                    <List>
                        <ListItem>
                            <Code>siteTitle</Code>{" "}
                            <i>The title of the site. Used in the title tag.</i>
                        </ListItem>
                        <ListItem>
                            <Code>siteDescription</Code>{" "}
                            <i>
                                The description of the site. Used in the meta
                                description tag and og:description tag when a
                                page description is not provided.
                            </i>
                        </ListItem>
                        <ListItem>
                            <Code>siteCanonical</Code>{" "}
                            <i>
                                The canonical URL of the site. Used in the
                                canonical link tag and og:url tag.
                            </i>
                        </ListItem>
                        <ListItem>
                            <Code>siteAuthor</Code>{" "}
                            <i>
                                The author of the site. Used in the meta author
                                tag.
                            </i>
                        </ListItem>
                        <ListItem>
                            <Code>siteNavItems</Code>{" "}
                            <i>
                                The navigation items for the site. Used in the{" "}
                                <Code>Navbar</Code> component.
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
                            <i>
                                A starter robots.txt file that disallows all api
                                routes.
                            </i>
                        </ListItem>
                        <ListItem>
                            <b>sitemap.xml</b>:{" "}
                            <i>
                                A starter sitemap.xml file that includes the
                                home page.
                            </i>
                        </ListItem>
                    </UnorderedList>
                </ListItem>
            </List>
        </Layout>
    )
}
