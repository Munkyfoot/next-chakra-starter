import { SlideFade, SlideFadeProps } from "@chakra-ui/react"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const SlideFadeOnView = (props: SlideFadeProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true })
    const [startInView, setStartInView] = useState(false)

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect()
            const startsInView = rect.top >= 0 && rect.top <= window.innerHeight
            setStartInView(startsInView)
        }
    }, [])

    const adjustedProps = startInView
        ? props
        : {
              ...props,
              transition: {
                  ...props.transition,
                  enter: {
                      ...props.transition?.enter,
                      // @ts-ignore
                      delay: props.transition?.enter?.duration / 2 || 0,
                  },
              },
          }

    return <SlideFade ref={ref} in={isInView} {...adjustedProps} />
}

export default SlideFadeOnView
