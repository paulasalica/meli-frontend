import httpClient from 'axios';

const API_ENDPOINT = 'https://test-meli-backend.herokuapp.com/api/items'

export const getAllProducts = async (searchKey) => {
  return httpClient.get(`${API_ENDPOINT}`, {
    params: {
      q: searchKey,
    }
  });
}

export const getProductDetails = async (itemId) => {
  console.log(`${API_ENDPOINT}/${itemId}`)
  return httpClient.get(`${API_ENDPOINT}/${itemId}`);
}