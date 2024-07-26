import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import CoachHome from "./Components/Coach/CoachHome";
import CoachLogin from "./Components/Coach/CoachLogin";
import CoachNavbar from "./Components/Coach/CoachNavbar";
import CoachSchedules from "./Components/Coach/CoachSchedules";
import CoachSignup from "./Components/Coach/CoachSignup";
import CoachViewProfile from "./Components/Coach/CoachViewProfile";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import UserHome from "./Components/User/UserHome";
import UserLogin from "./Components/User/UserLogin";
import UserNavbar from "./Components/User/UserNavbar";
import UserSchedule from "./Components/User/UserSchedule";
import UserSignup from "./Components/User/UserSignup";
import UserViewProfile from "./Components/User/UserViewProfile";

function App() {
  const location = useLocation();
  const isCoachRoute = location.pathname.startsWith("/coachhome");
  const isUserRoute = location.pathname.startsWith("/user");

  return (
    <div className="bg-slate-100 min-h-screen max-w-screen-lg mx-auto flex flex-col">
      {isCoachRoute ? (
        <CoachNavbar />
      ) : isUserRoute ? (
        <UserNavbar />
      ) : (
        <Header />
      )}
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="coachsignup" element={<CoachSignup />} />
          <Route path="coachlogin" element={<CoachLogin />} />
          <Route path="usersignup" element={<UserSignup />} />
          <Route path="userlogin" element={<UserLogin />} />
          <Route path="coachhome/:coachId" element={<CoachHome />} />

          <Route path="coachhome" element={<CoachHome />}>
            <Route path="coachschedules" element={<CoachSchedules />} />
            <Route path="coachviewprofile" element={<CoachViewProfile />} />
          </Route>

          <Route path="userhome/:userId" element={<UserHome />}>
            <Route path="userviewprofile" element={<UserViewProfile />} />
            <Route path="userschedules" element={<UserSchedule />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
