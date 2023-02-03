import * as PostApi from "../../Api/EnquiryRequest";



export const getEnquiry = () => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostApi.getEnquiry();
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "RETREIVING_FAIL" });
    console.log(error);
  }
};

export const deleteEnquiry = (formData) => async (dispatch) => {
  dispatch({ type: "DELETE_START" });
  try {
    const { data } = await PostApi.deleteEnquiry(formData);
    dispatch({ type: "DELETE_SUCCESS"});
  } catch (error) {
    dispatch({ type: "DELETE_FAIL" });
    console.log(error);
  }
};

