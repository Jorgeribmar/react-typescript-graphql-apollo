import { DocumentNode, useQuery, useMutation } from "@apollo/react-hooks";
import { Chocolates, ChocolateMutation } from "./type/Chocolate";

export function useChocolateQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery<Chocolates>(gqlQuery);
  return { loading, error, data };
}

export function useChocolateMutation(gqlQuery: DocumentNode) {
  const [addChocolate] = useMutation<ChocolateMutation>(gqlQuery);
  return [addChocolate];
}
