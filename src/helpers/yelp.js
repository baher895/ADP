const axios = require("axios");

const setHeaders = () => {
  const header = {
    headers: {
      Authorization: `Bearer ${process.env.YELP_APIKEY}`
    }
  };

  return header;
};

const businessesSearch = async (
  location = null,
  term = null,
  limit = 1,
  sort_by = 'best_match'
) => {
  try {
    if (!location) {
      const error = new Error(`Please specify a location`);
      throw error;
    }

    let url = `https://api.yelp.com/v3/businesses/search?location=${location}`;
    url += term ? `&term=${term}` : ``;
    url += `&sort_by=${sort_by}`;
    url += `&limit=${limit}`;

    const response = await axios.get(url, setHeaders());

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const businessesReview = async (businessId = null) => {
  try {
    if (!businessId) {
      const error = new Error(`Please specify a business`);
      throw error;
    }

    let url = `https://api.yelp.com/v3/businesses/${businessId}/reviews`;
    const response = await axios.get(url, setHeaders());

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  businessesSearch,
  businessesReview
};
