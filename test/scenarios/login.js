import HomePage from "../pageobjects/home.page"
import Header from '../pageobjects/header.page'
import LoginPage from '../pageobjects/login.page'

describe('Login - Positive Case', () => {
    it('As a guest I can go to Login page', async () => {
        await HomePage.open();
        await Header.verifyPage();
        await Header.clickMasuk();
        await LoginPage.verifyPage();
    });
    it('As a user, I can login successfully', async () => {
        await LoginPage.setLogin('kandidatAT1@yopmail.com', '123');
        await Header.verifyLoggedIn('reza tester');
    });
})