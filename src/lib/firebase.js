[object Object], { initializeApp } ,[object Object], ,[object Object],;
,[object Object], { getAuth, ,[object Object],, signInWithPopup, signOut ,[object Object], firebaseSignOut, onAuthStateChanged } ,[object Object], ,[object Object],;
,[object Object], { getFirestore, doc, setDoc, getDoc, serverTimestamp } ,[object Object], ,[object Object],;

,[object Object], firebaseConfig = {
  ,[object Object],: process.,[object Object],.,[object Object],,
  ,[object Object],: process.,[object Object],.,[object Object],,
  ,[object Object],: process.,[object Object],.,[object Object],,
  ,[object Object],: process.,[object Object],.,[object Object],,
  ,[object Object],: process.,[object Object],.,[object Object],,
  ,[object Object],: process.,[object Object],.,[object Object],,
};

,[object Object], app = ,[object Object],(firebaseConfig);
,[object Object], ,[object Object], auth = ,[object Object],(app);
,[object Object], ,[object Object], db = ,[object Object],(app);
,[object Object], ,[object Object], googleProvider = ,[object Object], ,[object Object],();

,[object Object], ,[object Object], ,[object Object], = ,[object Object], (,[object Object],) => {
  ,[object Object], {
    ,[object Object], result = ,[object Object], ,[object Object],(auth, googleProvider);
    ,[object Object], ,[object Object],(,[object Object],(db, ,[object Object],, result.,[object Object],.,[object Object],), {
      ,[object Object],: result.,[object Object],.,[object Object],,
      ,[object Object],: result.,[object Object],.,[object Object],,
      ,[object Object],: ,[object Object],(),
    }, { ,[object Object],: ,[object Object], });
    ,[object Object], result.,[object Object],;
  } ,[object Object], (error) {
    ,[object Object],.,[object Object],(,[object Object],, error);
    ,[object Object], error;
  }
};

,[object Object], ,[object Object], ,[object Object], = (,[object Object],) => ,[object Object],(auth);

,[object Object], ,[object Object], ,[object Object], = ,[object Object], (,[object Object],) => {
  ,[object Object],
  ,[object Object], ,[object Object],(,[object Object],(db, ,[object Object],, userId, ,[object Object],, provider), {
    ,[object Object],: encryptedKey,
    ,[object Object],: ,[object Object],(),
  });
};

,[object Object], { onAuthStateChanged, getDoc, doc };
