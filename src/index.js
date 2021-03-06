import { StyledEngineProvider } from "@material-ui/styled-engine";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthState from "./hoc/AuthState";
import BasketState from "./hoc/BasketState";
import store from "./store";

const application = (
	<Provider store={store}>
		<BrowserRouter>
			<StyledEngineProvider injectFirst>
				<AuthState>
					<BasketState>
						<App />
					</BasketState>
				</AuthState>
			</StyledEngineProvider>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(application, document.getElementById("root"));
