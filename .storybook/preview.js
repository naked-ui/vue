import Vue from 'vue'

function isObject(ob) {
  return ob === Object(ob)
}

function deepSearch(object, key) {
  if (object.hasOwnProperty(key)) return object[key]
  let ob,
    i,
    nextOb,
    keys = Object.keys(object)
  for (i = keys.length; i--; ) {
    nextOb = object[keys[i]]
    if (isObject(nextOb)) {
      ob = deepSearch(nextOb, key)
      if (ob) return ob
    }
  }
  return undefined // more verbose result for `not found`
}

Vue.prototype.$super = function (options) {
  return new Proxy(options, {
    get: (options, name) => {
      const res = deepSearch(options, name)
      if (typeof res === 'function') return res.bind(this)
      return res
    }
  })
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      method: '',
      order: ['Core', 'Form', 'Content'],
      locales: ''
    }
  }
}
