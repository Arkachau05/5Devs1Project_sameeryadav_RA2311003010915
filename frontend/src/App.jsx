
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/home/Main";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import '@fontsource/inter'; // Defaults to weight 400

function App() {
	const { authUser } = useAuthContext();
	return (
		<div>
			<Routes>
				<Route path='/*' element={authUser ? <Main /> : <Navigate to={`/login`} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
