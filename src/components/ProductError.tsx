import { ErrorComponent, ErrorComponentProps } from '@tanstack/solid-router'

export function ProductErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />
}
