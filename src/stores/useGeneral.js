import {create} from 'zustand'

const useToggleStore = create((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
  }));
    
  export default useToggleStore;