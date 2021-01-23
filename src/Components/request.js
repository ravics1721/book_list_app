const uri =
  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json";

const getAllBook = () => {
  return fetch(uri, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const Request = {
  getAllBook: getAllBook,
};

export default Request;
