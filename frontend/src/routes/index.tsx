import { createFileRoute } from '@tanstack/react-router'

const index = () => {
  return (
      <div></div>
  )
}

export const Route = createFileRoute('/')({
  component: index
})
