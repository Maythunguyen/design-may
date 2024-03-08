
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCPMsaT5U137ye5HrBhVc4TJVERyQzFb7Y",
  authDomain: "design-may.firebaseapp.com",
  databaseURL: "https://design-may-default-rtdb.firebaseio.com",

};

const firebaseApp = initializeApp(firebaseConfig);
const base = getDatabase(firebaseApp);

export { firebaseApp, base };