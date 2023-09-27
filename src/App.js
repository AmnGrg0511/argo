import "./App.css";
import { auth } from "./fire/firebase";
import { RoutersPage } from "./pages/RoutersPage";
import { useAuthState } from "react-firebase-hooks/auth";
import { Loader } from "./Components/common/Loader";
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

          if (user) {
            return <Dashboard user={user} />;
          }

          return <RoutersPage />;
        })()}
      </BrowserRouter>
    </div>
  );
}

export default App;
