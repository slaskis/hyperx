var test = require('tape')
var vdom = require('virtual-dom')
var hyperx = require('../')
var hx = hyperx(vdom.h)

test('1 component', function (t) {
  const App = () => hx`<div>app</div>`

  t.equal(vdom.create(App()).toString(), '<div>app</div>')
  t.end()
})

test('2 components', function (t) {
  const Header = () => hx`<header><a>Home</a><a>Away</a></header>`
  const App = () => hx`<div>${Header()}</div>`

  t.equal(vdom.create(App()).toString(), '<div><header><a>Home</a><a>Away</a></header></div>')
  t.end()
})

test('2 components + text', function (t) {
  const Header = () => hx`<header><a>Home</a><a>Away</a></header>`
  const App = () => hx`<div>hello ${Header()}</div>`

  t.equal(vdom.create(App()).toString(), '<div>hello <header><a>Home</a><a>Away</a></header></div>')
  t.end()
})

test('3 components', function (t) {
  const Item = props => hx`<li>${props.name}</li>`
  const List = props => hx`<ul>${props.items.map(item => Item(item))}</ul>`
  const App = props => hx`<div>${List({items: props.items})}</div>`

  const items = [{name: 'Alice'}, {name: 'Bob'}]

  t.equal(vdom.create(App({items: items})).toString(), '<div><ul><li>Alice</li><li>Bob</li></ul></div>')
  t.end()
})

test('3 components + text', function (t) {
  const Item = props => hx`<li>${props.name}</li>`
  const List = props => hx`<ul>${props.items.map(Item)}</ul>`
  const App = props => hx`<div>hello ${List({items: props.items})}</div>`

  const items = [{name: 'Alice'}, {name: 'Bob'}]

  t.equal(vdom.create(App({items: items})).toString(), '<div>hello <ul><li>Alice</li><li>Bob</li></ul></div>')
  t.end()
})
