import { ApiResponse } from "../utils/api_response.js";
import { asyncHandler } from "../utils/async-handler.js";
/*
const healthcheck = async (req, res, next) => {
  try {
    const user = await getUserFromDB();
    res
      .status(200)
      .json(new ApiResponse(200, { message: "server is runnning" }));
  } catch (error) {
    next(err);
  }
};
*/

const healthcheck = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, { message: "server is runnning.." }));
});
export { healthcheck };
