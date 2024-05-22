import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkkZ_5imMEWr1qUrsO7oTl6C_3mdw0jX4",
  authDomain: "bakerymern.firebaseapp.com",
  projectId: "bakerymern",
  storageBucket: "bakerymern.appspot.com",
  messagingSenderId: "176170312197",
  appId: "1:176170312197:web:2aae8de6e5b95979fcb26c"
};

const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
