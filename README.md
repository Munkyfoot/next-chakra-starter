# Next-Chakra Starter

This is the official repository for the Next-Chakra Starter, a comprehensive template for kickstarting Next.js projects with TypeScript and ChakraUI. It's designed to provide a solid foundation for your Next.js projects, including basic components and essential configurations.

## Features

-   **Next.js 14**: Utilizes the latest features of Next.js, including the Pages Router.
-   **TypeScript**: Integrated support for TypeScript for type-safe coding.
-   **ChakraUI**: A robust UI framework fully integrated with Next.js. Pre-configured with:
    -   Integration with Next.js Fonts
    -   Custom Theme Support
    -   Color Mode Support (Light/Dark Mode)
-   **Custom Components**: Pre-designed components for faster development:
    -   `Layout`: Configurable layout including Head, Navbar, Main, and Footer. Uses constants for site metadata.
    -   `SlideFadeOnView`: A component using ChakraUI and framer-motion for view-triggered animations.
    -   `Navbar`: A responsive navbar with navigation items and color mode toggle.
    -   `Footer`: A customizable footer component.
-   **Constants**: Centralized configuration for site metadata.
-   **Custom 404 Page**: Tailored page for handling 404 errors.
-   **Starter files for SEO**: Includes a basic `robots.txt` and `sitemap.xml`.

## Getting Started with Next-Chakra Starter

To use this starter template with `npx create-next-app`, follow these steps:

1. **Create a New Project**: Run the following command, replacing `<project-name>` with your project's name:

    ```bash
    npx create-next-app <project-name> -e https://github.com/Munkyfoot/next-chakra-starter
    ```

2. **Navigate to Your Project**: Change into your project's directory:

    ```bash
    cd <project-name>
    ```

3. **Start Developing**: Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. **Edit Your Pages**: Begin by modifying `pages/index.tsx`. The page auto-updates as you edit.

## Original create-next-app README

The Next-Chakra Starter builds upon the default [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). For details on Next.js features, API, and more, refer to the original README provided by `create-next-app` (included above).
