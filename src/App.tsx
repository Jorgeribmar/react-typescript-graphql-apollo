import * as React from "react";
import "./style.css";

import { GET_CHOCOLATES } from "./graphql";
import { useChocolateQuery } from "./useRequest";
import AddChocolate from "./components/AddChocolate";
import GetChocolates from "./components/GetChocolates";
import { Chocolate } from "./type/Chocolate";

const App: React.FC = () => {
  const { loading, error, data } = useChocolateQuery(GET_CHOCOLATES);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong!</h1>;

  return (
    <div className="App">
      <h1>My Chocolates</h1>
      <AddChocolate />
      {data?.getChocolates.map((chocolate: Chocolate) => (
        <GetChocolates
         key={chocolate.id} chocolate={chocolate} />
      ))}
    </div>
  );
};

export default App;
