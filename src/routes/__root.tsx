import { SentimentDissatisfied } from "@mui/icons-material"
import { Button } from "@mui/material"
import { createRootRoute, Link, Outlet } from "@tanstack/react-router"

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
  return <Outlet />
}
