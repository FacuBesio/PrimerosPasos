import { Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import "./styles.css";

const Enabled_input = ({ newCategory, setNewCategory }) => {

  return (
    <div className="w-full flex justify-start items-center pt-8 pb-2 px-4 gap-4">
    <label htmlFor="enabled" className="text-white font-bold">
      Activo
    </label>
    <Switch
      defaultChecked={true}
      value={newCategory?.enabled}
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      onChange={(checked) => {
        setNewCategory({ ...newCategory, enabled: checked });
      }}
      className="custom-switch"
    />
  </div>
  );
};

export default Enabled_input;
