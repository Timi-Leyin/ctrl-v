import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Onboarding from "./components/onboarding/Onboarding";
import Home from "./screens/Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigation/Navigation";
import colors from "./utils/colors";

const Loading = () => {
  <View>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>;
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [onboardingViewed, setOnboardingViewed] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");
      if (value !== null) {
        setOnboardingViewed(true);
      }
    } catch (err) {
      console.log("Error @checkOnboarding", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }),
    [loading];

  return (
    <NavigationContainer theme={{ colors: { background: colors.background } }}>
      {loading ? (
        <Loading />
      ) : onboardingViewed ? (
        <Navigator />
      ) : (
        <Onboarding />
      )}
      <StatusBar backgroundColor="rgba(255,255,255,0.6)" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
