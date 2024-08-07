import { disabled_button, enabled_button } from "../../../styles";

const Update_button = ({ editable, setEditable, disabled }) => {
  const handleModify = (event) => {
    event.preventDefault();
    setEditable(!editable);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setEditable(false);
  };

  return (
    <div className="formButton w-full flex justify-center mb-2 items-center">
      {!editable ? (
        <button
          onClick={handleModify}
          className="px-8 py-3 bg-slate-400 text-white font-bold rounded-md hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          ACTUALIZAR
        </button>
      ) : disabled ? (
        <div className="flex gap-4">
          <button id="buttonDisabled" className={disabled_button}>
            CONFIRMAR
          </button>
          <button
            id="cancel"
            onClick={handleCancel}
            className="px-8 py-3 bg-red-300 text-white font-bold rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-200"
          >
            CANCELAR
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <button type="submit" id="buttonEnabled" className={enabled_button}>
            CONFIRMAR
          </button>
          <button
            id="buttonDisabled"
            onClick={handleCancel}
            className="px-8 py-3 bg-slate-400 text-white font-bold rounded-md hover:bg-red-500/75 focus:outline-none focus:ring-2 focus:ring-red-200"
          >
            CANCELAR
          </button>
        </div>
      )}
    </div>
  );
};

export default Update_button;
