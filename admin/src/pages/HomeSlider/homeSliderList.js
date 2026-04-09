import React, { useEffect, useState, useContext } from "react";
import { fetchDataFromApi, deleteData, editData } from "../../utils/api";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const HomeSliderList = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= FETCH SLIDES =================
  useEffect(() => {
    getSlides();
  }, []);

  const getSlides = () => {
    setLoading(true);

    fetchDataFromApi("/api/homeBanner").then((res) => {
      if (res?.success) {
        setSlides(res.slides);
      }
      setLoading(false);
    });
  };

  // ================= DELETE SLIDE =================
  const handleDelete = (id) => {
    deleteData(`/api/homeBanner/${id}`).then((res) => {
      if (res?.success) {
        context.setAlertBox({
          open: true,
          error: false,
          msg: "Slide deleted successfully!",
        });
        getSlides();
      }
    });
  };

  // ================= TOGGLE ACTIVE =================
  const handleToggle = (id) => {
    editData(`/api/homeBanner/toggle/${id}`).then((res) => {
      if (res?.success) {
        context.setAlertBox({
          open: true,
          error: false,
          msg: "Slide status updated!",
        });
        getSlides();
      }
    });
  };

  // ================= DELETE SINGLE IMAGE =================
  const handleDeleteSingleImage = (id, image) => {
    deleteData(`/api/homeBanner/${id}/image`, { image }).then((res) => {
      if (res?.success) {
        context.setAlertBox({
          open: true,
          error: false,
          msg: "Image deleted successfully!",
        });
        getSlides();
      }
    });
  };

  // ================= DRAG END =================
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(slides);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const updatedSlides = items.map((item, index) => ({
      ...item,
      order: index,
    }));

    setSlides(updatedSlides);

    editData("/api/homeBanner/reorder", {
      slides: updatedSlides.map((slide) => ({
        _id: slide._id,
        order: slide.order,
      })),
    }).then((res) => {
      if (res?.success) {
        context.setAlertBox({
          open: true,
          error: false,
          msg: "Slides reordered successfully!",
        });
      }
    });
  };

  return (
    <div className="card shadow border-0 p-4">
      <h2 className="mb-4 mt-5">Home Slider List</h2>

      {loading ? (
        <p>Loading slides...</p>
      ) : slides.length === 0 ? (
        <p>No Slides Available</p>
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="slides">
            {(provided) => (
              <div
                className="row"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {slides.map((slide, slideIndex) => (
                  <Draggable
                    key={slide._id}
                    draggableId={slide._id}
                    index={slideIndex}
                  >
                    {(provided) => (
                      <div
                        className="col-md-4 mb-4"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="card p-2">
                          {/* {slide.images.map((img, index) => ( */}
                          {slide.images?.length > 0 &&
                            slide.images.map((img, index) => (
                              <div key={index}>
                                <img
                                  src={`http://localhost:8000/uploads/${img}`}
                                  alt="slide"
                                  className="w-100"
                                  style={{
                                    height: "200px",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                  }}
                                />

                                <Button
                                  variant="outlined"
                                  color="error"
                                  size="small"
                                  className="mt-2"
                                  onClick={() =>
                                    handleDeleteSingleImage(slide._id, img)
                                  }
                                >
                                  <DeleteIcon /> &nbsp; Delete Image
                                </Button>
                              </div>
                            ))}

                          {/* ACTIVE SWITCH */}
                          <div className="mt-2">
                            <FormControlLabel
                              control={
                                <Switch
                                  checked={slide.isActive}
                                  onChange={() => handleToggle(slide._id)}
                                  color="success"
                                />
                              }
                              label={slide.isActive ? "Active" : "Inactive"}
                            />
                          </div>

                          {/* ACTION BUTTONS */}
                          <div className="d-flex gap-2 mt-2">
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={() =>
                                navigate(`/homeSlider/edit/${slide._id}`)
                              }
                            >
                              <EditIcon /> &nbsp; Edit
                            </Button>

                            <Button
                              variant="contained"
                              color="error"
                              onClick={() => handleDelete(slide._id)}
                            >
                              Delete Slide
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
};

export default HomeSliderList;
