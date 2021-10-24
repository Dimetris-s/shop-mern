import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import React from "react";
import AppRouter from "./components/common/AppRouter";
import Layout from "./components/common/Layout";
import { CssBaseline } from "@material-ui/core";

const theme = createTheme();

const App = () => {
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
