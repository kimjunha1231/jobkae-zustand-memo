import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useMemoStore = create(
  persist(
    (set) => ({
      memoList: [],
      addMemo: (val, linkValue) =>
        set((prev) => ({
          memoList: [
            ...prev.memoList,
            { content: val, linkValue, id: new Date().getMilliseconds() + val },
          ],
        })),
      removeMemo: (id) =>
        set((prev) => ({ memoList: prev.memoList.filter((e) => e.id !== id) })),
    }),
    {
      name: "memo-storage", // localStorage에 저장될 key 이름
      getStorage: () => localStorage, // 기본값이 localStorage
    }
  )
);
