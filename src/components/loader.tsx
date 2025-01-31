const show = () => {
  const el = document.querySelector('.rw__loader_wrapper') as
    | HTMLElement
    | undefined
  if (el) {
    el.style.display = 'block'
  }
}

const hide = () => {
  const el = document.querySelector('.rw__loader_wrapper') as
    | HTMLElement
    | undefined
  if (el) {
    el.style.display = 'none'
  }
}

export default { show, hide }
