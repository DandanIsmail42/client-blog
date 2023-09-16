import React, { useEffect, useState } from "react";
import "./detailBlog.scss";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "../../components";
import axios from "axios";

const DetailBlog = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/v1/blog/post/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  if (data.author) {
    return (
      <div className="detail-blog-wrapper">
        <div className="img-wrapper">
          <img
            className="img-cover"
            src={`http://localhost:5000/${data.image}`}
            alt="thumb"
          />
        </div>
        <p className="blog-title">{data.title}</p>
        <p className="blog-author">
          {data.author.name} - {data.createdAt}
        </p>
        <p className="blog-body">{data.body}</p>
        <Link title="Back to home page" onClick={() => navigate("/")} />
      </div>
    );
  }
  return <p>Loading . . .</p>;
};

export default DetailBlog;
