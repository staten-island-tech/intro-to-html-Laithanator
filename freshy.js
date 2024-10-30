const movies = [
  { name: "Inception", reviews: [8, 9, 10, 9, 7] },
  { name: "The Matrix", reviews: [10, 9, 9, 8, 9] },
  { name: "Interstellar", reviews: [10, 8, 9, 7, 9] },
  { name: "The Godfather", reviews: [9, 10, 10, 9, 10] },
  { name: "A Movie with No Reviews", reviews: [] },
];
let averageList = [];
function averageReviews() {
  averageList.push(
    movies.forEach((movie) => {
      for (let i = 0; i <= movie.reviews.length; i++) {
        let reviewTotal = 0;
        reviewTotal += movie.reviews[i];
      }
    }, reviewTotal / movie.reviews.length)
  );
}
averageReviews();
console.log(averageList);
