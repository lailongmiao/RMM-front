import { useQuery } from "@tanstack/react-query"
import { DataTable } from "./data-table"
import { OSData, columns } from "./columns"
export default function DemoPage() {
    const { isPending, error, data } = useQuery<{ data: OSData }>({
      queryKey: ['repoData'],
      queryFn: async () => {
        const response = await fetch('/api/agents/agent-001/os')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      },
    })
    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + (error as Error).message
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={[data.data]} />
    </div>
  )
}