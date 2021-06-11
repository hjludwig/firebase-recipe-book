import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase/config";
import { useAuth } from "./AuthContext";

const UserDataContext = React.createContext();
export const useUserData = () => useContext(UserDataContext);

export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const user = useAuth().currentUser;

    useEffect(() => {
        if (user) {
            db.collection("users")
                .doc(user.uid)
                .onSnapshot(doc => {
                    const data = doc.data();
                    setUserData(data);
                    setIsLoading(false);
                });
        }
    }, [user]);

    return (
        <UserDataContext.Provider value={userData}>
            {!isLoading && children}
        </UserDataContext.Provider>
    );
};
