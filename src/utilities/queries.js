import { gql } from "@apollo/client";

export const SEARCH_ANIME = gql`
  query SearchAnime($searchTerm: String!, $type: MediaType) {
    Page {
      media(search: $searchTerm, type: $type) {
        id
        title {
          romaji
          english
        }
        coverImage{
          large
        }
        description
      }
    }
  }
`;