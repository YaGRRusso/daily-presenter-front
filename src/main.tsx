// Import the generated route tree
import { routeTree } from "./routeTree.gen"

import { createTheme, ThemeProvider } from "@mui/material/styles"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import "./styles/global.css"

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

// Create a theme with dark and light color schemes
const theme = createTheme({
  colorSchemes: {
    dark: true,
    light: true,
  },
})

// Render the app
const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>,
  )
}
