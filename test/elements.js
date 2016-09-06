var test = require('tape')
var vdom = require('virtual-dom')
var hyperx = require('../')
var hx = hyperx(tree)

function tree(tagName, attr, children) {
  return [tagName, attr, children || []]
}

test('div', function (t) {
  var expected = ['div', {}, []]
  var actual = hx`<div></div>`
  t.deepEqual(actual, expected)
  t.end()
})

test('div selfclosing', function (t) {
  var expected = ['div', {}, []]
  var actual = hx`<div />`
  t.deepEqual(actual, expected)
  t.end()
})

test('div > span selfclosing', function (t) {
  var expected = ['div', {}, [['span', {}, []]]]
  var actual = hx`<div><span /></div>`
  t.deepEqual(actual, expected)
  t.end()
})

test('div > multi span', function (t) {
  var expected = ['div', {}, [['span', {}, []], ['span', {}, []]]]
  var actual = hx`<div><span></span><span></span></div>`
  t.deepEqual(actual, expected)
  t.end()
})

test('div > multi div', function (t) {
  var expected = ['div', {}, [['div', {}, []], ['div', {}, []]]]
  var actual = hx`<div><div></div><div></div></div>`
  t.deepEqual(actual, expected)
  t.end()
})

test('div > multi span selfclosing', function (t) {
  var expected = ['div', {}, [['span', {}, []], ['span', {}, []]]]
  var actual = hx`<div><span /><span /></div>`
  t.deepEqual(actual, expected)
  t.end()
})

test('div > multi div selfclosing', function (t) {
  var expected = ['div', {}, [['div', {}, []], ['div', {}, []]]]
  var actual = hx`<div><div /><div /></div>`
  t.deepEqual(actual, expected)
  t.end()
})

test('tag-list', function (t) {
  var expected = ['tag-list', {}, []]
  var actual = hx`<tag-list></tag-list>`
  t.deepEqual(actual, expected)
  t.end()
})

test('tag-list selfclosing', function (t) {
  var expected = ['tag-list', {}, []]
  var actual = hx`<tag-list />`
  t.deepEqual(actual, expected)
  t.end()
})

test('tag-list > multi div selfclosing', function (t) {
  var expected = ['tag-list', {}, [['div', {}, []], ['div', {}, []]]]
  var actual = hx`<tag-list />`
  t.deepEqual(actual, expected)
  t.end()
})

test('tag-list > multi tag selfclosing', function (t) {
  var expected = ['tag-list', {}, [['tag', {}, []], ['tag', {}, []]]]
  var actual = hx`<tag-list><tag /><tag /></tag-list>`
  t.deepEqual(actual, expected)
  t.end()
})

test('TagList', function (t) {
  var expected = ['TagList', {}, []]
  var actual = hx`<TagList></TagList>`
  t.deepEqual(actual, expected)
  t.end()
})

test('TagList selfclosing', function (t) {
  var expected = ['TagList', {}, []]
  var actual = hx`<TagList />`
  t.deepEqual(actual, expected)
  t.end()
})

test('TagList > multi div selfclosing', function (t) {
  var expected = ['TagList', {}, [['div', {}, []], ['div', {}, []]]]
  var actual = hx`<TagList />`
  t.deepEqual(actual, expected)
  t.end()
})

test('TagList > multi Tag selfclosing', function (t) {
  var expected = ['TagList', {}, [['Tag', {}, []], ['Tag', {}, []]]]
  var actual = hx`<TagList><Tag /><Tag /></TagList>`
  t.deepEqual(actual, expected)
  t.end()
})

