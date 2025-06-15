import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./components/Body.jsx";
import LoginPage from "./components/LoginPage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

export default function App() {
  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
