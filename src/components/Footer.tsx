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
    Text,
} from "@chakra-ui/react"

interface FooterSectionProps extends FlexProps {
    title: string
    navItems?: NavItem[]
}

export const FooterSection = ({
    title,
    navItems = [],
    ...rest
}: FooterSectionProps) => {
    const NavItems = navItems.map((item) => {
        const NavLink = item.isExternal ? Link : NextLink

        return (
            <NavLink
                href={item.href}
                key={item.name}
                fontSize="lg"
                borderBottomWidth={1}
                borderBottomColor="transparent"
                _hover={{
                    textDecoration: "none",
                    borderBottomColor: "currentColor",
                }}
                transition={"border-color 0.15s ease-in-out"}
                isExternal={item.isExternal}
            >
                {item.name}
            </NavLink>
        )
    })

    return (
        <Flex direction="column" {...rest}>
            <Heading as="h3" size="md" mb={2}>
                {title}
            </Heading>
            {navItems.length > 0 && (
                <List spacing={2} ml={2}>
                    {NavItems.map((item) => (
                        <ListItem key={item.key}>{item}</ListItem>
                    ))}
                </List>
            )}
        </Flex>
    )
}

interface FooterProps extends FlexProps {
    sections?: FooterSectionProps[]
    hideCopyright?: boolean
    copyrightOwner?: "site-author" | "site-title"
}

const Footer = ({
    sections = [],
    hideCopyright = false,
    copyrightOwner = "site-title",
    ...rest
}: FooterProps) => {
    return (
        <Flex w="full" as="footer" direction="column" align="center" {...rest}>
            {sections.length > 0 && (
                <SimpleGrid
                    w="full"
                    columns={{
                        base: 1,
                        md: 2,
                        lg: 3,
                    }}
                    gap={rest.gap}
                >
                    {sections.map((section) => (
                        <GridItem key={section.title}>
                            <FooterSection {...section} />
                        </GridItem>
                    ))}
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
