import { gql } from "@apollo/client";

export const TopMediaQuery = gql`
query TopMedia($type: MediaType, $page: Int) {
  Page(page: $page, perPage: 10) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
    }
    media(type: $type, sort: POPULARITY_DESC) {
      id
      coverImage {
        large
      }
      title {
        romaji
      }
    }
  }
}
`;

export const SearchMediaQuery = gql`
  query SearchAnime($search: String!) {
    Page {
      media(type: MANGA, search: $search) {
        id
        title {
          romaji
        }
        coverImage {
          large
        }
      }
    }
  }
`;