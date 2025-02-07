import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Streaks from "./pages/Streaks/Streaks";
import Questions from "./pages/Questions/Questions";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/streaks" element={<Streaks />} />
        <Route path="/questions" element={<Questions />} />

        <Route
          path="*"
          element={
            <Layout>
              <h2>Page Not Found</h2>
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
