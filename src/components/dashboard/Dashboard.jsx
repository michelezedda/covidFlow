import "./dashboard.css";
import familymaskPic from "/family-mask.png";

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <div className="container">
          <h2>Dashboard</h2>
          <img src={familymaskPic} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
