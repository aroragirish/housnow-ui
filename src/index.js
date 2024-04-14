import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from 'layouts/admin';
import UserLayout from 'layouts/user';
import { ChakraProvider, IconButton, useColorMode } from '@chakra-ui/react';
import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
	const token = localStorage.getItem("token") || sessionStorage.getItem("token");
	const { colorMode, toggleColorMode } = useColorMode()
	const user = JSON.parse(localStorage.getItem("user"))
	useNavigate()

	return (
		<>
			<ToastContainer />
			<Routes>
				{token && user?.role ? (
					user?.role == 'user' ?
						<Route path="/*" element={<UserLayout />} />
						: user?.role === 'superAdmin' ?
							<Route path="/*" element={<AdminLayout />} />
							: ''
				) : (
					<Route path="/*" element={<AuthLayout />} />
				)}
			</Routes>
			<IconButton
				icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
				aria-label="Toggle Color Mode"
				position="fixed"
				bottom="4"
				right="4"
				size="lg"
				onClick={toggleColorMode}
				zIndex="999"
				bgColor="transparent"
				_hover={{ bgColor: 'rgba(0,0,0,0.1)' }}
			/>
		</>
	);
}

ReactDOM.render(
	<Provider store={store}>
		<ChakraProvider theme={theme}>
			<React.StrictMode>
				<ThemeEditorProvider>
					<Router>
						<App />
					</Router>
				</ThemeEditorProvider>
			</React.StrictMode>
		</ChakraProvider>
	</Provider>
	, document.getElementById('root')
);

