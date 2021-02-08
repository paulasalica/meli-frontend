import httpClient from 'axios';

const API_ENDPOINT = 'https://test-meli-backend.herokuapp.com/api/items';

export const getAllProducts = async (searchKey) => {
    // return new Promise((resolve, reject) => {
    //     fetch(API_ENDPOINT + '/q=' + searchKey)
    //     .then(res => res.json())
    //     .then(data => {
    //         resolve(data);
    //     })
    // })

    return httpClient.get(`${API_ENDPOINT}`, {
        params: {
          q: searchKey,
        }
      });
}