import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useAuthContext } from "../hooks/useAuthContext";
import { AdminPage } from "./AdminPage";

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const { admin } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div>
      {admin && <AdminPage />}
      {!admin && (
        <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-4xl font-semibold mb-8">Log In</h1>
          <form className="bg-white text-black p-8 rounded-lg shadow w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 focus:outline-none"
              disabled={isLoading}
              onClick={handleSubmit}
            >
              Log in
            </button>
            {isLoading && <div>Loading</div>}
            {error && <div>{error}</div>}
          </form>
        </div>
      )}
    </div>
  );
};
