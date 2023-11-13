import Layout from "@/components/Layout"
import { Button, Heading, Text, VStack } from "@chakra-ui/react"
import { useRouter } from "next/navigation"

export default function Error404() {
    const router = useRouter()
    return (
        <Layout title="404" description="Page not found" mainAlign="center">
            <VStack gap={4}>
                <Heading as="h1" size="2xl">
                    404
                </Heading>
                <Text>This page could not be found.</Text>
            </VStack>

            <Button onClick={() => router.push("/")}>Return to Home</Button>
        </Layout>
    )
}
