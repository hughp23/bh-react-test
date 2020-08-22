import axios from "axios";

const bearerToken = "i65w3nuhclly64oo1l0raktfw9wratrt";
const BASE_URL = "http://pr-2124.bhtesting.co.uk/rest/V1/products";
// const header = `Authorization: Bearer ${bearerToken}`;
axios.defaults.headers.common["Authorization"] = bearerToken;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
const config = {
  headers: {
    Authorization: `Bearer ${bearerToken}`,
    "Content-Type": "application/x-www-form-urlencoded"
  }
};

// export const getProductData = async SKU => {
//   await axios
//     .get(`${BASE_URL}`, {
//       headers: { Authorization: `${bearerToken}` }
//     })
//     .then(
//       response => {
//         console.log(response, "response");
//         const responseRes = response.data;
//         console.log(responseRes, "responseRes");
//       }
//       //   ,
//       //   error => {
//       //     const status = error.response.status;
//       //     console.log(status, "status");
//       //   }
//     );
//   //   console.log(data, "data");
//   //   return data;
// };

export const getProductData = async SKU => {
  await axios.get(`${BASE_URL}?SKU=BH2024`, config).then(response => {
    console.log(response.data);
  });
};
