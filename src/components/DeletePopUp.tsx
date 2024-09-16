// DeletePopUp.tsx

interface Props {
  onCancel: () => void;
  onDelete: () => void;
}

function DeletePopUp({ onCancel, onDelete }: Props) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#8484847D] bg-opacity-50 z-50">
      <div className="bg-gradient-to-b from-[#141517] to-[#232528] p-8 rounded-lg items-center flex flex-col">
        <h2 className="text-3xl font-bold ">Are you sure?</h2>
        <p className="text-sm my-12 px-16 ">
          Are you sure you want to delete this mail?
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onCancel}
            className="bg-[#25262B] text-white px-16 py-4 rounded-md focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="bg-gradient-to-r from-[#FA5252] to-[#A91919] text-white px-16 py-4 rounded-md focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopUp;
