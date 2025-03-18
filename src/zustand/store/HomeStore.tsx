import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetSpecializationByType } from "../api/HomeApiServices";
import AuthStore from "./AuthStore";

interface HomeState {
    specializations: any[];
    loading: boolean;
    error: string | null;
    language: string;

    fetchSpecializations: (lang: string) => Promise<void>;
    setLanguage: (lang: string) => void;
    clearSpecializations: () => void;
}

const HomeStore = create<HomeState>()(
    persist(
        devtools((set, get) => ({
            specializations: [],
            loading: false,
            error: null,
            language: "",

            fetchSpecializations: async (lang: string) => {
                set({ loading: true, error: null });
                try {
                    const { Token } = AuthStore.getState();

                    if (!Token) {
                        throw new Error("Authorization token is missing");
                    }

                    const data = await GetSpecializationByType(lang, Token); 
                    set({ specializations: data, loading: false });
                } catch (error: any) {
                    set({ error: "Failed to fetch specializations", loading: false });
                }
            },

            setLanguage: (lang: string) => {
                set({ language: lang });
            },

            clearSpecializations: () => {
                set({ specializations: [] });
            },
        })),
        {
            name: "home-storage",
           
        }
    )
);

export default HomeStore;
