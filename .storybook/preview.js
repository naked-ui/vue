import Vue from 'vue'

function isObject(ob) {
  return ob === Object(ob)
}

function deepSearch(object, key) {
  if (object.hasOwnProperty(key)) return object[key]
  let ob, i
  for (i = Object.keys(object).length; i--; ) {
    const nextObject = object[Object.keys(object)[i]]
    if (isObject(nextObject)) {
      ob = deepSearch(nextObject, key)
      if (ob != null) return ob
    }
  }
  return null
}

Vue.prototype.$super = function (options) {
  return new Proxy(options, {
    get: (options, name) => {
      const res = deepSearch(options, name)
      if (res) return res.bind(this)
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
