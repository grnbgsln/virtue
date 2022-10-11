class LoginPage {
    get txtEmail() {
        return $(`input[placeholder="E-mail"]`);
    }

    get cbCaptcha() {
        return $("#recaptcha iframe:nth-child(1)");
    }

    get txtSandi() {
        return $(`input[placeholder="Sandi"]`);
    }

    get btnMasuk() {
        return $(".loginBtn");
    }

    async verifyPage() {
        await this.txtEmail.waitForDisplayed();
        await expect(this.txtEmail).toBeDisplayed();
        await this.txtSandi.waitForDisplayed();
        await expect(this.txtSandi).toBeDisplayed();
        await this.cbCaptcha.waitForDisplayed();
        await expect(this.cbCaptcha).toBeDisplayed();
        await this.btnMasuk.waitForDisplayed();
        await expect(this.btnMasuk).toBeDisplayed();
        await expect(browser).toHaveUrl(`${browser.options.baseUrl}/signin`);
    }

    async setLogin(email, sandi) {
        await this.txtEmail.setValue(email);
        await this.txtSandi.setValue(sandi);
        await this.btnMasuk.click();
    }
    async setClickLamaran() {
        await $(`[name="default"]`).click()
    }
    async setLogout() {
        await $('[class="profilePict"]').click()
        await $('//li[@class="menu-item d-flex"]//*[text()="Keluar"]').click()
    }
    async setProfileclick(){
        await $('[class="profilePict"]').click()
        await $('//li[@class="menu-item d-flex"]//*[text()="Profil"]').click()
    }
}

export default new LoginPage();