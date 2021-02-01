"use strict";

const axios = require("axios");

module.exports.RandomNumberAPI = async event => {
  const response = await axios.get(
    "http://www.randomnumberapi.com/api/v1.0/random?min=10000&max=99999&count=1"
  );

  const ticket = { ticketNumber: response.data.toString() };
  return ticket;
};
