// jotai
import { useDialog } from "src/states/useDialog";

export const SharedDialog = () => {
  const { dialogState, handler } = useDialog();
  return (
    <div className="opacity-100 fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
      <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="pb-4 pt-8 text-left font-thin px-6">
          <p>{dialogState.message}</p>
          <div className="flex justify-end pt-2">
            <button
              className="cursor-pointer px-4 bg-transparent p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-400 mr-2"
              onClick={handler.onCancel}
            >
              キャンセル
            </button>
            <button
              className="cursor-pointer px-4 bg-gray-500 p-2 rounded-lg text-white hover:bg-gray-400"
              onClick={handler.onSubmit}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};