import React from "react";

const FilterList = ({suggestedList,setSearchInput}) => {

    const handleClick = id => {
        setSearchInput(id)
    }

    return(
        <ul className="list__filter">
            {
                suggestedList?.map(location => (
                    <li className="list__item"
                        onClick={() => handleClick(location.id)} 
                        key={location.id}
                    >{location.name}</li>
                ))
            }
        </ul>
    )
}

export default FilterList