/* eslint-disable no-undef */
import { Select, SelectItem } from "@nextui-org/react";
import { useContext} from "react";
import { FiltersProducts } from "../context/FiltersContext";

// eslint-disable-next-line react/prop-types
export function Filters({maxPrice}) {

    const {filter, setFilters} = useContext(FiltersProducts)

    const handleChangeRange = (event)=>
    {
        setFilters({
            ...filter,
            min: event.target.value,
        })
    }

    const handleChangeSelect = (event) => {
        setFilters({
            ...filter,
            category: event.target.value,
        })
    }
    return (
        <div className="flex md:items-end mt-6 md:justify-end max-sm:w-full h-24">

            <div className="flex flex-col gap-3 max-sm:w-full text-gray-900">
                <div>
                    <Select
                        labelPlacement="outside"
                        label="Category:"
                        color="primary"
                        className="w-72 max-sm:w-full"
                        defaultSelectedKeys={["all"]}
                        onChange={handleChangeSelect}
                    >

                        <SelectItem value={'all'} key={'all'}>
                            All
                        </SelectItem>

                        <SelectItem key={'jewelery'} value={'jewelery'}>
                            Jewelery
                        </SelectItem>

                        <SelectItem key={'electronics'} value={'electronics'}>
                            Electronics
                        </SelectItem>

                        <SelectItem key={"women's clothing"} value={"women's clothing"}>
                            {/*eslint-disable-next-line react/no-unescaped-entities*/}
                            Women's clothing
                        </SelectItem>

                        <SelectItem key={"men's clothing"} value={"men's clothing"}>
                            {/*eslint-disable-next-line react/no-unescaped-entities*/}
                            Men's clothing
                        </SelectItem>

                    </Select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-sm text-[#4CB5AE] font-semibold">Price from: $<span>{filter.min}</span></label>
                    <input type="range" value={filter.min} onChange={handleChangeRange} className="bg-gray-200 shadow rounded-lg appearance-none cursor-pointer" name="" min={0} max={maxPrice} id="range__input" />
                </div>
            </div>
        </div>
    )
}