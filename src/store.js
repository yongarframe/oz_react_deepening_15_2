//1. useBoardStore를 선언하여 zustand 스토어를 생성합니다.
//2. persist 미들웨어를 사용하여 데이터를 localStorage에 저장합니다.
//3. createJSONStorage를 사용하여 JSON 형식으로 데이터를 저장합니다.
//4. set 함수를 사용하여 상태를 업데이트하는 메서드를 정의합니다.
//5. addBoard, removeBoard, updateBoard 메서드를 사용하여 보드를 추가, 삭제 및 업데이트합니다.
//6. data는 보드의 배열을 저장합니다. 초기값은 빈 배열 입니다. []
//7. addBoard 메서드는 새로운 보드를 추가합니다.
//8. removeBoard 메서드는 특정 ID를 가진 보드를 삭제합니다.
//9. updateBoard 메서드는 특정 ID를 가진 보드를 업데이트합니다.
const mockData = [
  {
    id: 1,
    title: '작업 목록 1',
    desc: '해야 할 작업 목록입니다. 우선순위를 정하고 진행하세요.',
    type: 'todo',
    created_at: '2023-10-01',
  },
  {
    id: 2,
    title: '작업 중 1',
    desc: '현재 진행 중인 작업입니다. 작업 상태를 주기적으로 업데이트하세요.',
    type: 'inprogress',
    created_at: '2023-10-01',
  },
  {
    id: 3,
    title: '완료 1',
    desc: '완료된 작업 목록입니다. 작업 결과를 검토하고 공유하세요.',
    type: 'done',
    created_at: '2023-10-01',
  },
  {
    id: 4,
    title: '작업 목록 2',
    desc: '새로운 작업을 추가하고 계획을 세우세요. 중요한 작업부터 시작하세요.',
    type: 'todo',
    created_at: '2023-10-02',
  },
  {
    id: 5,
    title: '작업 중 2',
    desc: '진행 중인 작업의 세부 사항을 확인하고 필요한 자원을 확보하세요.',
    type: 'inprogress',
    created_at: '2023-10-02',
  },
  {
    id: 6,
    title: '완료 2',
    desc: '모든 작업이 성공적으로 완료되었습니다. 팀과 함께 성과를 축하하세요.',
    type: 'done',
    created_at: '2023-10-02',
  },
];

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useDataStore = create(
  persist(
    (set) => ({
      data: [],
      addData: (newTask) => set((state) => ({ data: [...state.data, newTask] })),
      removeData: (id) => set((state) => ({ data: state.data.filter((el) => el.id !== id) })),
      updateData: (id, editTask) => set((state) => ({ data: [...state.data.filter((el) => el.id !== id), editTask] })),
    }),
    {
      name: 'data-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useDataStore;
