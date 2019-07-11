const show = () => {
  const el = document.querySelector("rw__loader_wrapper");
  if (el) {
    el.style.display = "block";
  }
};

const hide = () => {
  const el = document.getElementsByClassName("rw__loader_wrapper");
  if (el) {
    el.style.display = "none";
  }
};

export default { show, hide };
