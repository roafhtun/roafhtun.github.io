window.onload = function () {
  const favicon = document.getElementById('favicon')
  const pageTitle = document.title
  const attentionMessage = 'Roaf Htun is here'

  document.addEventListener('visibilitychange', function (e) {
    const isPageActive = !document.hidden
    toggle(isPageActive)
  })

  function toggle(isPageActive) {
    if (isPageActive) {
      document.title = pageTitle
      favicon.href = 'https://raw.githubusercontent.com/roafhtun/portfolio/main/images/1693868899805_2.jpg'
    } else {
      document.title = attentionMessage
      favicon.href = 'https://raw.githubusercontent.com/roafhtun/portfolio/main/images/1693868899805_2.jpg'
    }
  }
}
