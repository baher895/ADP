const { findInYelp, setupSearch } = require("./src/main");

setupSearch({
  location: "alpharetta",
  term: "icecream",
  numberOfBusiness: 5,
  sortOf: "rating",
  numberOfReviews: 3
});

findInYelp();
