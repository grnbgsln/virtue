import headerPage from "../pageobjects/header.page";
import homePage from "../pageobjects/home.page";
import loginPage from "../pageobjects/login.page";
import lowonganPage from "../pageobjects/lowongan.page";
import registerPage from "../pageobjects/register.page";

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
    afterAll(async () => {
        await loginPage.setLogout()
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


describe('@THRA-5603  @xsigerin2642 Input internship data pada virtue', () => {
    it('@THRA-5617 @xsigerin2642 Add internship data di edit profile virtue jika tidak isi mandatory ', async () => {
        await homePage.open();
        await headerPage.clickMasuk()
        await loginPage.setLogin('kandidatAT1@yopmail.com', '123');
        await headerPage.verifyLoggedIn('reza tester');
        await loginPage.setProfileclick()
        await registerPage.verifySectionMagang()
        await registerPage.setClickTambahMagang()
        await registerPage.setNamaInstitusiMagang("PT SUka Cita")
        await registerPage.setSubmitMagang()
        let err = true
        if (err) {
            await registerPage.setErrMsg('Silakan melengkapi data Magang/PKL')
            await lowonganPage.setOkModalInfomasi()
            await registerPage.setButtonBatal()
        }
        await loginPage.setLogout()

    })
    it('@THRA-5616 @xsigerin2642 Add internship data di edit profile virtue jika pilih hingga saat ini ', async () => {
        await homePage.open();
        await headerPage.clickMasuk()
        await loginPage.setLogin('kandidatAT1@yopmail.com', '123');
        await headerPage.verifyLoggedIn('reza tester');
        await loginPage.setProfileclick()
        await registerPage.verifySectionMagang()
        await registerPage.setClickTambahMagang()
        const dataMagang = [
            {
                nama: "PT MULIA TBK",
                fungsi: "Education",
                industi: "Education",
                mulai: "2022-01",
                selesai: "Hingga saat ini",
                desc: "Mantap"
            }
        ]
        let count = 0
        for (const obj of dataMagang) {
            await registerPage.setNamaInstitusiMagang(obj.nama)
            await registerPage.setFungsiMagang(obj.fungsi)
            await registerPage.setIndustriMagang(obj.industi)
            await registerPage.setStartDate(obj.mulai)
            await registerPage.setEndaDate(obj.selesai)
            await registerPage.setDeskripsiMagang(obj.desc)
            await registerPage.setSubmitMagang()
            count++
            if (count < dataMagang.length) {
                await registerPage.setClickTambahMagang()
            }
        }
        await loginPage.setLogout()
    })
    it('@THRA-5614 @xsigerin2642 Add internship data di confirm profile virtue jika tidak isi mandatory', async () => {
        await homePage.open();
        await headerPage.clickMasuk()
        await loginPage.setLogin('kandidatAT1@yopmail.com', '123');
        await headerPage.verifyLoggedIn('reza tester');
        let lamaran = lowonganPage.setKeranjangLowongan('Pilih Lowongan 1 dari 1000')
        if (lamaran) {
            await lowonganPage.setHapusLamaran("Pilih Lowongan 1 dari 1000", "579")
            await lowonganPage.setOkModalInfomasi()
        }
        await headerPage.clickCariLowongan();
        await lowonganPage.verifypageLowongan()
        await lowonganPage.setLamarCardVacancy("VACANCY VIRTUE JULI 2022")
        await lowonganPage.setModalInfomasi("Sukses!")
        await lowonganPage.setOkModalInfomasi()
        await lowonganPage.setClickAjukanLamaran('Pilih Lowongan 1 dari 1000')
        await registerPage.verifySectionMagang()
        await registerPage.setClickTambahMagang()
        await registerPage.setNamaInstitusiMagang("PT SUka Cita")
        await registerPage.setSubmitMagang()
        let err = true
        if (err) {
            await registerPage.setErrMsg('Silakan melengkapi data Magang/PKL')
            await lowonganPage.setOkModalInfomasi()
            await registerPage.setButtonBatal()
        }
        await loginPage.setLogout()
    })
    it('@THRA-5613 @xsigerin2642 Add internship data di confirm profile virtue jika tidak isi mandatory', async () => {
        await homePage.open();
        await headerPage.clickMasuk()
        await loginPage.setLogin('kandidatAT1@yopmail.com', '123');
        await headerPage.verifyLoggedIn('reza tester');
        let lamaran = lowonganPage.setKeranjangLowongan('Pilih Lowongan 1 dari 1000')
        if (lamaran) {
            await lowonganPage.setHapusLamaran("Pilih Lowongan 1 dari 1000", "579")
            await lowonganPage.setOkModalInfomasi()
        }
        await headerPage.clickCariLowongan();
        await lowonganPage.verifypageLowongan()
        await lowonganPage.setLamarCardVacancy("VACANCY VIRTUE JULI 2022")
        await lowonganPage.setModalInfomasi("Sukses!")
        await lowonganPage.setOkModalInfomasi()
        await lowonganPage.setClickAjukanLamaran('Pilih Lowongan 1 dari 1000')
        await registerPage.verifySectionMagang()
        await registerPage.setClickTambahMagang()
        const dataMagang = [
            {
                nama: "PT MULIA TBK",
                fungsi: "Education",
                industi: "Education",
                mulai: "2022-01",
                selesai: "Hingga saat ini",
                desc: "Mantap"
            }
        ]
        let count = 0
        for (const obj of dataMagang) {
            await registerPage.setNamaInstitusiMagang(obj.nama)
            await registerPage.setFungsiMagang(obj.fungsi)
            await registerPage.setIndustriMagang(obj.industi)
            await registerPage.setStartDate(obj.mulai)
            await registerPage.setEndaDate(obj.selesai)
            await registerPage.setDeskripsiMagang(obj.desc)
            await registerPage.setSubmitMagang()
            count++
            if (count < dataMagang.length) {
                await registerPage.setClickTambahMagang()
            }
        }
        await loginPage.setLogout()
        
    })
})