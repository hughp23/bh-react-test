export const handleSearch = (products, productValue, sort = "") => {
  //sort and filters are most likely performed server side but this is just to show what can be done client side
  //pull back products depending on input and filter methods chosen
  //get all products if no input value entered and set state with all
  let sortedProducts;
  let filteredProducts;
  if (productValue === "") {
    if (sort !== "") {
      sortedProducts = sortProducts(products, sort);
      return sortedProducts;
    } else {
      return products;
    }
  } else {
    filteredProducts = products.filter(product => {
      return product.sku
        .trim()
        .toLowerCase()
        .includes(productValue.trim().toLowerCase());
    });
    if (sort !== "") {
      sortedProducts = sortProducts(filteredProducts, sort);
      return sortedProducts;
    } else {
      return filteredProducts;
    }
  }
};

const sortProducts = (products, sort) => {
  let sortedProducts;
  if (sort === "AZ&ASC") {
    sortedProducts = products.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    return sortedProducts;
  } else if (sort === "AZ&DESC") {
    sortedProducts = products.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    return sortedProducts;
  } else if (sort === "Price&ASC") {
    sortedProducts = products.sort((a, b) => {
      return parseFloat(a.price) - parseFloat(b.price);
    });
    return sortedProducts;
  } else if (sort === "Price&DESC") {
    sortedProducts = products.sort((a, b) => {
      return parseFloat(b.price) - parseFloat(a.price);
    });
    return sortedProducts;
  }
};
