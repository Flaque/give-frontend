import got from "got";
import FormData from "form-data";

export const register = (email, password) => {
  const form = new FormData();
  form.append("email", email);
  form.append("password", password);

  return got.post("localhost:8080/customers/new", {
    body: form
  });
};
