const headerLinksContainer = document.createElement("div")
headerLinksContainer.innerHTML = `
<div class="header-links">
  <a href="/">Home</a>
  <a href="/interaction-click/">Interactive: Click</a>
  <a href="/interaction-mousemove/">Interactive: Mousemove</a>
</div>
<style>
  .header-links {
    height: 50px;
    background: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-links a {
    margin: 0 10px;
  }
</style>
`
document.body.prepend(headerLinksContainer)