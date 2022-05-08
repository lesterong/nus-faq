const baseUrl = 'https://cs-faq-a150f-default-rtdb.asia-southeast1.firebasedatabase.app/';

// eslint-disable-next-line no-unused-vars
const getAll = (major) => {
  const init = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const request = fetch('../main.json', init);
  return request.then((response) => response.json());
};

const create = (faq, major) => {
  const init = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(faq),
  };
  const request = fetch(`${baseUrl}contribute/${major}.json`, init);
  return request.then((response) => response.json());
};

const faqObject = { getAll, create };

export default faqObject;
