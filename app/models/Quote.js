export class Quote {
  constructor(data) {
    this.quote = data.content
    this.author = data.author
  }
  get quoteHtmlTemplate() {
    return `
      <div class="container bg-dark mt-5 p-2 rounded bg-opacity">
        <div class="row text-center">
          <div class="col-12">
            <h1 class="secret-reveal">${this.quote}</h1>
            <div class="row d-flex justify-content-end secret-area">
              <div class="col-4 bg-dark">
              <h6 class="fw-bold">-${this.author}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
`
  }
}