import apiContants from "./apiContants";
import store from "../store";
import Vue from "vue";
export function setHeaders() {
  let headers = new Headers();
  if (localStorage.getItem("rememberMe")) {
    headers.append("x-access-token", getTokenInLocalStorage().token);
  } else {
    headers.append("x-access-token", store.state.User.user.token);
  }
  headers.append("Accept", "application/json, text/plain, */*");
  headers.append("Content-Type", "application/json");
  return headers;
}

const cryptopins = {
  get(url) {
    return fetch(`${apiContants.api}/${url}`, { headers: setHeaders() });
  },
  post(url, data) {
    return fetch(`${apiContants.api}/${url}`, {
      headers: setHeaders(),
      method: "POST",
      body: JSON.stringify(data)
    });
  },
  put(url, data) {
    return fetch({
      headers: setHeaders(),
      method: "PUT",
      url: `${apiContants.api}/${url}/`,
      formData: data
    });
  },
  delete(url, data) {
    return fetch({
      headers: setHeaders(),
      method: "DELETE",
      url: `${apiContants.api}/${url}/`,
      body: data
    });
  },
  postWithProgress(url, data) {
    let formData = new FormData();
    formData.append({
      headers: setHeaders(),
      ...data
    });
    let xhr = new XMLHttpRequest();
    xhr.open(`${apiContants.api}/${url}/`);
    xhr.send(formData);
    return xhr;
  }
};
export function setTokenInLocalStorage({ data }) {
  localStorage.setItem("user", JSON.stringify(data.user._id) || "NO USER");
  localStorage.setItem("token", JSON.stringify(data.token) || "NO TOKEN");
}
export function getTokenInLocalStorage() {
  let user = localStorage.getItem("user");
  let token = localStorage.getItem("token");
  return {
    user: JSON.parse(user),
    token: JSON.parse(token)
  };
}
export function Authenticate() {
  return new Promise((resolve, reject) => {
    cryptopins.get("user/me").then(res => {
      res.json().then(me => {
        if (me.success) {
          Vue.set(store.state.User, "user", me.data);
          resolve(me);
        } else {
          reject(me);
        }
      });
    });
  });
}
export default cryptopins;
