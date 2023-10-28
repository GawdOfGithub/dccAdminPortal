import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useMainContext must be used within a MainContextProvider');
    }
    return context;
}