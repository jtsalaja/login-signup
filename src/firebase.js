
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrQelXgDdu3QW2BxSO5Kxf9xOsXbfl6Iw",
  authDomain: "instagrma-clone-86f66.firebaseapp.com",
  projectId: "instagrma-clone-86f66",
  storageBucket: "instagrma-clone-86f66.appspot.com",
  messagingSenderId: "908847790152",
  appId: "1:908847790152:web:d1eb8ffba5503c1111c07d"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();