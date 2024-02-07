import { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        <input
          type="text"
          value={username}
          placeholder="Username"
          className="w-full px-4 py-2 mb-4 rounded border focus:outline-none focus:border-blue-500"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          className="w-full px-4 py-2 mb-4 rounded border focus:outline-none focus:border-blue-500"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default Login;
