import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import "./Searchbar.css";

const Searchbar = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  let searchValue;
  const handleChange = (e) => {
    searchValue = e.target.value;
    let filtered = data.filter((e) => {
      if (e.website.toLowerCase().includes(searchValue.toLowerCase())) {
        console.log(e);
        return e;
      }
    });
    setFilteredData(filtered);
    if (searchValue.length === 0) {
      setFilteredData([]);
    }
  };

  const goesToWebsites = (links) => {
    for (let x of data) {
      if (x.link === links) {
        window.open(links, "_blank");
      }
    }
  };

  const handleClose = (str) => {
    setFilteredData([]);
    searchValue = "";
  };

  return (
    <div>
      <div className="ipField">
        <input placeholder="search" onChange={handleChange} />
      </div>
      {filteredData.length === 0 ? (
        <div className="searchIcon">
          <BiSearch />
        </div>
      ) : (
        <div className="searchIcon">
          <IoMdClose onClick={handleClose} />
        </div>
      )}
      {}
      {filteredData.length !== 0 ? (
        <div className="datas">
          {filteredData.map((e, i) => (
            <div
              key={i}
              className="iterates"
              onClick={() => goesToWebsites(e.link)}
            >
              {e.website}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
export default Searchbar;
