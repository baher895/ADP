# ADP
This is a Sample (Very Simple) project. Its not even a Back-end Rest or GraohQL.Its just a small program for getting information from third party endpoint (Yelp).
I have decied to make it simple because the on my opinon, the task was as simple as this. it doesnt need any other extention.
I hope you like it.


## Before Start:                      
- Please create a JSON file in the root folder and name it `nodemon.json`. 

**Note :** It will be used to store the environment variable during dev mode. In production, you need to set them in another way.

- Copy and past below JSON object to `nodemon.json` file: 
```
{
  "env": {
    "YELP_APIKEY": "<your Yelp App API Key>"
  }
}
```

- Update fields in JSON file


## How to Run:
In the root folder, in command prompt, run:

- npm install
- npm start

## How to Make Changes:
In `app.js` file, in root folder you can `customize` the search setting by:
```
  setupSearch({
    location: "alpharetta",
    term: "icecream",
    numberOfBusiness: 5,
    sortOf: "rating",
    numberOfReviews: 3
  });
```

- location: Can be any location, you can change it to any city you like.
- term: Can be anything like: `icecream`, `coffee` etc.
- numberOfBusiness: Define the number of businness you need to see! for `Top 5`, put `5` here.
- sortOf: Can be `rating`, `best_match`, `review_count` or `distance`. To get TOP of the list, I go with `rating`, you may try `best_match`
- numberOfReviews: Define how many reviews you would like to see.

# Thank You