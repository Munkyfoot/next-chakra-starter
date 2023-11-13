import { NavItem } from "@/types"
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Link as NextLink } from "@chakra-ui/next-js"
import {
    Collapse,
    Flex,
    FlexProps,
    IconButton,
    Link,
    useColorMode,
    useDisclosure,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"

interface NavbarProps extends FlexProps {
    navItems: NavItem[]
    sticky?: boolean
    showColorModeToggle?: boolean
}

const Navbar = ({
    navItems,
    sticky,
    showColorModeToggle,
    ...rest
}: NavbarProps) => {
    const { isOpen, onToggle } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()

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
        <Flex
            as="nav"
            w="full"
            align="stretch"
            direction="column"
            {...(sticky && {
                bg: "var(--chakra-colors-chakra-body-bg)",
                position: "sticky",
                zIndex: "sticky",
                top: 0,
            })}
        >
            <Flex align="center" justify="space-between" wrap="wrap" {...rest}>
                <Flex
                    display={{
                        base: "none",
                        md: "flex",
                    }}
                    align="center"
                    justify="flex-start"
                    wrap="wrap"
                    gap={rest.gap}
                >
                    {...NavItems}
                </Flex>

                {showColorModeToggle && (
                    <IconButton
                        aria-label="Toggle dark mode"
                        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                        onClick={toggleColorMode}
                        variant={"ghost"}
                        rounded={"full"}
                    />
                )}
                <IconButton
                    display={{
                        base: "inline-flex",
                        md: "none",
                    }}
                    aria-label="Toggle menu"
                    icon={<HamburgerIcon />}
                    onClick={onToggle}
                    variant={"ghost"}
                    rounded={"full"}
                />
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <Flex
                    direction="column"
                    align="end"
                    justify="center"
                    w="full"
                    py={4}
                    borderBottomWidth={1}
                    borderColor="gray.200"
                    {...rest}
                >
                    <>{...NavItems}</>
                </Flex>
            </Collapse>
        </Flex>
    )
}

export default Navbar
