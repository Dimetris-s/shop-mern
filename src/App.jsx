import { CssBaseline } from "@material-ui/core";
import { useTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import AppRouter from "./components/AppRouter";
import Layout from "./components/Layout";

const App = () => {
    const theme = useTheme();
    console.log(theme);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
                <AppRouter />
            </Layout>
        </ThemeProvider>
    );
};

export default App;
