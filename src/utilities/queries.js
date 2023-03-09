import { gql } from "@apollo/client";

export const SEARCH_ANIME = gql`
  query SearchAnime($searchTerm: String!, $type: MediaType) {
    Page {
      media(search: $searchTerm, type: $type, isAdult: false) {
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

export const GET_TOP_ANIME = gql`
query GetTopAnime ($type: MediaType) {
  Page {
    media(type: $type, sort: POPULARITY_DESC, isAdult: false, status: RELEASING, popularity_greater: 500) {
      id
      title {
        romaji
        english
      }
      coverImage {
        large
      }
      description
    }
  }
}
`;