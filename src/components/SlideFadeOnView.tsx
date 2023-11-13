import { SlideFade, SlideFadeProps } from "@chakra-ui/react"
import { useInView } from "framer-motion"
import { useRef } from "react"

const SlideFadeOnView = (props: SlideFadeProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return <SlideFade ref={ref} in={isInView} {...props} />
}

export default SlideFadeOnView
