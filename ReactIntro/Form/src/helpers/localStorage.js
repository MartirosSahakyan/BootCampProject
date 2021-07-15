export function updateLocalStorage({ name, pass, city, subject }) {
    localStorage.setItem("name", name);
    localStorage.setItem("pass", pass);
    localStorage.setItem("city", city);
    localStorage.setItem("subject", subject);
  }