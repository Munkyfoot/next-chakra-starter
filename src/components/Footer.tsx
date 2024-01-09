import { siteAuthor, siteTitle } from "@/constants"
import {
    Flex,
    FlexProps,
    GridItem,
    Heading,
    SimpleGrid,
    Spacer,
    Text,
} from "@chakra-ui/react"

interface FooterSectionProps extends FlexProps {
    title: string
}

export const FooterSection = ({ title, ...rest }: FooterSectionProps) => {
    const { children, ...props } = rest
    return (
        <Flex direction="column" {...props}>
            <Heading as="h3" size="md" mb={2}>
                {title}
            </Heading>
            {children}
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
                        md: Math.min(sections.length, 2),
                        lg: Math.min(sections.length, 3),
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
            <Spacer display={{ base: "none", md: "flex" }} minH={4} />
        </Flex>
    )
}

export default Footer
