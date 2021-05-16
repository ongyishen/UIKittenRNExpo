import * as eva from "@eva-design/eva";

import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";

import { AppNavigator } from "./navigation/AppNavigator";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { default as theme } from "./theme.json"; // <-- Import app theme
import { ThemeContext } from "./theme-context";

export default () => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </ApplicationProvider>
      </ThemeContext.Provider>
      {/* <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </ApplicationProvider> */}
      {/* <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </ApplicationProvider> */}
    </>
  );
};
