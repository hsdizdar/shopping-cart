export interface Shop {
  id: string;
  name: string;
  sortOrder: number;
}

export function getShops(): Promise<Shop[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        fetch('./shops.json')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            console.error('Error during fetching shops:', error);
            reject(error);
          });
      } catch (error) {
        console.error('Error during getting shops:', error);
        reject(error);
      }
    }, 300);
  });
}
