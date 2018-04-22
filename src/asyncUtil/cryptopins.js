import apiContants from "./apiContants";
let headers = new Headers();
headers.append(
  "Authentication",
  localStorage.getItem("token") || "NO TOKEN AVAILABLE"
);
headers.append("Accept", "application/json, text/plain, */*");
headers.append("Content-Type", "application/json");

export default {
  get(url) {
    return fetch(`${apiContants.api}/${url}`, { headers });
  },
  post(url, data) {
    return fetch(`${apiContants.api}/${url}`, {
      headers,
      method: "POST",
      body: JSON.stringify(data)
    });
  },
  put(url, data) {
    return fetch({
      headers,
      method: "PUT",
      url: `${apiContants.api}/${url}/`,
      formData: data
    });
  },
  delete(url, data) {
    return fetch({
      headers,
      method: "DELETE",
      url: `${apiContants.api}/${url}/`,
      body: data
    });
  },
  postWithProgress(url, data) {
    let formData = new FormData();
    formData.append({ headers, ...data });
    let xhr = new XMLHttpRequest();
    xhr.open(`${apiContants.api}/${url}/`);
    xhr.send(formData);
    return xhr;
  }
};
export function setTokenInLocalStorage(data) {
  localStorage.setItem("user", data.user._id);
  localStorage.setItem("token", data.user.token);
}
