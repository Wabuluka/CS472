class Exercise3 {
  #movies = new Map();
  //key is the genre: string, value is array of movies
  // example: { thriller: [{ id: '1', title: 'The American'}, { id: '2', title: 'Arcadian'}] }
  add_genre(genre) {
    // add genre if genre does not exist
    // return true if the genre is added successfully, false otherwise
    if (!this.#movies.has(genre)) {
      this.#movies.set(genre, []);
      return true;
    }
    return false;
  }
  add_movie_in_genre(genre, new_movie) {
    // add movie if movie id does not exist
    // return true if the movie is added successfully, false otherwise
    if (!this.#movies.has(genre)) return false;
    const genres = this.#movies.get(genre);
    if (genres.some((movie) => movie.id === new_movie.id)) return false;
    genres.push(new_movie);
    return true;
  }
  update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
    // update a movie within a certain genre
    // return true if the movie's title is updated successfully, false otherwise
    if (!this.#movies.has(genre)) return false;
    const genres = this.#movies.get(genre);
    const movie = genres.find((m) => m.id === movie_id);
    if (!movie) return false;
    movie.title = new_title;
    return true;
  }
  delete_movie_by_genre_and_movie_id(genre, movie_id) {
    // delete movie
    // return true if the movie is delete successfully, false otherwise
    if (!this.#movies.has(genre)) return false;
    const genres = this.#movies.get(genre);
    const index = genres.findIndex((m) => m.id === movie_id);
    genres.splice(index, 1);
    return true;
  }
  get_movie_title_by_id(genre, movie_id) {
    // return the movie title
    if (!this.#movies.has(genre)) return "";
    const genres = this.#movies.get(genre);
    const movie = genres.find((m) => m.id === movie_id);
    return movie;
  }
}
const ex = new Exercise3();
console.log(ex.add_genre("thriller"));
console.log(ex.add_genre("thriller"));

console.log(
  ex.add_movie_in_genre("thriller", { id: "1", title: "The American" })
);
console.log(ex.add_movie_in_genre("thriller", { id: "2", title: "Arcadian" })); // true
console.log(
  ex.add_movie_in_genre("thriller", { id: "1", title: "Duplicated Movie" })
);

console.log(
  ex.update_movie_title_by_genre_and_movie_id(
    "thriller",
    "1",
    "The American Updated"
  )
);
console.log(ex.get_movie_title_by_id("thriller", "1"));

console.log(ex.delete_movie_by_genre_and_movie_id("thriller", "2"));
console.log(ex.get_movie_title_by_id("thriller", "2"));
