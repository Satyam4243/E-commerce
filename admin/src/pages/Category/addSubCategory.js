import React, { useContext, useEffect, useState } from "react";

import { MyContext } from "../../App";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { emphasize, styled } from "@mui/material/styles";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  deleteData,
  deleteImages,
  fetchDataFromApi,
  uploadImage,
  postData,
} from "../../utils/api";

// import { IoCloseSharp } from "react-icons/io5";

// import { FaRegImages } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

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

const AddSubCategory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    images: [],
    color: "",
    slug: "",
    parentId: "",
  });

  const [catData, setCaData] = useState([]);
  const [categoryVal, setCategoryVal] = useState("");

  // const formData = new FormData();

  const history = useNavigate();

  const context = useContext(MyContext);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchDataFromApi("/api/imageUpload").then((res) => {
      res?.map((item) => {
        item?.images?.map((img) => {
          deleteImages(`/api/category/deleteImage?img=${img}`).then((res) => {
            deleteData("/api/imageUpload/deleteAllImages");
          });
        });
      });
    });

    fetchDataFromApi("/api/category").then((res) => {
      context.setProgress(20);
      setCaData(res);
      context.setProgress(100);
    });
  }, []);

  const changeInput = (e) => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleChangeCategory = (event) => {
  //   setCategoryVal(event.target.value);
  //   setFormFields(() => ({
  //     ...formFields,
  //     name: event.target.value,

  //   }));
  // };

  const handleChangeCategory = (event) => {
    setCategoryVal(event.target.value);
    setFormFields((prev) => ({
      ...prev,
      parentId: event.target.value,
    }));
  };

  const selectCat = (cat, id) => {
    formFields.parentId = id;
  };

  const addSubCat = (e) => {
    e.preventDefault();

    formFields.slug = formFields.name;

    if (formFields.name !== "" && formFields.parentId !== "") {
      setIsLoading(true);

      postData(`/api/category/create`, formFields).then((res) => {
        setIsLoading(false);
        context.fetchCategory();

        history("/subCategory");
      });
    } else {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Please fill all the details",
      });
      return false;
    }
  };

  return (
    <div className="right-content w-100">
      <div className="card shadow border-0 w-100 flex-row p-4 m-2">
        <h5 className="mb-0">Add Sub Category</h5>
        <Breadcrumbs aria-label="breadcrumb" className="ms-auto breadcrumb">
          <StyledBreadcrumb
            component="a"
            href="#"
            label="Dashboard"
            icon={<HomeIcon fontSize="small" />}
          />

          <StyledBreadcrumb
            component="a"
            href="#"
            label="Category"
            deleteIcon={<ExpandMoreIcon />}
          />

          <StyledBreadcrumb
            component="a"
            href="#"
            label="Sub Category"
            deleteIcon={<ExpandMoreIcon />}
          />

          <StyledBreadcrumb
            label="Add Sub Category"
            deleteIcon={<ExpandMoreIcon />}
          />
        </Breadcrumbs>
      </div>

      <form className="form" onSubmit={addSubCat}>
        <div className="row">
          <div className="col-sm-9">
            <div className="card p-4 mt-0">
              <div className="form-group">
                <h6>Parent Category</h6>

                <Select
                  value={categoryVal}
                  onChange={handleChangeCategory}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em value={null}>None</em>
                  </MenuItem>

                  {catData?.categoryList?.length !== 0 &&
                    catData?.categoryList?.map((cat, index) => {
                      return (
                        <MenuItem
                          className="text-capitalize"
                          value={cat._id}
                          key={index}
                          onClick={() => selectCat(cat.name, cat._id)}
                        >
                          {cat.name}
                        </MenuItem>
                      );
                    })}
                </Select>
              </div>

              <div className="form-group">
                <h6>Sub Category</h6>
                <input
                  type="text"
                  name="name"
                  onChange={changeInput}
                  value={formFields.name}
                />
              </div>

              <br />

              <Button type="submit" className="btn-blue btn-lg btn-big w-100">
                <FaCloudUploadAlt /> &nbsp;{" "}
                {isLoading === true ? (
                  <CircularProgress color="inherit" className="loader" />
                ) : (
                  "PUBLISH AND VIEW"
                )}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSubCategory;
