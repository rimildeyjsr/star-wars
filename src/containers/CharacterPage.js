import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../queries/query";

export function CharacterPage({ personId }) {
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { personId: personId },
  });

  return (
    <>
      <div height={200} width={200}>
        {loading && <p>Loading Character {personId} ........</p>}
        {error && <p>Error! {error}</p>}
        {data && <p>{data.person.name}</p>}
      </div>
    </>
  );
}
