import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import Streaks from "./pages/Streaks/Streaks";
import Questions from "./pages/Questions/Questions";
import Layout from "./components/Layout/Layout";

const mockData = [
  { id: 1, company_name: "Amazon", job_role: "AWS Engineer" },
  { id: 2, company_name: "Microsoft", job_role: "MS Engineer" },
  { id: 3, company_name: "Apple", job_role: "iOS Engineer" },
  { id: 4, company_name: "Samsung", job_role: "Android Engineer" },
  { id: 5, company_name: "OnePlus", job_role: "Android Engineer" },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <div>
      <Header
        setSearchTerm={setSearchTerm}
        setSelectedCompany={setSelectedCompany}
        searchTerm={searchTerm}
        mockData={mockData}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard selectedCompany={selectedCompany} />
          }
        />
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
