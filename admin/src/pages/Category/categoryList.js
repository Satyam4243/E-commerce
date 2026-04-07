import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { emphasize, styled } from "@mui/material/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { deleteData, fetchDataFromApi } from "../../utils/api";

/* Breadcrumb style */
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];

  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const CategoryList = () => {
  const [catData, setCatData] = useState([]);
  const context = useContext(MyContext);

  /* Fetch category */
  useEffect(() => {
    window.scrollTo(0, 0);
    context.setProgress(20);

    fetchDataFromApi("/api/category").then((res) => {
      setCatData(res);
      context.setProgress(100);
    });
  }, []);

  /* Delete category */
  const deleteCat = (id) => {
    if (!id) return;

    context.setProgress(30);

    deleteData(`/api/category/${id}`).then(() => {
      fetchDataFromApi("/api/category").then((res) => {
        setCatData(res);
        context.setProgress(100);

        context.setAlertBox({
          open: true,
          error: false,
          msg: "Category Deleted!",
        });
      });
    });
  };

  return (
    <div className="right-content w-100">
      {/* Header */}
      <div className="card shadow border-0 w-100 flex-row p-4 align-items-center">
        <h5 className="mb-0">Category List</h5>

        <Breadcrumbs className="ms-auto breadcrumbs_">
          <StyledBreadcrumb
            component={Link}
            to="/"
            label="Dashboard"
            icon={<HomeIcon fontSize="small" />}
          />
          <StyledBreadcrumb label="Category" deleteIcon={<ExpandMoreIcon />} />
        </Breadcrumbs>

        <Link to="/category/add">
          <Button className="btn-blue ms-3 px-3">Add Category</Button>
        </Link>
      </div>

      {/* Table */}
      <div className="card shadow border-0 p-3 mt-4">
        <h3 className="hd">Category List</h3>

        <div className="table-responsive mt-3">
          <table className="table table-bordered table-striped v-align">
            <thead>
              <tr>
                <th style={{ width: "100px" }}>IMAGE</th>
                <th>CATEGORY</th>
                <th>COLOR</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {catData?.categoryList?.length > 0 &&
                catData.categoryList.map((cat) => (
                  <tr key={cat._id}>
                    <td>
                      {Array.isArray(cat?.images) && cat.images.length > 0 ? (
                        // <LazyLoadImage
                        //   src={`${process.env.REACT_APP_BASE_URL}/uploads/${cat.images[0]}`}
                        //   effect="blur"
                        //   className="category-img"
                        // />
                        <LazyLoadImage
                          src={`${process.env.REACT_APP_BASE_URL}/uploads/${cat?.images?.[0]}`} 
                          effect="blur"
                          className="w-100"
                        />
                      ) : (
                        <div className="no-img">No Image</div>
                      )}
                    </td>

                    <td>{cat?.name}</td>
                    <td>{cat?.color}</td>

                    <td>
                      <div className="actions d-flex align-items-center">
                        <Link to={`/category/edit/${cat?._id}`}>
                          <Button color="success">
                            <FaPencilAlt />
                          </Button>
                        </Link>

                        <Button
                          color="error"
                          className="ms-2"
                          onClick={() => deleteCat(cat._id)}
                        >
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}

              {catData?.categoryList?.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center">
                    No Category Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
