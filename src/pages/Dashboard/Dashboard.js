import React from "react";
import Layout from "../../components/Layout/Layout";

const Dashboard = ({ selectedCompany }) => {
  return (
    <Layout>
      <h2>Dashboard</h2>
      {selectedCompany ? (
        <div>
          <h3>{selectedCompany.company_name}</h3>
          <p>Job Role: {selectedCompany.job_role}</p>
        </div>
      ) : (
        <p>Please select a company to view job roles.</p>
      )}
    </Layout>
  );
};

export default Dashboard;
