import React, { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDataBlog } from "../../config/redux/action";
import Swal from "sweetalert2";
import axios from "axios";

const Home = () => {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();

  const { dataBlog, page } = useSelector((state) => state.homeReducer);

  console.log(page);

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [counter, dispatch]);

  const navigate = useNavigate();

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete?",
      text: "If you delete then the data will be lost and cannot be returned",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/v1/blog/post/${id}`)
          .then((res) => {
            dispatch(setDataBlog(counter));
          })
          .catch((err) => console.log(err));
        Swal.fire("Deleted!", "Your blog has been deleted.", "success");
      }
    });
  };
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Create Blog" onClick={() => navigate("/create-blog")} />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map((blog) => {
          return (
            <BlogItem key={blog._id} blog={blog} onDelete={confirmDelete} />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-page">
          {page.currentPage} / {page.totalPage}
        </p>
        <Button
          title="Next"
          onClick={next}
          style={
            counter === page.totalPage
              ? { backgroundColor: "darkGrey", cursor: "not-allowed" }
              : { backgroundColor: "#ffad1f" }
          }
        />
      </div>
      <Gap height={20} />
    </div>
  );
};
export default Home;
