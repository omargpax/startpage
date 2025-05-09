/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * edited by : omargpx
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = { "/": "/", "deepl": "https://deepl.com/", "reddit": "https://reddit.com/", "maps": "https://maps.google.com/" }
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{ "id": "ybJrFH35FmdI0dOc", "label": "college", "bookmarks": [{ "id": "vuljUCL4UQ9HuZ2J", "label": "Portafolio", "url": "https://omargpax.vercel.app" }, { "id": "imShpXZboXqLF39K", "label": "Kundu Images", "url": "http://kundu-images.pages.dev" }, { "id": "eKPGRPmaTcyDzb6f", "label": "Quizz game", "url": "https://omargpax.github.io/portafolio/quiz1.html" }] }, { "id": "3HM2nYTbdZB1kMXp", "label": "devJobs", "bookmarks": [{ "id": "eKpfFbNAcXC8YEKJ", "label": "Lemon", "url": "https://lemon.io" }, { "id": "uPORlgoCHNKJMoxk", "label": "arc()", "url": "https://arc.dev" }, { "id": "CaWzmdttITSGGR1C", "label": "devJob", "url": "https://en.devjobs.at" }] }, { "id": "GNOOfV8rRLmN6lPI", "label": "media", "bookmarks": [{ "id": "VPAowMC2dsqY0vQ3", "label": "Youtube", "url": "https://www.youtube.com" }, { "id": "82TRQKHy9Uu3rUmh", "label": "Twitch", "url": "https://twitch.com" }, { "id": "gMOT2wHDfyMzMzuy", "label": "Reddit", "url": "https://reddit.com" }] }, { "id": "mcVg4fL2hZja0yW7", "label": "music", "bookmarks": [{ "id": "nD2swQlN9cR5TMhv", "label": "PlayList", "url": "https://open.spotify.com/playlist/7jhrFxl7xSDBzVTQki74ug?go=1&sp_cid=c930e9678606960424212d24609b8581&utm_source=embed_player_p&utm_medium=desktop&nd=1" }, { "id": "nD2swQlN9cR5TMñhv", "label": "Spotify", "url": "https://open.spotify.com" }, { "id": "5Gqj1OX6fMpsOXvN", "label": "Mail", "url": "https://outlook.office.com/mail/?actSwt=true" }] }]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
