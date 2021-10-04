import React from "react";

const GroupList = ({
    items,
    valueProp,
    contentProp,
    selectedItem,
    onItemChange,
}) => {
    return (
        <ul>
            {Object.keys(items).map((key) => (
                <li
                    key={items[key][valueProp]}
                    className={`list-item ${
                        selectedItem === items[key] ? "active" : ""
                    }`}
                    onClick={() => onItemChange(items[key])}>
                    {items[key][contentProp]}
                </li>
            ))}
        </ul>
    );
};

GroupList.defaultProps = {
    valueProp: "id",
    contentProp: "name",
};

export default GroupList;
