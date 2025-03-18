import { SentimentDissatisfied } from "@mui/icons-material"
import { Button, useColorScheme } from "@mui/material"
import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { useEffect } from "react"

import { Title } from "@/components/title"

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: PageNotFound,
})

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-32">
      <SentimentDissatisfied sx={{ fontSize: 64 }} />
      <Title>Not Found</Title>
      <Button variant="outlined" color="inherit">
        <Link to="/">Go to Home</Link>
      </Button>
    </div>
  )
}

export default function RootLayout() {
  const { mode } = useColorScheme()

  useEffect(() => {
    if (mode === "light") {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }, [mode])

  return <Outlet />
}
