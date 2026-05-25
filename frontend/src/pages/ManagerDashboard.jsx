import Navbar from "../components/Navbar";

const ManagerDashboard = () => {

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="top-banner manager-banner">

          <div>

            <h2>
              Manager Dashboard
            </h2>

            <p>
              Manage your teams and
              monitor project activities.
            </p>

          </div>

        </div>

        <div className="card-grid">

          <div className="dashboard-card">

            <h3>
              Projects
            </h3>

            <p>
              12
            </p>

          </div>

          <div className="dashboard-card">

            <h3>
              Teams
            </h3>

            <p>
              5
            </p>

          </div>

          <div className="dashboard-card">

            <h3>
              Pending Tasks
            </h3>

            <p>
              18
            </p>

          </div>

          <div className="dashboard-card">

            <h3>
              Meetings
            </h3>

            <p>
              3 Today
            </p>

          </div>

        </div>

        <div className="info-section">

          <h2>
            Recent Activities
          </h2>

          <div className="activity-box">

            <p>
              • Approved project proposal
            </p>

            <p>
              • Reviewed performance reports
            </p>

            <p>
              • Assigned new tasks to developers
            </p>

            <p>
              • Scheduled weekly team meeting
            </p>

            <p>
              • Updated project deadlines
            </p>

          </div>

        </div>

        <div className="info-section">

          <h2>
            Team Overview
          </h2>

          <div className="profile-box">

            <p>
              <strong>
                Team Lead:
              </strong>
              Rahul Sharma
            </p>

            <p>
              <strong>
                Active Members:
              </strong>
              24
            </p>

            <p>
              <strong>
                Ongoing Projects:
              </strong>
              12
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

export default ManagerDashboard;