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
    collapseOnMobile?: boolean
    showColorModeToggle?: boolean
}

const Navbar = ({
    navItems,
    collapseOnMobile,
    showColorModeToggle,
    ...rest
}: NavbarProps) => {
    const { isOpen, onToggle } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()

    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

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
            >
                {item.name}
            </NavLink>
        )
    })

    return (
        <>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w="full"
                {...rest}
            >
                {!isMobile && <>{...NavItems}</>}

                {showColorModeToggle && (
                    <IconButton
                        aria-label="Toggle dark mode"
                        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                        onClick={toggleColorMode}
                        variant={"ghost"}
                        rounded={"full"}
                    />
                )}
                {isMobile && (
                    <IconButton
                        aria-label="Toggle menu"
                        icon={<HamburgerIcon />}
                        onClick={onToggle}
                        variant={"ghost"}
                        rounded={"full"}
                    />
                )}
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <Flex
                    direction="column"
                    align="end"
                    justify="center"
                    w="full"
                    pb={4}
                    borderBottomWidth={1}
                    borderColor="gray.200"
                >
                    <>{...NavItems}</>
                </Flex>
            </Collapse>
        </>
    )
}

export default Navbar
