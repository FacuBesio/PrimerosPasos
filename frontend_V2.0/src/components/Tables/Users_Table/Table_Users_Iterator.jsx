import { Link, useNavigate } from "react-router-dom";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import update_icon from "../../../assets/update_icon.png";
import garbage from "../../../assets/garbage.png";
import { icon_style, td_style } from "../../../styles";
import useDeleteUser from "../../../hooks/Users/useDeleteUser";
import getUserById from "../../../services/Users/getUserById";
import isPrimaryOwner from "../../../utils/users/isPrimaryOwner";
import CanNot_DeleteNotification from "../../../utils/users/CanNot_DeleteNotification";

const Table_Users_Iterator = ({ allUsers }) => {
  const navigate = useNavigate();
  const { deleteWarning } = useDeleteUser();

  const handlerRemove = async (id, name) => {
    const data = await getUserById(id);
    const { user } = data;
    const { owner_result } = isPrimaryOwner(user);
    if (owner_result) {
      CanNot_DeleteNotification(
        user.name,
        `Los datos del owner no pueden ser modificados por este medio.`
      );
      navigate("/admin/manageUsers/");
    } else {
      deleteWarning(id, name);
    }
  };

  return (
    <>
      {allUsers &&
        allUsers.users.map((user) => (
          <tr key={user.id}>
            <td className="p-1 md:p-4 border min-w-[100px] max-w-[300px] truncate">
              {user.id}
            </td>
            <td className="p-1 md:p-4 border text-center">
              {/* <img
            src={user.img}
            alt={user.name}
            className="w-24 h-24 object-cover rounded-xl mx-auto"
          /> */}
              img
            </td>
            <td className={td_style}>{user.name}</td>
            <td className={td_style}>{user.email}</td>
            <td className={td_style}>{user.phone || "-"}</td>
            <td className={td_style}>{user.country || "-"}</td>
            <td className={td_style}>{user.role}</td>
            <td className={td_style}>
              <button>
                {user.enabled ? (
                  <span className="text-green-500 text-2xl">
                    <CheckCircleOutlined />
                  </span>
                ) : (
                  <span className="text-red-500 text-2xl">
                    <CloseCircleOutlined />
                  </span>
                )}
              </button>
            </td>
            <td className="p-1 md:p-4 border">
              <Link to={`/admin/manageUsers/update/${user.id}`}>
                <button>
                  <img src={update_icon} alt="Update" className={icon_style} />
                </button>
              </Link>
            </td>
            <td className="p-1 md:p-4 border">
              <button onClick={() => handlerRemove(user.id, user.name)}>
                <img src={garbage} alt="Eliminar" className={icon_style} />
              </button>
            </td>
          </tr>
        ))}
    </>
  );
};

export default Table_Users_Iterator;
