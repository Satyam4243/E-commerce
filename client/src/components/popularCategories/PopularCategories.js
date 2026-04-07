// import React from "react";
// import { Link } from "react-router-dom";

// const PopularCategories = ({ data }) => {
//   return (
//     <section className="container-fluid mt-4">
//       <h3>Popular Categories</h3>

//       <ul className="list-inline mt-3">
//         {data.map((item) => (
//           <li key={item._id} className="list-inline-item mr-3">
//             <Link to={`/category/subCat/${item._id}`}>
//               {item.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default PopularCategories;


import React from "react";
import { Link } from "react-router-dom";
import "./PopularCategories.css"; // 👈 import karo

const PopularCategories = ({ data }) => {
  return (
    <section className="container-fluid mt-4 popular-container">
      <h3>Popular Categories</h3>

      <ul className="category-list mt-3">
        {data.map((item) => (
          <li key={item._id} className="category-item">
            <Link
              to={`/category/subCat/${item._id}`}
              className="category-link"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PopularCategories;