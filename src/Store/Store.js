import {create} from 'zustand';

export const useAuthStore = create((set) => ({
  auth: {
    click:false,
    active: false,
  },
  savedata: (name) =>
    set((state) => ({
      auth: { ...state.auth, click: name },
    })),
}));