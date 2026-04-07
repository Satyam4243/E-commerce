import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDataFromApi, editData, postData } from "../../utils/api";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

import { FaCloudUploadAlt } from "react-icons/fa";

// ---------------- Breadcrumb ----------------
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
  };
});

// ---------------- Component ----------------
const ProductUpload = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    name: "",
    description: "",
    price: "",
    oldPrice: "",
    brand: "",
    countInStock: "",
    category: "",
    subCategory: "",
    rating: 1,
    productRam: [],
  });

  const [categoryVal, setCategoryVal] = useState("");
  const [subCatVal, setSubCatVal] = useState("");
  const [ratingsValue, setRatingValue] = useState(1);
  const [productRams, setProductRams] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [images, setImages] = useState([]);

  // -------- Fetch Product (Edit Mode) --------
  useEffect(() => {
    if (id) {
      fetchDataFromApi(`/api/products/${id}`).then((res) => {
        if (res?.product) {
          setFormFields(res.product);
          setCategoryVal(res.product.category?._id || "");
          setSubCatVal(res.product.subCategory?._id || "");
          setRatingValue(res.product.rating || 1);
          setProductRams(res.product.productRam || []);
        }
      });
    }
  }, [id]);

  // -------- Fetch Categories --------
  useEffect(() => {
    fetchDataFromApi("/api/category").then((res) => {
      if (res?.categoryList) {
        setCategories(res.categoryList);
      }
    });
  }, []);

  // -------- Input Change --------
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // -------- Category Change --------
  const handleCategoryChange = (e) => {
    const value = e.target.value;

    setCategoryVal(value);
    setFormFields({
      ...formFields,
      category: value,
      subCategory: "", // reset subcategory
    });

    const selectedCat = categories.find((cat) => cat._id === value);
    setSubCategories(selectedCat?.children || []);
    setSubCatVal("");
  };

  // -------- SubCategory Change --------
  const handleSubCategoryChange = (e) => {
    const value = e.target.value;
    setSubCatVal(value);

    setFormFields({
      ...formFields,
      subCategory: value,
    });
  };

  // -------- RAM Change --------
  const handleChangeProductRams = (event) => {
    const { value } = event.target;
    const rams = typeof value === "string" ? value.split(",") : value;

    setProductRams(rams);

    setFormFields({
      ...formFields,
      productRam: rams,
    });
  };

  // -------- Submit --------
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFields = {
      ...formFields,
      category: categoryVal,
      subCategory: subCatVal,
      rating: ratingsValue,
      productRam: productRams,
      images: images,
    };

    if (id) {
      editData(`/api/products/${id}`, updatedFields).then(() => {
        alert("Product Updated Successfully");
        navigate("/products");
      });
    } else {
      postData("/api/products", updatedFields).then(() => {
        alert("Product Created Successfully");
        navigate("/products");
      });
    }
  };

  const handleImageUpload = async (e) => {
    const files = e.target.files;

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }

    try {
      const res = await fetch(
        // `${process.env.REACT_APP_BASE_URL}/upload`,
        `http://localhost:8000/upload`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();

      if (data.success) {
        setImages(data.images);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="right-content w-100">
      <div className="card shadow border-0 w-100 flex-row p-4 res-col">
        <h5 className="mb-0">{id ? "Edit Product" : "Product Upload"}</h5>

        <Breadcrumbs className="ms-auto breadcrumbs_">
          <StyledBreadcrumb label="Dashboard" icon={<HomeIcon />} />
          <StyledBreadcrumb label="Products" />
          <StyledBreadcrumb label="Product Upload" />
        </Breadcrumbs>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="card p-4 mt-3">
          <h5 className="mb-4">Basic Information</h5>

          <div className="form-group">
            <h6>PRODUCT NAME</h6>
            <input
              type="text"
              name="name"
              value={formFields.name}
              onChange={onChangeInput}
            />
          </div>

          <div className="form-group">
            <h6>DESCRIPTION</h6>
            <textarea
              rows={5}
              name="description"
              value={formFields.description}
              onChange={onChangeInput}
            />
          </div>

          <div className="row mt-3">
            <div className="col">
              <h6>CATEGORY</h6>
              <Select
                value={categoryVal}
                onChange={handleCategoryChange}
                className="w-100"
              >
                <MenuItem value="">None</MenuItem>
                {categories.map((cat) => (
                  <MenuItem key={cat._id} value={cat._id}>
                    {cat.name}
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div className="col">
              <h6>SUB CATEGORY</h6>
              <Select
                value={subCatVal}
                onChange={handleSubCategoryChange}
                className="w-100"
              >
                <MenuItem value="">None</MenuItem>
                {subCategories.map((sub) => (
                  <MenuItem key={sub._id} value={sub._id}>
                    {sub.name}
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div className="col">
              <h6>PRICE</h6>
              <input
                type="number"
                name="price"
                value={formFields.price}
                onChange={onChangeInput}
                className="form-control"
                style={{ height: "45px" }}
              />
            </div>

            <div className="col">
              <h6>OLD PRICE</h6>
              <input
                type="number"
                name="oldPrice"
                value={formFields.oldPrice}
                onChange={onChangeInput}
                className="form-control"
                style={{ height: "45px" }}
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4">
              <h6>BRAND</h6>
              <input
                type="text"
                name="brand"
                value={formFields.brand}
                onChange={onChangeInput}
                className="form-control"
                style={{ height: "45px" }}
              />
            </div>

            <div className="col-md-4">
              <h6>STOCK</h6>
              <input
                type="number"
                name="countInStock"
                value={formFields.countInStock}
                onChange={onChangeInput}
                className="form-control"
                style={{ height: "45px" }}
              />
            </div>

            <div className="col-md-4">
              <h6>PRODUCT RAMS</h6>
              <Select
                multiple
                value={productRams}
                onChange={handleChangeProductRams}
                className="w-100"
                style={{ height: "45px" }}
              >
                <MenuItem value="4GB">4GB</MenuItem>
                <MenuItem value="8GB">8GB</MenuItem>
                <MenuItem value="12GB">12GB</MenuItem>
              </Select>
            </div>
          </div>

          <div className="mt-3">
            <h6>RATINGS</h6>
            <Rating
              value={ratingsValue}
              onChange={(e, newValue) => setRatingValue(newValue)}
            />
          </div>
        </div>

        <div className="card p-4 mt-3">
          <h5 className="mb-3">Product Images</h5>

          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            className="form-control"
          />

          <div className="row mt-3">
            {images.length > 0 &&
              images.map((img, index) => (
                <div className="col-md-2" key={index}>
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/uploads/${img}`}
                    alt="product"
                    className="w-100"
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="card p-4 mt-3">
          <Button type="submit" className="btn-blue btn-lg btn-big w-100">
            <FaCloudUploadAlt /> &nbsp;
            {id ? "UPDATE PRODUCT" : "PUBLISH PRODUCT"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductUpload;
