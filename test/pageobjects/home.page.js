class HomePage {
    async open() {
        await browser.url(`${browser.options.baseUrl}`);
    }
    async settanyaJawab(click) {
        await $(`//*[text()="${click}"]`).click()
    }
    async setPindahTanyaJawab(data) {
        await $(`//*[text()="${data}"]`).click()
    }
  

}

export default new HomePage();