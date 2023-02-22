const {
  symlink,
  unlink,
  readdirSync,
  existsSync,
} = require('fs')


const getList = (source, type = 'directory') => {
  return readdirSync(source, { withFileTypes: true })
    .filter(dirent => {
      if (type === 'file') return dirent.isFile()
      if (type === 'symbolic') return dirent.isSymbolicLink()
      return dirent.isDirectory()
    })
    .map(dirent => dirent.name)
}


const setSymbolicLinks = (panels, source) => {
  const reg = /\.vue$/
  panels.forEach(panel => {
    if (!reg.test(panel)) return
    symlink(`${source}/${panel}`, `src/backstage/panels/${panel}`, err => {
      if (err) {
        console.log(err)
      }
    })
  })
}

const createSymbolicLinks = () => {
  const staticPath = '/src/backstage/pages'
  const pageDirs = getList(`.${staticPath}`)
  if (!pageDirs.length) return
  pageDirs.forEach(page => {
    if (!existsSync(`.${staticPath}/${page}/panels`)) return
    const panels = getList(`.${staticPath}/${page}/panels`, 'file')
    const source = `../../..${staticPath}/${page}/panels`
    setSymbolicLinks(panels, source)
  })
}

const removeSymbolicLinks = links => {
  links.forEach(link => {
    unlink(`./src/backstage/panels/${link}`, err => {
      if (err) {
        console.log(err)
      }
    })
  })
}

const symbolicLinks = getList('./src/backstage/panels', 'symbolic')
if (symbolicLinks.length) {
  removeSymbolicLinks(symbolicLinks)
}

createSymbolicLinks()
