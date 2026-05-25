import Navbar from "../components/Navbar";

import withAuth from "../hoc/withAuth";

const UserDashboard = () => {

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="top-banner user-banner">

          <div>

            <h2>
              User Dashboard
            </h2>

            <p>
              Welcome to your personal
              workspace dashboard.
            </p>

          </div>

        </div>

        <div className="card-grid">

          <div className="dashboard-card">

            <h3>
              My Tasks
            </h3>

            <p>
              8
            </p>

          </div>

          <div className="dashboard-card">

            <h3>
              Completed
            </h3>

            <p>
              14
            </p>

          </div>

          <div className="dashboard-card">

            <h3>
              Notifications
            </h3>

            <p>
              6
            </p>

          </div>

          <div className="dashboard-card">

            <h3>
              Attendance
            </h3>

            <p>
              92%
            </p>

          </div>

        </div>

        <div className="info-section">

          <h2>
            Recent Activities
          </h2>

          <div className="activity-box">

            <p>
              • Completed assigned task
            </p>

            <p>
              • Uploaded weekly report
            </p>

            <p>
              • Updated profile information
            </p>

            <p>
              • Joined project discussion
            </p>

            <p>
              • Submitted task review
            </p>

          </div>

        </div>

        <div className="info-section">

          <h2>
            My Profile
          </h2>

          <div className="profile-box">

            <p>
              <strong>
                Name:
              </strong>
              User
            </p>

            <p>
              <strong>
                Email:
              </strong>
              user@gmail.com
            </p>

            <p>
              <strong>
                Role:
              </strong>
              User
            </p>

            <p>
              <strong>
                Department:
              </strong>
              Development
            </p>

          </div>

        </div>

      </div>
    </>
  );
};

export default withAuth(
  UserDashboard
);