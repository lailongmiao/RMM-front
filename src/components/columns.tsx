import { ColumnDef } from "@tanstack/react-table"
export type OSData = {
  hostname: string
  kernel_version: string
  name: string
  version: string
}
export const columns: ColumnDef<OSData>[] = [
  {
    accessorKey: "hostname",
    header: "Hostname",
  },
  {
    accessorKey: "name",
    header: "OS Name",
  },
  {
    accessorKey: "version",
    header: "Version",
  },
  {
    accessorKey: "kernel_version",
    header: "Kernel Version",
  },
]