const baseUrl = './db.json'

const getAll = () => {
  const init = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const request = fetch(baseUrl, init);
  return request.then((response) => response.json());
};

const faqObject = { getAll }

export default faqObject;