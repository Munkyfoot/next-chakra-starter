import { siteAuthor, siteNavItems, siteTitle } from "@/constants"
import { NavItem } from "@/types"
import { Link as NextLink } from "@chakra-ui/next-js"
import {
    FlexProps,
    Heading,
    List,
    ListItem,
    SimpleGrid,
    SimpleGridProps,
    Link,
    Text,
    Flex,
    GridItem,
} from "@chakra-ui/react"

interface FooterProps extends FlexProps {
    navItems?: NavItem[]
    hideSiteTitle?: boolean
    hideCopyright?: boolean
    copyrightOwner?: "site-author" | "site-title"
    columns?: SimpleGridProps["columns"]
}

const Footer = ({
    navItems = [],
    hideSiteTitle = false,
    hideCopyright = false,
    copyrightOwner = "site-title",
    ...rest
}: FooterProps) => {
    const NavItems = navItems.map((item) => {
        const NavLink = item.isExternal ? Link : NextLink

        return (
            <NavLink
                href={item.href}
                key={item.name}
                fontSize="xl"
                fontWeight="semibold"
                _hover={{
                    textDecoration: "none",
                    transform: "scale(1.05)",
                }}
                transition={"all 0.15s ease-in-out"}
                isExternal={item.isExternal}
            >
                {item.name}
            </NavLink>
        )
    })

    return (
        <Flex as="footer" direction="column" align="center" gap={6} {...rest}>
            <SimpleGrid
                w="full"
                columns={{
                    base: 1,
                    md: 2,
                    lg: 3,
                }}
                {...rest}
                maxW="container.lg"
            >
                <GridItem>
                    {!hideSiteTitle && (
                        <Heading as="h2" size="lg">
                            {siteTitle}
                        </Heading>
                    )}
                    {navItems.length > 0 && (
                        <List>
                            {NavItems.map((item) => (
                                <ListItem key={item.key}>{item}</ListItem>
                            ))}
                        </List>
                    )}
                </GridItem>
            </SimpleGrid>

            {!hideCopyright && (
                <Text fontSize="sm">
                    &copy; {new Date().getFullYear()}{" "}
                    {
                        {
                            "site-author": siteAuthor,
                            "site-title": siteTitle,
                        }[copyrightOwner]
                    }
                </Text>
            )}
        </Flex>
    )
}

export default Footer
