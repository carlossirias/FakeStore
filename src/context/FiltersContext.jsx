import { createContext, useState } from "react";

export const FiltersProducts = createContext()

// eslint-disable-next-line react/prop-types
export function FiltersProvider({children}){
    const [filter, setFilters] = useState({
        category: 'all',
        min: 0,
      })

    return(
        <FiltersProducts.Provider value={{
            filter,
            setFilters
        }}>
            {children}
        </FiltersProducts.Provider>
    )
}