import homePage from "../pageobjects/home.page";
import header from "../pageobjects/header.page"
import loginPage from "../pageobjects/login.page"

describe('Homepage guest - Positive Case', () => {
    beforeAll(async () => {
        await browser.execute(() => {
            document.body.style.zoom = '50%'
        })
    })

    it('As a guest I can go to HomePage', async () => {
        await homePage.open();
    });
    it('As a guest I can go to Cari Lowongan', async () => {
        await homePage.open();
        await header.clickCariLowongan()
    });
    it('As a guest I can go to Tentang Astra Virtue', async () => {
        await homePage.open();
        await header.clickTentang
    });
    it('As a guest I can go to Masuk', async () => {
        await homePage.open();
        await header.clickMasuk()
    });
    it('As a guest I can go to Daftar', async () => {
        await homePage.open();
        await header.clickDaftar()
    });
    it('As a guest I can go to Tanya Jawab', async () => {
        await homePage.open();
        await header.clickTanyaJawab()
    });
    it('As a guest I can Click Tanya Astra', async () => {
        await homePage.open();
        await homePage.settanyaJawab("Apa yang harus saya lakukan di STEP 2?")

    });
    it('As a guest I can click Bagaimana cara mengisi tanggal (lahir, mulai dan akhir kuliah) dengan mudah ?', async () => {
        await homePage.open();
        await homePage.settanyaJawab("Bagaimana cara mengisi tanggal (lahir, mulai dan akhir kuliah) dengan mudah ?")

    });
    it('As a guest I can Click Apa yang harus saya lakukan pada STEP 3?', async () => {
        await homePage.open();
        await homePage.settanyaJawab("Apa yang harus saya lakukan pada STEP 3?")

    });

    it('As a guest I can Click tab Process Pendaftaran dan click Bagaimana cara memulai pendaftaran?', async () => {
        await homePage.open();
        await homePage.setPindahTanyaJawab("Proses Pendaftaran")
        await homePage.settanyaJawab("Bagaimana cara memulai pendaftaran?")

    });
    it('As a guest I can Click tab Process Pendaftaran dan click Bagaimana cara memulai pendaftaran?', async () => {
        await homePage.open();
        await homePage.setPindahTanyaJawab("Proses Pendaftaran")
        await homePage.settanyaJawab("Bagaimana cara memulai pendaftaran?")

    });
    it('As a guest I can Click tab Process Pendaftaran dan click Apa yang dimaksud dengan 3 Steps to Apply?', async () => {
        await homePage.open();
        await homePage.setPindahTanyaJawab("Proses Pendaftaran")
        await homePage.settanyaJawab("Apa yang dimaksud dengan 3 Steps to Apply?")

    });
    it('As a guest I can Click tab Process Pendaftaran dan click Contoh 2Kebersihan sangat menjadi masalah di sekolah. Ini terjadi karena banyak murid-murid yang tidak sadar akan kebersihan. Padahal “Kebersihan adalah sebagian dari iman”.', async () => {
        await homePage.open();
        await homePage.setPindahTanyaJawab("Proses Pendaftaran")
        await homePage.settanyaJawab("Contoh 2Kebersihan sangat menjadi masalah di sekolah. Ini terjadi karena banyak murid-murid yang tidak sadar akan kebersihan. Padahal “Kebersihan adalah sebagian dari iman”.")

    });


})
describe('Homepage candidate Login - Positive Case', () => {
    beforeAll(async () => {
        await homePage.open();
        await header.clickMasuk()
        await loginPage.setLogin('kandidatAT1@yopmail.com', '123');
        await header.verifyLoggedIn('reza tester');
    })

    it('As a candidate I can go to HomePage', async () => {
        await homePage.open();
    });
    it('As a candidate I can go to Cari Lowongan', async () => {
        await header.clickCariLowongan()
    });
    it('As a candidate I can go to Tentang Astra Virtue', async () => {
        await header.clickTentang
    });
    it('As a candidate I can go to Tanya Jawab', async () => {
        await header.clickTanyaJawab()
    });
    it('As a candidate I can Click Tanya Astra', async () => {
        await homePage.open();
        await homePage.settanyaJawab("Apa yang harus saya lakukan di STEP 2?")
    });
    it('As a candidate I can click Bagaimana cara mengisi tanggal (lahir, mulai dan akhir kuliah) dengan mudah ?', async () => {
        await homePage.open();
        await homePage.settanyaJawab("Bagaimana cara mengisi tanggal (lahir, mulai dan akhir kuliah) dengan mudah ?")
    });
    it('As a candidate I can Click Apa yang harus saya lakukan pada STEP 3?', async () => {
        await homePage.open();
        await homePage.settanyaJawab("Apa yang harus saya lakukan pada STEP 3?")
    });
    it('As a candidate I can Click tab Process Pendaftaran dan click Bagaimana cara memulai pendaftaran?', async () => {
        await homePage.open();
        await homePage.setPindahTanyaJawab("Proses Pendaftaran")
        await homePage.settanyaJawab("Bagaimana cara memulai pendaftaran?")
    });
    it('As a candidate I can Click tab Process Pendaftaran dan click Bagaimana cara memulai pendaftaran?', async () => {
        await homePage.open();
        await homePage.setPindahTanyaJawab("Proses Pendaftaran")
        await homePage.settanyaJawab("Bagaimana cara memulai pendaftaran?")
    });
    it('As a candidate I can Click tab Process Pendaftaran dan click Apa yang dimaksud dengan 3 Steps to Apply?', async () => {
        await homePage.open();
        await homePage.setPindahTanyaJawab("Proses Pendaftaran")
        await homePage.settanyaJawab("Apa yang dimaksud dengan 3 Steps to Apply?")
    });
    it('As a candidate I can Click tab Process Pendaftaran dan click Contoh 2Kebersihan sangat menjadi masalah di sekolah. Ini terjadi karena banyak murid-murid yang tidak sadar akan kebersihan. Padahal “Kebersihan adalah sebagian dari iman”.', async () => {
        await homePage.open();
        await homePage.setPindahTanyaJawab("Proses Pendaftaran")
        await homePage.settanyaJawab("Contoh 2Kebersihan sangat menjadi masalah di sekolah. Ini terjadi karena banyak murid-murid yang tidak sadar akan kebersihan. Padahal “Kebersihan adalah sebagian dari iman”.")
    });
    it('As a candidate I can go tab pilih lowongan', async () => {
        await loginPage.setClickLamaran()
    });

   
})