import { User } from "@supabase/supabase-js";
import { create } from "zustand";

type UserStore = {
    user: User | null

    setUser: (user: User | null) => void
}

export const userStore = create<UserStore>((set) => ({
    user: null,

    setUser: (user) => set({ user }),
}))