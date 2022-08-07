// Author: Jaicke Santos

const linkSession = document.querySelector('#links')

const renderLinks = async () => {
  const data = await fetchLinks()

  data.forEach(element => {
    let link    = createNode('a')

    link.href = element.url
    link.innerHTML = element.title
    link.classList.add('btn')
    link.target = '_blank'

    linkSession.appendChild(link)
  });
}

const createNode = (element) => {
  let node = document.createElement(element)

  return node
}

const fetchLinks = async () => {
  const headers = new Headers()
  const url = 'https://cami-biolinks-admin.herokuapp.com/api/v1/links'
  const secretKey = '88d3b4f6-56bf-4695-ac73-13d50f071085'

  headers.append("X-Secret-Key", secretKey);

  const APIResponse = await fetch(url, { method: 'GET', headers: headers })

  if (APIResponse.status == 200) {
    const data = await APIResponse.json()
    return data
  }
}

renderLinks()
