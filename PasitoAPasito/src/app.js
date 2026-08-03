const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [
          require('../image-targets/Tarjeta_Ashley.json'),
          require('../image-targets/Targeta.json')
    ],
  })
}
window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)