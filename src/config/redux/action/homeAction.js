import axios from "axios";

export const setDataBlog = (page) => (dispatch) => {
  axios
    .get(`http://localhost:5000/v1/blog/post?page=${page}&perPage=2`)
    .then((result) => {
      const response = result.data;
      console.log(response);
      dispatch({ type: "UPDATE_DATA_BLOG", payload: response.data });
      dispatch({
        type: "UPDATE_PAGE",
        payload: {
          currentPage: response.current_page,
          totalPage: Math.ceil(response.total_data / response.per_page),
        },
      });
      console.log(response.data);
    })
    .catch((err) => {
      console.log("err :", err);
    });
};
