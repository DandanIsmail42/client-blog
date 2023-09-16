import React, { useEffect, useState } from "react";
import { Button, Gap, Input, Link, Textarea, Upload } from "../../components";
import "./createBlog.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postToAPI,
  setForm,
  setImgPreview,
  updateToAPI,
} from "../../config/redux/action";
import axios from "axios";
import Swal from "sweetalert2";

const CreateBlog = () => {
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIsUpdate(true);
      axios
        .get(`http://localhost:5000/v1/blog/post/${id}`)
        .then((res) => {
          const data = res.data.data;
          dispatch(setForm("title", data.title));
          dispatch(setImgPreview(`http://localhost:5000/${data.image}`));
          dispatch(setForm("body", data.body));
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, [id]);

  const onSubmit = () => {
    if (isUpdate) {
      updateToAPI(form, id);
      navigate("/");
      window.location.reload();
      Swal.fire("Good job!", "Update blog successfully", "success");
    } else {
      postToAPI(form);
      navigate("/");
      window.location.reload();
      Swal.fire("Good job!", "Create blog successfully", "success");
    }
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };

  return (
    <div className="blog-post">
      <Link title="Back to home page" onClick={() => navigate("/")} />
      <p className="title">
        {isUpdate ? "Update Blog Post" : "Create New Blog Post"}
      </p>
      <Input
        label="Post Title"
        value={title}
        onChange={(e) => dispatch(setForm("title", e.target.value))}
      />
      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <Textarea
        value={body}
        onChange={(e) => dispatch(setForm("body", e.target.value))}
      />
      <Gap height={20} />
      <div className="button-action">
        <Button title={isUpdate ? "Update" : "Create"} onClick={onSubmit} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default CreateBlog;
