var test = require('tape')
var vdom = require('virtual-dom')
var hyperx = require('../')
var hx = hyperx(vdom.h)

test('div', function (t) {
  var expected = `<div></div>`
  var tree = hx`<div></div>`
  t.equal(vdom.create(tree).toString(), expected)
  t.end()
})

test('div selfclosing', function (t) {
  var expected = `<div></div>`
  var tree = hx`<div />`
  t.equal(vdom.create(tree).toString(), expected)
  t.end()
})

test('div > span selfclosing', function (t) {
  var expected = `<div><span></span></div>`
  var tree = hx`<div><span /></div>`
  t.equal(vdom.create(tree).toString(), expected)
  t.end()
})

test('div > multi span selfclosing', function (t) {
  var expected = `<div><span></span><span></span></div>`
  var tree = hx`<div><span /><span /></div>`
  t.equal(vdom.create(tree).toString(), expected)
  t.end()
})

test('div > multi div selfclosing', function (t) {
  var expected = `<div><div></div><div></div></div>`
  var tree = hx`<div><div /><div /></div>`
  t.equal(vdom.create(tree).toString(), expected)
  t.end()
})

test('tag-list', function (t) {
  var expected = `<tag-list></tag-list>`
  var tree = hx`<tag-list></tag-list>`
  t.equal(vdom.create(tree).toString(), expected)
  t.end()
})

test('tag-list selfclosing', function (t) {
  var expected = `<tag-list></tag-list>`
  var tree = hx`<tag-list />`
  t.equal(vdom.create(tree).toString(), expected)
  t.end()
})

test('tag-list > multi div selfclosing', function (t) {
  var expected = `<tag-list><div></div><div></div><div></div><div></div></tag-list>`
  var tree = hx`<tag-list><div /><div /><div /><div /></tag-list>`
  t.equal(vdom.create(tree).toString(), expected)
  t.end()
})

test('tag-list > multi tag selfclosing', function (t) {
  var expected = `<tag-list><tag></tag><tag></tag><tag></tag><tag></tag></tag-list>`
  var tree = hx`<tag-list><tag /><tag /><tag /><tag /></tag-list>`
  t.equal(vdom.create(tree).toString(), expected)
  t.end()
})


test('TagList', function (t) {
  var expected = `<TagList></TagList>`
  var tree = hx`<TagList></TagList>`
  t.equal(vdom.create(tree).toString(), expected)
  t.end()
})

test('TagList selfclosing', function (t) {
  var expected = `<TagList></TagList>`
  var tree = hx`<TagList />`
  t.equal(vdom.create(tree).toString(), expected)
  t.end()
})

test('TagList > multi div selfclosing', function (t) {
  var expected = `<TagList><div></div><div></div><div></div><div></div></TagList>`
  var tree = hx`<TagList><div /><div /><div /><div /></TagList>`
  t.equal(vdom.create(tree).toString(), expected)
  t.end()
})

test('TagList > multi Tag selfclosing', function (t) {
  var expected = `<TagList><Tag></Tag><Tag></Tag><Tag></Tag><Tag></Tag></TagList>`
  var tree = hx`<TagList><Tag /><Tag /><Tag /><Tag /></TagList>`
  t.equal(vdom.create(tree).toString(), expected)
  t.end()
})


