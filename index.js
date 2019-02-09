let marked = require('marked')

module.exports = function md(key, {headers, body}) {
  return {
    headers: {...headers, 'content-type':'text/html;charset=utf8'}, 
    body: marked.parse(body)
  }
}
