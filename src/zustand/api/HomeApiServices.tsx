import api from './api';
import AuthStore from '../store/AuthStore';

export const GetSpecializationByType = async (lang: string, Token: string) => {
    try {
        const { Token } = AuthStore.getState();

        if (!Token) {
            throw new Error("Authorization token is missing");
        }

        const response = await api.get(
            `/admin/getSpecializationByType?lang=${lang}`,
            {
                headers: {
                    Authorization: `Bearer ${Token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        throw new Error("Error getting specialization");
    }
};
export default api;
