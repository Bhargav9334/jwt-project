import Navbar from "../components/Navbar";

import {
  useEffect,
  useState
} from "react";

import API from "../services/api";

const AdminDashboard = () => {

  const [sales, setSales] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {

    try {

      const res = await API.get(
        "/sales/report"
      );

      setSales(res.data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="top-banner admin-banner">

          <div>

            <h2>
              Admin Dashboard
            </h2>

            <p>
              Welcome Admin! You have
              full system access.
            </p>

          </div>

        </div>

        <div className="card-grid">

          <div className="dashboard-card">

            <h3>
              Total Users
            </h3>

            <p>
              120
            </p>

          </div>

          <div className="dashboard-card">

            <h3>
              Total Revenue
            </h3>

            <p>
              ₹ 24,000
            </p>

          </div>

          <div className="dashboard-card">

            <h3>
              Reports
            </h3>

            <p>
              18
            </p>

          </div>

          {
            loading ? (

              <h2>
                Loading...
              </h2>

            ) : (

              sales.map(
                (item, index) => (

                  <div
                    className="dashboard-card"
                    key={index}
                  >

                    <h3>
                      {item._id}
                    </h3>

                    <p>
                      ₹ {item.totalSales}
                    </p>

                  </div>

                )
              )

            )
          }

        </div>

        <div className="info-section">

          <h2>
            Admin Actions
          </h2>

          <div className="action-list">

            <div className="action-card">

              <h3>
                Manage Users
              </h3>

              <p>
                Add, edit and remove users
              </p>

            </div>

            <div className="action-card">

              <h3>
                System Settings
              </h3>

              <p>
                Configure system preferences
              </p>

            </div>

            <div className="action-card">

              <h3>
                Security Logs
              </h3>

              <p>
                Monitor platform activity
              </p>

            </div>

          </div>

        </div>

        <div className="info-section">

          <h2>
            Admin Information
          </h2>

          <div className="profile-box">

            <p>
              <strong>Name:</strong>
              Admin User
            </p>

            <p>
              <strong>Email:</strong>
              admin@gmail.com
            </p>

            <p>
              <strong>Role:</strong>
              Admin
            </p>

          </div>

        </div>

      </div>
    </>
  );
};

export default AdminDashboard;