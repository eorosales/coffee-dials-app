import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export const coffeesLoader = async () => {
  const data = await getDocs(collection(db, "coffees"));
  const coffees = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return { coffees };
};

export const dialsLoader = async () => {
  const data = await getDocs(collection(db, "dials"));
  const dials = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return { dials };
};
