import "./App.css";
import { auth } from "./firebase";
import { Routes } from "./pages/Routes";
import { useAuthState } from "react-firebase-hooks/auth";
import { Loader } from "./components/common/Loader";
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="App">
      <BrowserRouter>
        {(() => {
          if (loading) return <Loader />;
          if (error) return error;
          if (user) return <Dashboard user={user} />;
          return <Routes />;
        })()}
      </BrowserRouter>
    </div>
  );
}

export default App;
