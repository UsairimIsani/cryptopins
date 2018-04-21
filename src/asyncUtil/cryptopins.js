import apiContants from "./apiContants";
let headers = new Headers();
headers.append(
  "Authentication",
  localStorage.getItem("token") || "NO TOKEN AVAILABLE"
);
export default {
  get(url) {
    return fetch(`${apiContants.api}/${url}`);
  },
  post(url, data) {
    return fetch(`${apiContants.api}/${url}`, {
      headers,
      method: "POST",
      body: data
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
