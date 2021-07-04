const backgroundImage = {
  type: Object,
  default() {
    return {}
  }
}
const backgroundVideo = {
  type: Object,
  default() {
    return {}
  }
}
const busyLabel = {
  type: String
}
const hasOverlay = {
  type: Boolean,
  default: false
}
const overlayColor = {
  type: String,
  default: '#000'
}
const overlayOpacity = {
  type: Number,
  default: 0.3
}

export {
  backgroundImage,
  backgroundVideo,
  busyLabel,
  hasOverlay,
  overlayColor,
  overlayOpacity
}

export default {
  backgroundImage,
  backgroundVideo,
  busyLabel,
  hasOverlay,
  overlayColor,
  overlayOpacity
}
