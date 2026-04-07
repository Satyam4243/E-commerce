import React, { useEffect, useState } from "react";
import "../selectDrop/select.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const Select = ({
  countries = [],
  data = [],
  placeholder = "Select",
  icon,
  view,
}) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(placeholder);
  const [searchText, setSearchText] = useState("");

  const [listData, setListData] = useState([]);
  const [listData2, setListData2] = useState([]);

  const safeCountries = Array.isArray(countries) ? countries : [];
  const safeData = Array.isArray(data) ? data : [];

  const list = safeCountries.length > 0 ? safeCountries : safeData;

  const getLabel = (item) => {
    if (typeof item === "string") return item;
    if (item && typeof item === "object") return item.name || "";
    return "";
  };

  const filteredList = list.filter((item) =>
    getLabel(item).toLowerCase().includes(searchText.toLowerCase()),
  );

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  useEffect(() => {
    if (data.length !== 0) {
      setListData(data);
      setListData2(data);
    }
  }, [data]);

  const closeSelect = (index, name) => {
    setSelectedIndex(index);
    setSelectedItem(name);
    setIsOpenSelect(false);
    setSearchText("");
  };

  return (
    <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
      <div className="selectDropWrapper cursor position-relative">
        {icon}

        <span
          className="openSelect"
          onClick={() => setIsOpenSelect(!isOpenSelect)}
        >
          {selectedItem.length > 14
            ? selectedItem.substring(0, 14) + "..."
            : selectedItem}
          <KeyboardArrowDownIcon className="arrow" />
        </span>

        {isOpenSelect && (
          <div className="selectDropMenu">
            <div className="searchField">
              <input
                type="text"
                placeholder="Search here..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            <ul className="searchResults">
              <li
                onClick={() => closeSelect(0, placeholder)}
                className={selectedIndex === 0 ? "active" : ""}
              >
                {placeholder}
              </li>

              {filteredList.map((item, index) => {
                const label = getLabel(item);

                return (
                  // <li
                  //   key={index + 1}
                  //   onClick={() => closeSelect(index + 1, item)}
                  //   className={`${selectedIndex === index + 1 ? "active" : ""}`}
                  // >
                  //   {/* {view!==="cat" ? item : item?.name} */}
                  //   {item}
                  // </li>
                  <li
                    key={index + 1}
                    onClick={() => closeSelect(index + 1, label)}
                    className={`${selectedIndex === index + 1 ? "active" : ""}`}
                  >
                    {label}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
