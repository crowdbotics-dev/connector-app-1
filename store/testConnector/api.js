import axios from "axios"
import {
  TEST_CONNECTOR_USERNAME,
  TEST_CONNECTOR_PASSWORD
} from "react-native-dotenv"
const testConnector = axios.create({
  baseURL: "https://google.com",
  auth: {
    username: TEST_CONNECTOR_USERNAME,
    password: TEST_CONNECTOR_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function testconnector_post_googlecom_create(payload) {
  return testConnector.post(`/google.com`, {
    params: { new_param: payload.new_param }
  })
}
export const apiService = { testconnector_post_googlecom_create }
