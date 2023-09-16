import React from "react";
import "./blogItem.scss";
import { Button, Gap } from "../../atoms";
import { useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";
import moment from "moment";
import "moment-timezone";

const BlogItem = ({ blog, onDelete }) => {
  const navigate = useNavigate();
  return (
    <div className="blog-item">
      <img
        className="image-thumb"
        src={`http://localhost:5000/${blog.image}`}
        alt="post"
      />
      <div className="content-detail">
        <div className="title-wrapper">
          <p className="title">{blog.title}</p>
          <div className="edit-wrapper">
            <p
              className="edit"
              onClick={() => navigate(`create-blog/${blog._id}`)}
            >
              <AiOutlineEdit />
            </p>{" "}
            |{" "}
            <p className="delete" onClick={() => onDelete(blog._id)}>
              <MdOutlineDeleteOutline />
            </p>
          </div>
        </div>

        <p className="author">
          {blog.author.name} -{" "}
          {moment.utc(blog.createdAt).tz("Asia/Jakarta").format("YYYY-MM-DD")}
        </p>
        <p className="body">{blog.body}</p>
        <Gap height={20} />
        <Button
          title="View Detail"
          onClick={() => navigate(`detail-blog/${blog._id}`)}
        />
      </div>
    </div>
  );
};

export default BlogItem;
