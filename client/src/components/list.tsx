import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_PERSON = gql`
  {
    persons {
      id
      name
      twitter {
        link
      }
    }
  }
`;

const List: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PERSON);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{`Error ${error}`}</h2>;

  const { persons = [] } = data;
  return (
    <ul>
      {persons.map((item: any) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default List;
