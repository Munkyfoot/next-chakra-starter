import { externalNavItems, siteNavItems } from "@/constants"
import { Link as NextLink } from "@chakra-ui/next-js"
import { Link, List, ListItem } from "@chakra-ui/react"

interface NavItemsProps {
    loc?: "site" | "external" | "all"
}

const NavItems = ({ loc = "all" }: NavItemsProps) => {
    const navItems =
        loc === "all"
            ? siteNavItems.concat(externalNavItems)
            : loc === "site"
            ? siteNavItems
            : externalNavItems

    return (
        <List>
            {navItems.map((item) => {
                const NavLink = item.isExternal ? Link : NextLink

                return (
                    <ListItem>
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
                    </ListItem>
                )
            })}
        </List>
    )
}
export default NavItems
