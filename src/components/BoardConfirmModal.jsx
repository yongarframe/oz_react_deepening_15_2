//1. useBoardStore를 선언하여 zustand 스토어를 불러옵니다.
//2. removeBoard 함수를 불러와 보드를 삭제 합니다.

import React from 'react';

const BoardConfirmModal = ({ onClose, id }) => {
  const handleDelete = () => {
    onClose();
  };
  return (
    <div onClick={onClose} className="fixed inset-0 flex items-center justify-center z-51 bg-black/70">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg p-6 w-[600px] flex flex-col justify-between"
      >
        <h2 className="font-semibold text-xl">정말로 삭제하시겠습니까?</h2>
        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={handleDelete}
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-sm text-white"
          >
            확인
          </button>
          <button
            onClick={onClose}
            className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-sm hover:bg-red-600"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardConfirmModal;
