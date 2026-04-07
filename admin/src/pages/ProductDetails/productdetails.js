import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled, emphasize } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import Slider from "react-slick";

import { MdBrandingWatermark, MdCategory } from "react-icons/md";
import Rating from "@mui/material/Rating";
import { fetchDataFromApi } from "../../utils/api";

// ===== Breadcrumb =====
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
      backgroundColor: emphasize(backgroundColor, 0.05),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const ProductDetails = () => {
  const { id } = useParams();

  const productSliderBig = useRef();
  const productSliderSml = useRef();

  const [product, setProduct] = useState(null);

  // ===== Fetch Product =====
  useEffect(() => {
    if (id) {
      fetchDataFromApi(`/api/products/${id}`).then((res) => {
        if (res?.success) {
          setProduct(res.product);
        }
      });
    }
  }, [id]);

  if (!product) {
    return <div className="p-4">Loading Product...</div>;
  }

  // ===== Slider Options =====
  const productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const productSliderSmlOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  const goToSlide = (index) => {
    productSliderBig.current.slickGoTo(index);
    productSliderSml.current.slickGoTo(index);
  };

  return (
    <div className="right-content w-100">

      {/* Header */}
      <div className="card shadow border-0 w-100 flex-row p-4 res-col">
        <h5 className="mb-0">Product View</h5>
        <Breadcrumbs className="ms-auto breadcrumbs_">
          <StyledBreadcrumb label="Dashboard" icon={<HomeIcon />} />
          <StyledBreadcrumb label="Products" />
          <StyledBreadcrumb label="Product View" />
        </Breadcrumbs>
      </div>

      <div className="card productDetailsSEction">
        <div className="row">

          {/* LEFT SIDE - IMAGES */}
          <div className="col-md-5">
            <div className="sliderWrapper pt-3 pb-3 ps-4 pe-4">
              <h6 className="mb-4">Product Gallery</h6>

              {/* BIG SLIDER */}
              <Slider {...productSliderOptions} ref={productSliderBig}>
                {product.images?.map((img, index) => (
                  <div key={index}>
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/uploads/${img}`}
                      alt="product"
                      className="w-100"
                    />
                  </div>
                ))}
              </Slider>

              {/* SMALL THUMBNAILS */}
              <Slider {...productSliderSmlOptions} ref={productSliderSml}>
                {product.images?.map((img, index) => (
                  <div key={index} onClick={() => goToSlide(index)}>
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/uploads/${img}`}
                      alt="product"
                      className="w-100"
                      style={{ cursor: "pointer", padding: "5px" }}
                    />
                  </div>
                ))}
              </Slider>

            </div>
          </div>

          {/* RIGHT SIDE - DETAILS */}
          <div className="col-md-7">
            <div className="pt-3 pb-3 ps-4 pe-4">
              <h6 className="mb-4">Product Details</h6>

              <h4 style={{ color: "#fff" }}>{product.name}</h4>

              <div className="productInfo mt-4">

                <div className="row mb-2">
                  <div className="col-sm-3 d-flex align-items-center">
                    <MdBrandingWatermark />
                    <span className="ms-2">Brand</span>
                  </div>
                  <div className="col-sm-9" style={{ color: "#ccc" }}>
                    {product.brand}
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-sm-3 d-flex align-items-center">
                    <MdCategory />
                    <span className="ms-2">Category</span>
                  </div>
                  <div className="col-sm-9" style={{ color: "#ccc" }}>
                    {product.category?.name}
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-sm-3">Price</div>
                  <div className="col-sm-9" style={{ color: "#ccc" }}>
                    ₹{product.price}
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-sm-3">Stock</div>
                  <div className="col-sm-9" style={{ color: "#ccc" }}>
                    {product.countInStock}
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-sm-3">Rating</div>
                  <div className="col-sm-9">
                    <Rating
                      value={product.rating || 0}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-sm-3">Published</div>
                  <div className="col-sm-9" style={{ color: "#ccc" }}>
                    {new Date(product.createdAt).toDateString()}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Description */}
        <div className="p-4">
          <h6 className="mb-3">Product Description</h6>
          <p style={{ color: "#ccc" }}>{product.description}</p>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;