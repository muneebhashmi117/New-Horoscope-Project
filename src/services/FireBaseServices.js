import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import { SCREEN } from '../enums';

// ===================== Sign Up =====================
export const SignupWithEmailAndPassword = async (email, password) => {
  try {
    const UserCredentials = await auth().createUserWithEmailAndPassword(email, password);
    return { user: UserCredentials.user, error: null };
  } catch (err) {
    return { user: null, error: err.message };
  }
};

// ===================== Sign In =====================
export const SigninWithEmailAndPassword = async (email, password) => {
  try {
    const UserCredentials = await auth().signInWithEmailAndPassword(email, password);
    return { user: UserCredentials.user, error: null };
  } catch (err) {
    return { user: null, error: err.message };
  }
};

// ===================== Logout =====================
export const logoutUser = async () => {
  try {
    const user = auth().currentUser;
    if (!user) {
      return { success: false, error: 'No user is currently signed in' };
    }
    await auth().signOut();
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// ===================== Store Data =====================
export const StoreData = async (collectionName, data) => {
  try {
    await firestore()
      .collection(collectionName)
      .add({
        ...data,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
    return { success: true };
  } catch (error) {
    console.log('Firestore Error:', error);
    return { success: false, error };
  }
};

// ===================== Get Data =====================
export const GetData = async (collectionName, documentname) => {
  try {
    const documentSnapShot = await firestore()
      .collection(collectionName)
      .doc(documentname)
      .get();

    if (documentSnapShot.exists) {
      return documentSnapShot.data();
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching data: ', error);
    return null;
  }
};

// ===================== Delete Order =====================
export const DeleteOrder = async (id) => {
  try {
    await firestore().collection('Orders').doc(id).delete();
    console.log('Order deleted successfully');
  } catch (err) {
    console.error('Error deleting order:', err);
  }
};


//================================================================================
export const fetchRestaurantsByCategory = async category => {
  try {
    const snapshot = await firestore()
      .collection('Restaurants')
      .doc(category)
      .collection('New Resturant')
      .get();

    const list = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    return list;
  } catch (error) {
    console.error('🔥 Error fetching restaurants:', error);
    return [];
  }
};

//===================================================================================
// ===================== Listen to Restaurants By Category (Realtime) =====================
export const listenRestaurantsByCategory = (category, callback) => {
  return firestore()
    .collection('Restaurants')
    .doc(category)
    .collection('New Resturant')
    .onSnapshot(snapshot => {
      const list = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
      callback(list);
    }, error => {
      console.error("🔥 Realtime fetch error:", error);
      callback([]);
    });
};

