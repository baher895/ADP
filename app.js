const Yelp = require("./src/controller/yelp");

const NUMBER_OF_REVIEWS = 2;

(async () => {
  const response = await Yelp.businessesSearch("Alpharetta", "icecream", 5, "rating");
  const businesses = response.businesses;

  let reviewResponse;
  for (let i = 0; i < 5; i++) {
    console.log(`\n>> Best Ice Cream in Alpharetta, Number ${i+1} :\n`);
    console.log(`Business Name: ${businesses[i].name}`);
    console.log(`Address: ${businesses[i].location.address1}, ${businesses[i].location.city}`);
    console.log(`Number of Reviews: ${businesses[i].review_count}`);
    console.log(`Rating: ${businesses[i].rating}`);

    reviewResponse = await Yelp.businessesReview(businesses[i].id);
    for (let j = 0; j < NUMBER_OF_REVIEWS; j++) {
      if (reviewResponse.reviews[j]) {
        console.log(`\nReview ${j+1}: ${reviewResponse.reviews[j].text}`);
        console.log(`Author: ${reviewResponse.reviews[j].user.name}`);
      }
    }
    
    console.log(`. . . . . . . . . . . . . . . . . . . . . . . . . . . `);
  }
})();
