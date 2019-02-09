let test = require('tape')
let plugin = require('.')

test('env', t=> {
  t.plan(1)
  t.ok(plugin, 'exists')
})

let src = `
# foo
bar baz

- one
- two 
- three

*neato*
`
test('env', t=> {
  t.plan(1)
  let result = plugin('foo.md', {
    headers: {},
    body: src
  })
  t.ok(result, 'got result')
  console.log(result)
})
