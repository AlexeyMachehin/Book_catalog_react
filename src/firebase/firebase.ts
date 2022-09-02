import { SortingType } from './../interfaces/Book';
import { Book } from "../interfaces/Book"; 
import { initializeApp } from "firebase/app";
import { DocumentData, DocumentReference, getFirestore, OrderByDirection } from "firebase/firestore";
import {
  collection,
  getDocs,
  getDoc,
  orderBy,
  doc,
  query,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { fromDto, toDto } from '../mapper/mapper';
const firebaseConfig = {
  apiKey: "AIzaSyAlIuYGStK_84_kxcOKl7DCFDK5hwaX9mo",
  authDomain: "book-catalog-26495.firebaseapp.com",
  projectId: "book-catalog-26495",
  storageBucket: "book-catalog-26495.appspot.com",
  messagingSenderId: "577399766434",
  appId: "1:577399766434:web:3361473f93deb164ad86fb",
  measurementId: "G-Q2B6MC9PKL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getSortDocs(sortingType: SortingType, directionSort: OrderByDirection): Promise<Array<Book>> {
  let arr: Book[] = [];
  const documents = await getDocs(
    query(collection(db, "books"),
     orderBy(sortingType, directionSort)
     )
  );

  documents.docs.forEach((doc) => {
    arr.push(fromDto(doc.data(), doc.id));
  });

  return arr;
}

export async function getAllDocs(): Promise<Array<Book>> {
  let arr: Book[] = [];
  const documents = await getDocs(collection(db, "books"));

  documents.docs.forEach((doc) => {
    arr.push(fromDto(doc.data(), doc.id));
  });
  return arr;
}

export async function setDoc(value: Book): Promise<string> {
  const docRef = await addDoc(collection(db, "books"), value);
  return docRef.id;
}

export async function deleteBook(id: string): Promise<void> {
  await deleteDoc(doc(db, "books", id));
}

export async function getDocById(id: string): Promise<Book> {
  const document = await getDoc(doc(db, "books", id));
  return fromDto(document.data(), id);
}

export async function updateDocById(updatedBook: Book, id: string): Promise<void> {
  await updateDoc(doc(db, "books", id), toDto(updatedBook));
}
