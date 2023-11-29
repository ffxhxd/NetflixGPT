import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/Redux/userSlice";
import { LOGO_URL, USER_ICON_URL } from "../Utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //clean up ... this will be called when component will unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full px-8 py-2 flex align-middle justify-between ">
      <img className="relative z-40 w-48" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex align-center justify-center h-2 mt-5 z-50">
          <img className="w-8 h-8" alt="userIcon" src={USER_ICON_URL} />
          <button
            onClick={handleSignOut}
            className="h-1 p-2 text-xl ml-2 font-bold text-white "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
