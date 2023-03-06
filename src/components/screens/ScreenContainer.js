import * as React from "react";
import { View, ActivityIndicator } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";

import UserAuthenticatedBottomTabNavigation from "./navigation/UserAuthenticatedBottomTabNavigation";
import {UserNotAuthenticatedStackNavigator} from "./navigation/UserNotAuthenticatedStackNavigator";


export const AuthenticateUserContext = React.createContext({});

const AuthenticateUserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <AuthenticateUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticateUserContext.Provider>
  );
};

const RootNavigator = () => {
  const { user, setUser } = React.useContext(AuthenticateUserContext);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
      (await authenticatedUser) ? setUser(authenticatedUser) : setUser(null);
      setLoading(false);
    });
    return () => unSubscribe();
  }, [user]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      {!user ? (
        <UserNotAuthenticatedStackNavigator />
      ) : (
        <UserAuthenticatedBottomTabNavigation />
      )}
    </>
  );
};

export default function ScreenContainer() {
  return (
    <AuthenticateUserContextProvider>
      <RootNavigator />
    </AuthenticateUserContextProvider>
  );
}
