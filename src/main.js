const Yelp = require("./helpers/yelp");
const readlineSync = require("readline-sync");

let location = "Alpharetta";
let term = "icecream";
let numberOfBusiness = 5;
let sortOf = "rating";
let numberOfReviews = 2;

const sayGoodBye = () => {
  console.log(`\nThanks For Using My APP`);
  console.log(`Come Back SOON`);
};

const findInYelp = async () => {
  const response = await Yelp.businessesSearch(
    location,
    term,
    numberOfBusiness,
    sortOf
  );
  const businesses = response.businesses;

  let reviewResponse;

  for (let i = 0; i < numberOfBusiness; i++) {
    console.log(
      `\n>> Top ${numberOfBusiness} ${term.toUpperCase()} in ${location.toUpperCase()}. --> Number ${i +
        1} :\n`
    );
    console.log(`Business Name: ${businesses[i].name}`);
    console.log(
      `Address: ${businesses[i].location.address1}, ${businesses[i].location.city}`
    );
    console.log(`Number of Reviews: ${businesses[i].review_count}`);
    console.log(`Rating: ${businesses[i].rating}`);

    reviewResponse = await Yelp.businessesReview(businesses[i].id);
    for (let j = 0; j < numberOfReviews; j++) {
      if (reviewResponse.reviews[j]) {
        console.log(`\nReview ${j + 1}: ${reviewResponse.reviews[j].text}`);
        console.log(`Author: ${reviewResponse.reviews[j].user.name}`);
      }
    }

    if (
      i != numberOfBusiness - 1 &&
      !readlineSync.keyInYN("\nDo You Want to continue? ")
    ) {
      break;
    }
  }

  sayGoodBye();
};

const setupSearch = setting => {
  if (setting && setting.location) {
    location = setting.location;
  }

  if (setting && setting.term) {
    term = setting.term;
  }

  if (setting && setting.numberOfBusiness) {
    numberOfBusiness = setting.numberOfBusiness;
  }

  if (setting && setting.sortOf) {
    sortOf = setting.sortOf;
  }

  if (setting && setting.numberOfReviews) {
    numberOfReviews = setting.numberOfReviews;
  }
};

module.exports = {
  findInYelp,
  setupSearch
};
