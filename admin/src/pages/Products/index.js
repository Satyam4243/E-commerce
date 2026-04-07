import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { emphasize, styled } from "@mui/material/styles";

import { FaUserCircle, FaEye, FaPencilAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag, MdDelete } from "react-icons/md";

import DashboardBox from "../Dashboard/components/dashboardBox";
import { fetchDataFromApi } from "../../utils/api";
import { MyContext } from "../../App";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

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

const Products = () => {
  const context = useContext(MyContext);

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  // ================= FETCH PRODUCTS =================
  const getProducts = (pageNo = 1) => {
    fetchDataFromApi(`/api/products?page=${pageNo}&limit=10`).then((res) => {
      if (res?.success) {
        setProducts(res.products || []);
        setTotalPages(res.totalPages || 0);
        setTotalProducts(res.totalProducts || 0);
      }
    });
  };

  // ================= DELETE PRODUCT =================
  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/products/${id}`,
        {
          method: "DELETE",
        },
      );

      const data = await res.json();

      if (data.success) {
        getProducts(page);

        context.setAlertBox({
          open: true,
          error: false,
          msg: "Product deleted successfully",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts(page);
  }, [page]);
  // console.log(products);

  return (
    <div className="right-content w-100">
      <div className="card shadow border-0 w-100 flex-row p-4">
        <h5 className="mb-0">Product List</h5>

        <Breadcrumbs className="ms-auto breadcrumbs_">
          <StyledBreadcrumb label="Dashboard" icon={<HomeIcon />} />
          <StyledBreadcrumb label="Products" />
        </Breadcrumbs>
      </div>

      <div className="row dashboardBoxWrapperRow dashboardBoxWrapperRowV2">
        <div className="col-md-12">
          <div className="dashboardBoxWrapper d-flex">
            <DashboardBox
              color={["#1da256", "#48d483"]}
              icon={<FaUserCircle />}
            />
            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<IoMdCart />} />
            <DashboardBox
              color={["#2c78e5", "#60aff5"]}
              icon={<MdShoppingBag />}
            />
          </div>
        </div>
      </div>

      <div className="card shadow border-0 p-3 mt-4">
        <h3 className="hd">Product List</h3>

        <div className="table-responsive mt-3">
          <table className="table table-bordered table-striped v-align">
            <thead className="thead-dark">
              <tr>
                <th>UID</th>
                <th style={{ width: "300px" }}>PRODUCT</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th>PRICE</th>
                <th>RATING</th>
                <th>STOCK</th>
                <th>FEATURED</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {products.map((item, index) => (
                <tr key={item._id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <Checkbox {...label} />
                      <span>#{index + 1}</span>
                    </div>
                  </td>

                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            // src={
                            //   item?.images?.length > 0
                            //     ? `${process.env.REACT_APP_BASE_URL}/uploads/${item.images[0]}`
                            //     : "/no-image.png"
                            // }
                            src={
                              item?.images?.length > 0
                                ? `http://localhost:8000/uploads/${item.images[0]}`
                                : "/no-image.png"
                            }
                            alt={item.name}
                            className="w-100"
                          />
                        </div>
                      </div>

                      <div className="info ps-3">
                        <h6 style={{ color: "#fff" }}>{item.name}</h6>
                        <p style={{ color: "#ccc" }}>{item.description}</p>
                      </div>
                    </div>
                  </td>

                  <td>{item.category?.name || ""}</td>
                  <td>{item.brand}</td>

                  <td>
                    {item.oldPrice > 0 && (
                      <del className="old">${item.oldPrice}</del>
                    )}
                    <span className="new text-danger ms-2">${item.price}</span>
                  </td>

                  <td>
                    <Rating
                      value={item.rating}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                  </td>

                  <td>{item.countInStock}</td>
                  <td>{item.isFeatured ? "Yes" : "No"}</td>

                  <td>
                    <div className="actions d-flex align-items-center">
                      <Link to={`/product/details/${item._id}`}>
                        <Button color="secondary">
                          <FaEye />
                        </Button>
                      </Link>

                      <Link to={`/product/upload/${item._id}`}>
                        <Button color="success">
                          <FaPencilAlt />
                        </Button>
                      </Link>

                      <Button
                        color="error"
                        onClick={() => deleteProduct(item._id)}
                      >
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex tableFooter">
            <p>
              showing <b>{products.length}</b> of <b>{totalProducts}</b> results
            </p>

            <Pagination
              count={totalPages}
              page={page}
              onChange={(e, value) => setPage(value)}
              color="primary"
              showFirstButton
              showLastButton
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
