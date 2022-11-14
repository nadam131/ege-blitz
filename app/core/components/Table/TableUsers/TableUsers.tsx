import MUIDataTable from "mui-datatables"

// const data = [
//   ["Joe James", "Test Corp", "Yonkers", "NY"],
//   ["John Walsh", "Test Corp", "Hartford", "CT"],
//   ["Bob Herm", "Test Corp", "Tampa", "FL"],
//   ["James Houston", "Test Corp", "Dallas", "TX"],
// ]

const OPTIONS = {
  filterType: "checkbox",
  download: false,
  print: false,
  filter: false,
  viewColumns: false,
}

const COLUMNS = ["NickName", "Last Name", "First Name", "Email", "Exam"]

export const TableUsers = ({ data }) => (
  <MUIDataTable title={"User List"} data={data} columns={COLUMNS} options={OPTIONS} />
)
