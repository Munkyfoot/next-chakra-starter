import { siteAuthor, siteTitle } from "@/constants"
import { NavItem } from "@/types"
import { Link as NextLink } from "@chakra-ui/next-js"
import {
    Flex,
    FlexProps,
    GridItem,
    Heading,
    Link,
    List,
    ListItem,
    SimpleGrid,
    SimpleGridProps,
    Text,
} from "@chakra-ui/react"

interface FooterProps extends FlexProps {
    navItems?: NavItem[]
    hideCopyright?: boolean
    copyrightOwner?: "site-author" | "site-title"
    columns?: SimpleGridProps["columns"]
}

const Footer = ({
    navItems = [],
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
        <Flex as="footer" direction="column" align="center" {...rest}>
            {navItems.length > 0 && (
                <SimpleGrid
                    w="full"
                    columns={{
                        base: 1,
                        md: 2,
                        lg: 3,
                    }}
                    maxW="container.lg"
                >
                    <GridItem>
                        <Heading as="h2" size="lg">
                            {siteTitle}
                        </Heading>
                        {navItems.length > 0 && (
                            <List>
                                {NavItems.map((item) => (
                                    <ListItem key={item.key}>{item}</ListItem>
                                ))}
                            </List>
                        )}
                    </GridItem>
                </SimpleGrid>
            )}

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
