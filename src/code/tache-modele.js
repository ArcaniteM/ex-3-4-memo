import { bdFirestore, collUtil, collTaches } from './init';
import { getDocs, query, orderBy, collection, addDoc, Timestamp, getDoc, deleteDoc, updateDoc, doc } from "firebase/firestore"; 

//order by date on click
export async function orderDate(uid, orderState) {
  const orderCriteria = orderState ? "desc" : "asc"
  return getDocs(query(collection(bdFirestore, collUtil, uid, collTaches), 
      orderBy("date", orderCriteria))).then(
        od  => od.docs.map(doc => ({id: doc.id, ...doc.data()}))
      );
}

//order by title on click
export async function orderTitle(uid, orderState) {
  const orderCriteria = orderState ? "asc" : "desc"
  return getDocs(query(collection(bdFirestore, collUtil, uid, collTaches), 
      orderBy("texte", orderCriteria))).then(
        ot  => ot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      );
}

/**
 * Créer une nouvelle tâche pour l'utilisateur connecté
 * @param {string} uid identifiant d'utilisateur Firebase 
 * @param {Object} tache document à ajouter aux tâches de l'utilisateur
 * @returns {Promise<null>} Promesse sans paramètre
 */
export async function creer(uid, tache) {
  // On ajoute la propriété 'date' à l'objet représentant la tâche en prenant la 
  // date du serveur Firestore.
  tache.date = Timestamp.fromDate(new Date());
  let collRef = collection(bdFirestore, collUtil, uid, collTaches);
  let docRef = await addDoc(collRef, tache);
  let nouveauDoc = await getDoc(docRef);
  return {id: nouveauDoc.id, ...nouveauDoc.data()};
}

/**
 * Obtenir toutes les tâches d'un utilisateur
 * @param {string} uid identifiant d'utilisateur Firebase 
 * @returns {Promise<any[]>} Promesse avec le tableau des tâches
 */
export async function lireTout(uid) {
  return getDocs(collection(bdFirestore, collUtil, uid, collTaches)).then(
    qs  => qs.docs.map(doc => ({id: doc.id, ...doc.data()})) 
  );
}

export async function supprimer(uid, idTache) {
  let refDoc = doc(bdFirestore, collUtil, uid, collTaches, idTache);
  return await deleteDoc(refDoc)
}