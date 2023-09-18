import React from "react";
import { Paper, Typography } from "@mui/material";
import "react-dom";

export interface Props {}

const App: React.FC<Props> = (props) => {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    (async () => {
      const result = await fetch("/custom/api/example");
      const data = await result.json();
      setData(data);
    })();
  });

  return (
    <Paper>
      <Typography>Hello From React</Typography>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </Paper>
  );
};

export default App;
