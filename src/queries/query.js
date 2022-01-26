import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
  query getCharacterData($personId: ID!) {
    person(personID: $personId) {
      name
      birthYear
    }
  }
`;
