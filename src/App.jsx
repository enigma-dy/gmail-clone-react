import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import PrimaryMail from "./pages/Mail/Primary/PrimaryMail";
// import SignIn from "./pages/Login/SignIn/EmailSignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PrimaryMail />} />
        </Route>
        {/* <Route path="/login" element="">
          <Route index element={<SignIn />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
