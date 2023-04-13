import MUIDataTable from "mui-datatables"
import { useRouter } from "next/router"

const COLUMNS = ["Title", "Topics", "Difficult"]

export const TableTasks = ({ data }) => {
  const router = useRouter()
  const options = {
    filterType: "checkbox",
    download: false,
    print: false,
    filter: false,
    search: false,
    viewColumns: false,
    elevation: 0,
    rowsPerPage: 50,
    rowsPerPageOptions: false,
    selectableRows: false,
    onRowClick: (_, { dataIndex }) => router.push(`/ege/${data[dataIndex][3]}`),
  }

  return <MUIDataTable data={data} columns={COLUMNS} options={options} />
}
