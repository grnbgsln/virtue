import headerPage from "../pageobjects/header.page";
import homePage from "../pageobjects/home.page";
import loginPage from "../pageobjects/login.page";
import lowonganPage from "../pageobjects/lowongan.page";

describe('Cari Lowongan guest - Positive Case', () => {
    beforeEach(async () => {
        await homePage.open();
        await browser.pause(1000)
        await headerPage.clickCariLowongan();
    })
    it('As a guest I can go to Cari Lowongan Page page', async () => {
        await lowonganPage.verifypageLowongan();
    });
    it('As a guest i can click Cari Bedasarkan perusahaan', async () => {
        await lowonganPage.verifypageLowongan();
        await lowonganPage.setCariBerdasarkanPerusahaan()
        await lowonganPage.setDataNotFound()
    })
    it('As a guest i can click Cari Bedasarkan perusahaan dan Unactive cari berdasarkan perusahaan', async () => {
        await lowonganPage.verifypageLowongan();
        await lowonganPage.setCariBerdasarkanPerusahaan()
        await lowonganPage.setNonAktifCariBerdasarkanperusahaan()
        await lowonganPage.setVerifyCardSearch("VACANCY VIRTUE JULI 2022")
    })
    it('As a guest i can click Cari Bedasarkan fungsi', async () => {
        await lowonganPage.verifypageLowongan();
        await lowonganPage.setCariBerdasarkanFungsi("0", "Accounting and Tax")
        await lowonganPage.setKriteriaPencarian()
    })
    it('As a guest i can click Cari Bedasarkan fungsi dan Unactive cari berdasarkan fungsi ', async () => {
        await lowonganPage.verifypageLowongan();
        await lowonganPage.setCariBerdasarkanFungsi("0", "Accounting and Tax")
        await lowonganPage.setNonAktifCariBerdasarkanFungsi("0", "Accounting and Tax")
        await lowonganPage.setVerifyCardSearch("VACANCY VIRTUE JULI 2022")
    })
    it('As a Guest i can click baca Selengkapnya', async () => {
        await lowonganPage.verifypageLowongan()
        await lowonganPage.setSelengkapnya("579")
        await lowonganPage.setVerifyCardSelengkapnya("VACANCY VIRTUE JULI 2022")
    })
    it('As a Guest i can click lamar dan ketika muncul pop up klik batal', async () => {
        await lowonganPage.verifypageLowongan()
        await lowonganPage.setLamarCardVacancy("VACANCY VIRTUE JULI 2022")
        await lowonganPage.setModalInfomasi("Untuk melamar Anda harus login terlebih dahulu")
        await lowonganPage.setbatalModalInfomasi()
    })
    it('As a Guest i can click lamar dan ketika muncul pop up OK', async () => {
        await lowonganPage.verifypageLowongan()
        await lowonganPage.setLamarCardVacancy("VACANCY VIRTUE JULI 2022")
        await lowonganPage.setModalInfomasi("Untuk melamar Anda harus login terlebih dahulu")
        await lowonganPage.setOkModalInfomasi()
        await loginPage.verifyPage()
    })
})

describe('Cari Lowongan candidate - Positive Case', () => {
    beforeAll(async () => {
        await homePage.open();
        await browser.pause(1000)
        await headerPage.clickMasuk()
        await loginPage.setLogin('kandidatAT1@yopmail.com', '123');
        await browser.pause(1000)
        await headerPage.verifyLoggedIn('reza tester');
    })
    beforeEach(async () => {
        await homePage.open();
        await browser.pause(1000)
        await headerPage.clickCariLowongan();
    })
    it('As a candidates I can go to Cari Lowongan Page page', async () => {
        await lowonganPage.verifypageLowongan();
    });
    it('As acandidatesi can click Cari Bedasarkan perusahaan', async () => {
        await lowonganPage.verifypageLowongan();
        await lowonganPage.setCariBerdasarkanPerusahaan()
        await lowonganPage.setDataNotFound()
    })
    it('As a candidates i can click Cari Bedasarkan perusahaan dan Unactive cari berdasarkan perusahaan', async () => {
        await lowonganPage.verifypageLowongan();
        await lowonganPage.setCariBerdasarkanPerusahaan()
        await lowonganPage.setNonAktifCariBerdasarkanperusahaan()
        await lowonganPage.setVerifyCardSearch("VACANCY VIRTUE JULI 2022")
    })
    it('As a candidates i can click Cari Bedasarkan fungsi', async () => {
        await lowonganPage.verifypageLowongan();
        await lowonganPage.setCariBerdasarkanFungsi("0", "Accounting and Tax")
        await lowonganPage.setKriteriaPencarian()
    })
    it('As a candidates i can click Cari Bedasarkan fungsi dan Unactive cari berdasarkan fungsi ', async () => {
        await lowonganPage.verifypageLowongan();
        await lowonganPage.setCariBerdasarkanFungsi("0", "Accounting and Tax")
        await lowonganPage.setNonAktifCariBerdasarkanFungsi("0", "Accounting and Tax")
        await lowonganPage.setVerifyCardSearch("VACANCY VIRTUE JULI 2022")
    })
    it('As a candidates i can click baca Selengkapnya', async () => {
        await lowonganPage.verifypageLowongan()
        await lowonganPage.setSelengkapnya("579")
        await lowonganPage.setVerifyCardSelengkapnya("VACANCY VIRTUE JULI 2022")
    })

    it('As a candidates i can click lamar dan masuk kekeranjang Lamaran', async () => {
        await lowonganPage.verifypageLowongan()
        await lowonganPage.setLamarCardVacancy("VACANCY VIRTUE JULI 2022")
        await lowonganPage.setModalInfomasi("Sukses!")
        await lowonganPage.setKeranjangLowongan("Pilih Lowongan 1 dari 1000")
    })
    it(' @THRA-6776 @xsigerin2642 As candidate, I want to search Vacancy in Virtue with multi keyword', async () => {
        await lowonganPage.verifypageLowongan();
        await lowonganPage.setCariBerdasarkanFungsi("0", "Accounting and Tax")
        await lowonganPage.setCariBerdasarkanPerusahaan()
        await lowonganPage.setKriteriaPencarian()
    })
})

describe(' @THRA-6835  @xsigerin2642 FLK and Platform 2', () => {
    it('@THRA-6865 @xsigerin2642 As Candidate, I want to add expected salary field in register Virtue with character  ', async () => {
        await homePage.open();
        await headerPage.clickCariLowongan();
    })
})