import React from "react";
import { DashBaseProps, PersistenceProps } from "props/dash";

export type Props = DashBaseProps & PersistenceProps;

const App: React.FC<Props> = (props) => {
  return <div>Hello world</div>;
};

App.defaultProps = {
  persisted_props: ["value"],
  persistence_type: "local",
};

export default App;
