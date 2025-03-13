import { Add, Remove } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useState } from "react"

import { Title } from "@/components/title"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  const [state, setState] = useState(0)

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-32">
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
    </div>
  )
}
