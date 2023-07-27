import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const Items = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const jsonData = await response.json();
        setRows(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.1 },
    { field: "title", headerName: "Title", flex: 0.4 },
    { field: "userId", headerName: "User ID", flex: 0.3 },
  ];

  return (
    <div
      className="table"
      style={{
        width: "100%",
      }}
    >
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default Items;
