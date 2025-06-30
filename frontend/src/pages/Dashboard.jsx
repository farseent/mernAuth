import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4">
      <h1 className="text-4xl font-bold mb-10 font-serif">Welcome, {user.name}!</h1>

      <div className="w-full max-w-md bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-md p-6 space-y-6">
        <div className="text-lg font-serif text-gray-300">
          <p><span className="text-purple-400 font-medium">Name:</span> {user.name}</p>
          <p><span className="text-purple-400 font-medium">Email:</span> {user.email}</p>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="mt-8 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white py-2 px-10 rounded-full font-semibold transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
