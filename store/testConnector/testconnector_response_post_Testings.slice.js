import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const testconnector_post_googlecom_create = createAsyncThunk(
  "testconnector_response_post_Testings/testconnector_post_googlecom_create",
  async payload => {
    const response = await apiService.testconnector_post_googlecom_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const testconnector_response_post_TestingsSlice = createSlice({
  name: "testconnector_response_post_Testings",
  initialState,
  reducers: {},
  extraReducers: {
    [testconnector_post_googlecom_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [testconnector_post_googlecom_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [testconnector_post_googlecom_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  testconnector_post_googlecom_create,
  slice: testconnector_response_post_TestingsSlice
}
