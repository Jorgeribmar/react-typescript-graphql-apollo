import * as React from "react";
import { ApolloCache } from "@apollo/react-hooks";
import { FetchResult } from "apollo-boost";

import { useChocolateMutation } from "../useRequest";
import { ADD_CHOCOLATE, GET_CHOCOLATES } from "../graphql";
import { Chocolate, ChocolateMutation, Chocolates } from "../type/Chocolate";

const AddChocolate: React.FC = () => {
  const [formData, setFormData] = React.useState<Chocolate | {}>();
  const [addChocolate] = useChocolateMutation(ADD_CHOCOLATE);

  const handleForm = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value
    });
  };

  const handleSaveChocolate = (
    e: React.FormEvent,
    { title, description }: Chocolate | any
  ) => {
    e.preventDefault();
    addChocolate({
      variables: { title, description },
      update: (
        cache: ApolloCache<ChocolateMutation>,
        { data: { addChocolate } }: FetchResult<ChocolateMutation>
      ) => {
        const cacheData = cache.readQuery({ query: GET_CHOCOLATES }) as Chocolates;
        cache.writeQuery({
          query: GET_CHOCOLATES,
          data: {
            getChocolates: [...cacheData.getChocolates, addChocolate]
          }
        });
      }
    });
  };

  return (
    <form className="Form" onSubmit={(e) => handleSaveChocolate(e, formData)}>
      <div>
        <div>
          <label htmlFor="name">Title</label>
          <input onChange={handleForm} type="text" id="title" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="description" />
        </div>
      </div>
      <button>Add Choco</button>
    </form>
  );
};

export default AddChocolate;