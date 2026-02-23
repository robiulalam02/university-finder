"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { University } from "@/src/types";

interface CompareContextType {
    selectedUnis: University[];
    toggleComparison: (uni: University) => void;
    clearComparison: () => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: ReactNode }) {
    const [selectedUnis, setSelectedUnis] = useState<University[]>([]);

    const toggleComparison = (uni: University) => {
        setSelectedUnis((prev) => {
            const exists = prev.find((item) => item.id === uni.id);
            if (exists) return prev.filter((item) => item.id !== uni.id);
            // Limit to 2 universities for a side-by-side comparison
            if (prev.length >= 2) return [prev[1], uni];
            return [...prev, uni];
        });
    };

    const clearComparison = () => setSelectedUnis([]);

    return (
        <CompareContext.Provider value={{ selectedUnis, toggleComparison, clearComparison }}>
            {children}
        </CompareContext.Provider>
    );
}

export const useCompare = () => {
    const context = useContext(CompareContext);
    if (!context) throw new Error("useCompare must be used within CompareProvider");
    return context;
};