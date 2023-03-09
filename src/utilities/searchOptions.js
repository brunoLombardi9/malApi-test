export const types = ["ANIME", "MANGA"];

export const genresList = [
  { id: 1, name: "Action" },
  { id: 2, name: "Adventure" },
  { id: 3, name: "Comedy" },
  { id: 4, name: "Drama" },
  { id: 5, name: "Fantasy" },
  { id: 6, name: "Horror" },
  { id: 7, name: "Mecha" },
  { id: 8, name: "Mystery" },
  { id: 9, name: "Romance" },
  { id: 10, name: "Sci-Fi" },
  { id: 11, name: "Slice of Life" },
  { id: 12, name: "Sports" },
  { id: 13, name: "Supernatural" },
  { id: 14, name: "Thriller" },
];

export const formatsList = [
  { value: "TV", label: "TV" },
  { value: "TV_SHORT", label: "TV Short" },
  { value: "MOVIE", label: "Movie" },
  { value: "SPECIAL", label: "Special" },
  { value: "OVA", label: "OVA" },
  { value: "ONA", label: "ONA" },
  { value: "MUSIC", label: "Music" },
  { value: "MANGA", label: "Manga" },
  { value: "NOVEL", label: "Novel" },
  { value: "ONE_SHOT", label: "One Shot" },
];

export const years = [];
const currentYear = new Date().getFullYear();

for (let i = 1960; i <= currentYear; i++) {
  years.push(i);
}
