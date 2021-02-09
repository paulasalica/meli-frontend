import httpClient from 'axios';

const API_ENDPOINT = 'https://test-meli-backend.herokuapp.com/api/items';
const API_ENDPOINT_LOCAL = 'http://localhost:5000/api/items';

export const getAllProducts = async (searchKey) => {
    // return new Promise((resolve, reject) => {
    //     fetch(API_ENDPOINT + '/q=' + searchKey)
    //     .then(res => res.json())
    //     .then(data => {
    //         resolve(data);
    //     })
    // })

    return httpClient.get(`${API_ENDPOINT_LOCAL}`, {
        params: {
          q: searchKey,
        }
      });
}