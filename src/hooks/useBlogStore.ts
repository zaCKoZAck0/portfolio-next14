import { create } from 'zustand';

interface BlogState {
  blogTitle: string;
  isScrolled: boolean;
  setBlogTitle: (title: string) => void;
  setIsScrolled: (scrolled: boolean) => void;
}

const useBlogStore = create<BlogState>((set) => ({
  // State
  blogTitle: '',
  isScrolled: false,

  // Actions
  setBlogTitle: (title: string) => set({ blogTitle: title }),
  setIsScrolled: (scrolled: boolean) => set({ isScrolled: scrolled }),
}));

export default useBlogStore;
