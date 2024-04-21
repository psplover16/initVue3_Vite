// 這個庫是把所有的pinia彙整到一個
import { useLoading } from "./loadstore";
import { usescreenWidth } from "./screenwidth";


export const useStore = () => {
  return {
    useLoading,
    usescreenWidth
  };
};
