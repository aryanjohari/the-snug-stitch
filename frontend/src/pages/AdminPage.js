import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { AdminLogin } from "./AdminLogin";

export const AdminPage = () => {
  const { logout } = useLogout();
  const { admin } = useAuthContext();

  const handlelogout = () => {
    logout();
  };

  return (
    <div>
      {!admin && <AdminLogin />}
      {admin && (
        <div className="bg-black text-white h-screen flex flex-col justify-center items-center">
          <div className="float-right ">
            <span>{admin.email}</span>
            <button onClick={handlelogout} className="mx-5 bg-white text-black">logout</button>
          </div>
          <h1 className="text-4xl font-semibold mb-8">Admin Page</h1>
          <ul className="text-center">
            <li>
              <a
                href="/admin-page/add"
                className="block py-2 px-4 my-2 mx-auto bg-white text-black rounded hover:bg-gray-300 transition-colors duration-300"
              >
                Add Product
              </a>
            </li>
            <li>
              <a
                href="/admin-page/update"
                className="block py-2 px-4 my-2 mx-auto bg-white text-black rounded hover:bg-gray-300 transition-colors duration-300"
              >
                Update Product
              </a>
            </li>
            <li>
              <a
                href="/admin-page/delete"
                className="block py-2 px-4 my-2 mx-auto bg-white text-black rounded hover:bg-gray-300 transition-colors duration-300"
              >
                Delete Product
              </a>
            </li>
            <li>
              <a
                href="/admin/new"
                className="block py-2 px-4 my-2 mx-auto bg-white text-black rounded hover:bg-gray-300 transition-colors duration-300"
              >
                New Admin
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
