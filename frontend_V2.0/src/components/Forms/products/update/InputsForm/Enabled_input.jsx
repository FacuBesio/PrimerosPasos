import { Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import "./styles.css";

const Enabled_input = ({ updateProduct, setUpdateProduct }) => {

  return (
    <div className="w-full flex justify-start items-center pt-4 pb-2 px-4 gap-4 text-[12px] md:text-[18px]">
    <label htmlFor="enabled" className="text-white font-bold">
      Activo
    </label>
    <Switch
      defaultChecked={true}
      value={updateProduct?.enabled}
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      onChange={(checked) => {
        setUpdateProduct({ ...updateProduct, enabled: checked });
      }}
      className="custom-switch"
    />
  </div>
  );
};

export default Enabled_input;
