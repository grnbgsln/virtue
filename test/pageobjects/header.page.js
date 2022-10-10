class Header {
    get elemLogo() {
        return $(`a[href="/home"]`)
    }
    get elemBeranda() {
        return $(`a[href="/home"]`)
    }
    get elemCariLowongan() {
        return $(`a[href="/vacancy"]`)
    }
    get elemTentangAstraVirtue() {
        return $(`#about_text`)
    }
    get elemTanyaJawab() {
        return $(`#faq_text`)
    }
    get elemMasuk() {
        return $(`a[href="/signin"]`);
    }
    get elemDaftar() {
        return $(`a[href="/register"]`);
    }
    get elemUser() {
        return $(`//img[@class='profilePict']/../div`)
    }
    async verifyPage() {
        await this.elemMasuk.waitForDisplayed();
        await expect(this.elemMasuk).toBeDisplayed();
        await this.elemDaftar.waitForDisplayed();
        await expect(this.elemDaftar).toBeDisplayed();
    }
    async verifyLoggedIn(name) {
        await this.elemUser.waitForDisplayed();
        await expect(this.elemUser).toHaveText(name)
    }
    async clickMasuk() {
        await this.elemMasuk.click();
    }
    async clickDaftar() {
        await this.elemDaftar.click()
    }
    async clickTentang(){
        await this.elemTentangAstraVirtue.click()
    }
    async clickCariLowongan(){
        await this.elemCariLowongan.click()
    }
    async clickTanyaJawab(){
        await this.elemTanyaJawab.click()
    }
}
export default new Header();