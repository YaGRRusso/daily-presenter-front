import { Add, DarkMode, LightMode, Remove } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useColorScheme } from "@mui/material/styles"
import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useState } from "react"

import { Title } from "@/components/title"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  const { setMode } = useColorScheme()
  const [state, setState] = useState(0)

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-32 text-foreground">
      <div className="flex items-center gap-2">
        <IconButton size="small" onClick={() => setMode("dark")}>
          <DarkMode />
        </IconButton>
        <IconButton size="small" onClick={() => setMode("light")}>
          <LightMode />
        </IconButton>
      </div>
      <Title>Hello World</Title>
      <div className="flex items-center gap-2">
        <IconButton size="small" onClick={() => setState((old) => old - 1)}>
          <Remove />
        </IconButton>
        <span>{state}</span>
        <IconButton size="small" onClick={() => setState((old) => old + 1)}>
          <Add />
        </IconButton>
      </div>
      <div className="flex items-center gap-2">
        <div className="rounded bg-muted px-4 py-2 text-muted-foreground">muted</div>
        <div className="rounded bg-primary px-4 py-2 text-primary-foreground">primary</div>
        <div className="rounded bg-error px-4 py-2 text-error-foreground">error</div>
        <div className="rounded bg-warning px-4 py-2 text-warning-foreground">warning</div>
        <div className="rounded bg-success px-4 py-2 text-success-foreground">success</div>
      </div>
    </div>
  )
}
