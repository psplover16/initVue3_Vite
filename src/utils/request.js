import axios from "axios";
import { useStore } from "@/store";
const { useLoading } = useStore();
import { getToken } from "@/utils/cookie";

export const getdata = async (url, method, data, showPopout = true) => {
  useLoading().changeLoadingStatus(true);
  try {
    const getdata = await axios({
      method: method,
      url,
      data,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
    // throw new Error('錯誤');
    useLoading().changeLoadingStatus(false);
    if (getdata.data.status != 200) {
      if (showPopout) {

      }
    }
    return getdata;
    // else {
    //     return getdata
    // }
  } catch (error) {
    return error.message;
  }
  // .post(`http://${url}/api`, { params: { status: urlParams } })
};
