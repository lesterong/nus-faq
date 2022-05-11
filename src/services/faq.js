import { initializeApp } from 'firebase/app';
import {
  getDatabase, ref, get, set, push, orderByChild, query,
} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA3VP-yBrEsOOYOKlhXrsp7KciNJqBVxXw',
  authDomain: 'nus-faq-bdc5d.firebaseapp.com',
  databaseURL: 'https://nus-faq-bdc5d-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'nus-faq-bdc5d',
  storageBucket: 'nus-faq-bdc5d.appspot.com',
  messagingSenderId: '971887297854',
  appId: '1:971887297854:web:a5e1dc333139d59083186f',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const getAll = (major) => (
  get(query(ref(db, `main/${major}`), orderByChild('question')))
);

const createMain = (major, data) => {
  const faqListRef = ref(db, `main/${major}`);
  const newFaqRef = push(faqListRef);
  return set(newFaqRef, data);
};

const create = (faculty, data) => {
  const faqListRef = ref(db, `contribute/${faculty}`);
  const newFaqRef = push(faqListRef);
  return set(newFaqRef, data);
};

const faqObject = { getAll, createMain, create };

export default faqObject;
