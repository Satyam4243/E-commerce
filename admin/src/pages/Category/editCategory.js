import React, { useContext, useEffect, useState } from "react";

import { MyContext } from "../../App";
import { editData } from "../../utils/api";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { emphasize, styled } from "@mui/material/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  deleteData,
  deleteImages,
  fetchDataFromApi,
  uploadImage,
  postData,
} from "../../utils/api";

import { IoCloseSharp } from "react-icons/io5";

import { FaRegImages } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

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

const EditCategory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    images: [],
    color: "",
    slug: "",
    parentId: "",
  });

  const [previews, setPreviews] = useState([]);

  // const [category, setcategory] = useState([]);

  const context = useContext(MyContext);

  let { id } = useParams();

  // const formData = new FormData();

  const history = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    window.scrollTo(0, 0);
    context.setProgress(20);

    fetchDataFromApi(`/api/category/${id}`)
      .then((res) => {
        if (!res) return;

        setFormFields({
          name: res.name || "",
          slug: res.slug || res.name || "",
          color: res.color || "",
        });

        setPreviews(Array.isArray(res.images) ? res.images : []);

        context.setProgress(100);
      })
      .catch(() => {
        context.setProgress(100);
      });
  }, [id]);

  const changeInput = (e) => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  let img_arr = [];
  let uniqueArray = [];
  let selectedImages = [];

  const onChangeFile = async (e, apiEndPoint) => {
    const formData = new FormData();
    try {
      const files = e.target.files;

      setUploading(true);

      for (var i = 0; i < files.length; i++) {
        if (
          files[i] &&
          (files[i].type === "image/jpeg" ||
            files[i].type === "image/jpg" ||
            files[i].type === "image/png" ||
            files[i].type === "image/webp")
        ) {
          const file = files[i];
          selectedImages.push(file);
          formData.append(`images`, file);
        } else {
          context.setAlertBox({
            open: true,
            error: true,
            msg: "Please select a valid JPG or PNG image file.",
          });
          return false;
        }
      }

      setFormFields((prev) => ({
        ...prev,
        images: selectedImages,
      }));
    } catch (error) {
      console.log(error);
    }

    uploadImage(apiEndPoint, formData).then((res) => {
      fetchDataFromApi("/api/imageUpload").then((response) => {
        const data = Array.isArray(response) ? response : response?.data;

        if (data?.length !== 0) {
          data.forEach((item) => {
            item?.images?.length !== 0 &&
              item?.images?.forEach((img) => {
                img_arr.push(img);
                //console.log(img)
              });
          });

          uniqueArray = img_arr.filter(
            (item, index) => img_arr.indexOf(item) === index
          );

          const appendedArray = [...previews, ...uniqueArray];

          setPreviews(appendedArray);
          setTimeout(() => {
            setUploading(false);
            img_arr = [];
            context.setAlertBox({
              open: true,
              error: false,
              msg: "images Uploaded!",
            });
          }, 200);
        }
      });
    });
  };

  const removeImg = async (index, imgUrl) => {
    const imgIndex = previews.indexOf(imgUrl);

    deleteImages(`/api/category/deleteImage?img=${imgUrl}`).then((res) => {
      context.setAlertBox({
        open: true,
        error: false,
        msg: "Image Deleted!",
      });
    });

    if (imgIndex > -1) {
      // only splice array when item is found
      setPreviews((prev) => prev.filter((_, i) => i !== index));
      // 2nd parameter means remove on item only
    }
  };

  const editCat = (e) => {
    e.preventDefault();

    const appendedArray = [...previews, ...uniqueArray];

    img_arr = [];

    setFormFields((prev) => ({
      ...prev,
      slug: prev.name,
      images: appendedArray,
    }));

    if (
      formFields.name !== "" &&
      formFields.color !== "" &&
      previews.length !== 0
    ) {
      setIsLoading(true);

      editData(`/api/category/${id}`, formFields).then((res) => {
        setIsLoading(false);
        context.fetchCategory();

        deleteData("/api/imageUpload/deleteAllImages");

        history("/category");
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
        <h5 className="mb-0">Edit Category</h5>
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
            label="Edit Category"
            deleteIcon={<ExpandMoreIcon />}
          />
        </Breadcrumbs>
      </div>

      <form className="form" onSubmit={editCat}>
        <div className="row">
          <div className="col-sm-9">
            <div className="card p-4 mt-0">
              <div className="form-group">
                <h6>Category Name</h6>
                <input
                  type="text"
                  name="name"
                  onChange={changeInput}
                  value={formFields.name}
                />
              </div>

              <div className="form-group">
                <h6>Color</h6>
                <input
                  type="text"
                  name="color"
                  onChange={changeInput}
                  value={formFields.color}
                />
              </div>

              <div className="imagesUploadSec">
                <h5 className="mb-4">Media And Published</h5>
              </div>

              <div className="imgUploadBox d-flex align-items-center">
                {previews?.length !== 0 &&
                  previews?.map((img, index) => {
                    return (
                      <div className="uploadBox" key={index}>
                        <span
                          className="remove"
                          onClick={() => removeImg(index, img)}
                        >
                          <IoCloseSharp />
                        </span>
                        <div className="box">
                          {/* <LazyLoadImage alt={"image"} effect="blur" className="w-100" src={img} /> */}
                          <LazyLoadImage
                            src={`${process.env.REACT_APP_BASE_URL}/uploads/${img}`}
                            effect="blur"
                            className="w-100"
                          />
                        </div>
                      </div>
                    );
                  })}

                <div className="uploadBox">
                  {uploading === true ? (
                    <div className="progresBar text-center d-flex align-items-center justify-content-center flex-column">
                      <CircularProgress />
                      <span>uploading...</span>
                    </div>
                  ) : (
                    <>
                      <input
                        type="file"
                        multiple
                        onChange={(e) =>
                          onChangeFile(e, "/api/category/upload")
                        }
                        name="images"
                      />
                      <div className="info">
                        <FaRegImages />
                        <h5>image upload</h5>
                      </div>
                    </>
                  )}
                </div>
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

export default EditCategory;
