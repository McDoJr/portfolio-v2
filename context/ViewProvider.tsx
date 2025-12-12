'use client';

import React, { createContext } from "react";

export const ViewContext = createContext<ViewContextProps>({
    view: "about",
    setView: () => { },
    setClicked: () => { }
});

export type ViewContextProps = {
    view: ViewType;
    setView: React.Dispatch<React.SetStateAction<ViewType>>
    setClicked: React.Dispatch<React.SetStateAction<boolean>>
}

export type ViewType = "about" | "tech" | "experience" | "projects";

type ViewProviderProps = {
    children: React.ReactNode;
    values: ViewContextProps;
}

export default function ViewProvider({ children, values }: ViewProviderProps) {
    return (
        <ViewContext.Provider value={values}>
            {children}
        </ViewContext.Provider>
    )
}