function ConfirmModal({
    isOpen,
    title,
    message,
    confirmText = "Delete",
    cancelText = "Cancel",
    onConfirm,
    onCancel,
  }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-6">
  
          <h2 className="text-2xl font-bold text-gray-800">
            {title}
          </h2>
  
          <p className="text-gray-600 mt-3">
            {message}
          </p>
  
          <div className="flex justify-end gap-3 mt-8">
  
            <button
              onClick={onCancel}
              className="px-5 py-2 rounded-lg border hover:bg-gray-100"
            >
              {cancelText}
            </button>
  
            <button
              onClick={onConfirm}
              className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
            >
              {confirmText}
            </button>
  
          </div>
  
        </div>
      </div>
    );
  }
  
  export default ConfirmModal;