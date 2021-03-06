import axios from "axios"
const plugin = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/7307/storyboard/8491/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const newConnectortestttt = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/12879/storyboard/11862/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const mobileoctAPI = axios.create({
  baseURL: "https://mobile-77-oct-dev-12879.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_customtext_list(action) {
  return mobileoctAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read(action) {
  return mobileoctAPI.get(`/api/v1/customtext/${action.id}/`)
}
function api_v1_customtext_update(action) {
  return mobileoctAPI.put(`/api/v1/customtext/${action.id}/`, {
    data: action.data
  })
}
function api_v1_customtext_partial_update(action) {
  return mobileoctAPI.patch(`/api/v1/customtext/${action.id}/`, {
    data: action.data
  })
}
function api_v1_hgfhhggj_list(action) {
  return mobileoctAPI.get(`/api/v1/hgfhhggj/`)
}
function api_v1_hgfhhggj_create(action) {
  return mobileoctAPI.post(`/api/v1/hgfhhggj/`, { data: action.data })
}
function api_v1_hgfhhggj_read(action) {
  return mobileoctAPI.get(`/api/v1/hgfhhggj/${action.id}/`)
}
function api_v1_hgfhhggj_update(action) {
  return mobileoctAPI.put(`/api/v1/hgfhhggj/${action.id}/`, {
    data: action.data
  })
}
function api_v1_hgfhhggj_partial_update(action) {
  return mobileoctAPI.patch(`/api/v1/hgfhhggj/${action.id}/`, {
    data: action.data
  })
}
function api_v1_hgfhhggj_delete(action) {
  return mobileoctAPI.delete(`/api/v1/hgfhhggj/${action.id}/`)
}
function api_v1_homepage_list(action) {
  return mobileoctAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read(action) {
  return mobileoctAPI.get(`/api/v1/homepage/${action.id}/`)
}
function api_v1_homepage_update(action) {
  return mobileoctAPI.put(`/api/v1/homepage/${action.id}/`, {
    data: action.data
  })
}
function api_v1_homepage_partial_update(action) {
  return mobileoctAPI.patch(`/api/v1/homepage/${action.id}/`, {
    data: action.data
  })
}
function api_v1_login_create(action) {
  return mobileoctAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(action) {
  return mobileoctAPI.post(`/api/v1/signup/`, { data: action.data })
}
function rest_auth_login_create(action) {
  return mobileoctAPI.post(`/rest-auth/login/`, { data: action.data })
}
function rest_auth_logout_list(action) {
  return mobileoctAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(action) {
  return mobileoctAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(action) {
  return mobileoctAPI.post(`/rest-auth/password/change/`, { data: action.data })
}
function rest_auth_password_reset_create(action) {
  return mobileoctAPI.post(`/rest-auth/password/reset/`, { data: action.data })
}
function rest_auth_password_reset_confirm_create(action) {
  return mobileoctAPI.post(`/rest-auth/password/reset/confirm/`, {
    data: action.data
  })
}
function rest_auth_registration_create(action) {
  return mobileoctAPI.post(`/rest-auth/registration/`, { data: action.data })
}
function rest_auth_registration_verify_email_create(action) {
  return mobileoctAPI.post(`/rest-auth/registration/verify-email/`, {
    data: action.data
  })
}
function rest_auth_user_read(action) {
  return mobileoctAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(action) {
  return mobileoctAPI.put(`/rest-auth/user/`, { data: action.data })
}
function rest_auth_user_partial_update(action) {
  return mobileoctAPI.patch(`/rest-auth/user/`, { data: action.data })
}
export const apiService = {
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_hgfhhggj_list,
  api_v1_hgfhhggj_create,
  api_v1_hgfhhggj_read,
  api_v1_hgfhhggj_update,
  api_v1_hgfhhggj_partial_update,
  api_v1_hgfhhggj_delete,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
