import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.upbit.com/v1/",
  params: { isDetails: "false" },
  headers: { Accept: "application/json" },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
