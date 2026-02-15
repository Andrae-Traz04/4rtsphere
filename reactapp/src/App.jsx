import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import References from "./components/References";
import "./index.css";

function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState("login");
  const [selectedProfile, setSelectedProfile] = useState(null);

  if (!user) {
    return view === "login" ? (
      <Login onLogin={setUser} onSwitch={() => setView("register")} />
    ) : (
      <Register onRegister={setUser} onSwitch={() => setView("login")} />
    );
  }

  return (
    <div>
  <header className="top-bar">
    <h1 onClick={() => setView("feed")}>ArtSphere</h1>
      <div>
        <button onClick={() => setView("feed")}>Feed</button>
        <button onClick={() => setView("profile")}>Profile</button>
        <button onClick={() => setView("references")}>References</button> 
      </div>
  </header>


      {view === "feed" && (
        <Feed onViewProfile={(profile) => {
          setSelectedProfile(profile);
          setView("viewProfile");
        }} />
      )}

      {view === "profile" && <Profile user={user} />}

      {view === "viewProfile" && (
        <Profile user={selectedProfile} isPublic />
      )}

      {view === "references" && <References />}

    </div>
  );
}

export default App;
