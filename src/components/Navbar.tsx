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
import { useRouter } from "next/router"
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
    const router = useRouter()

    const { isOpen, onToggle } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()

    const [stickyEngaged, setStickyEngaged] = useState(false)

    useEffect(() => {
        if (!sticky) return

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setStickyEngaged(true)
            } else {
                setStickyEngaged(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const NavItems = navItems.map((item) => {
        const NavLink = item.isExternal ? Link : NextLink

        return (
            <NavLink
                href={router.pathname === item.href ? "#" : item.href}
                key={item.name}
                fontSize="xl"
                fontWeight="semibold"
                borderBottomWidth={1}
                borderBottomColor={
                    router.pathname === item.href
                        ? "currentColor"
                        : "transparent"
                }
                _hover={{
                    textDecoration: "none",
                    borderBottomColor:
                        router.pathname === item.href
                            ? undefined
                            : "currentColor",
                }}
                transition={"border-color 0.15s ease-in-out"}
                cursor={router.pathname === item.href ? "default" : undefined}
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
                shadow: stickyEngaged ? "lg" : "none",
                transition: "all 0.3s ease-out",
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
                    px={2}
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
                    display={{
                        base: "flex",
                        md: "none",
                    }}
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
