import homePage from '../pageobjects/home.page'
import headerPage from '../pageobjects/header.page'
import register from '../pageobjects/register.page'
import lowonganPage from '../pageobjects/lowongan.page'
import loginPage from '../pageobjects/login.page'

describe('Register - Positive Case', () => {
    beforeAll(async () => {
        await browser.execute(() => {
            document.body.style.zoom = '50%'
        })
    })

    it('As a User i can Register', async () => {
        let count = 0
        await homePage.open()
        await headerPage.clickDaftar()
        await register.verifyPage()
        //zoom out

        //random username
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < 3; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        //end random user
        const dataRegister = {
            name: `Tester${result}`,
            jenisKelamin: 'Laki-laki',
            birthday: '2004-02-02',
            password: 'Astra123!',
            confirmPassword: 'Astra123!',
            email: `tester${result}@yopmail.com`,
            phone: '+6281721231412',
            year: 1,
            month: 0,
            salary: 50000000,
            domisili: 'Others',
            subdomisili: 'KABUPATEN LOMBOK TIMUR'
        }

        await register.setNameProfile(dataRegister.name)
        await register.setJenisKelamin(dataRegister.jenisKelamin)
        await register.setTanggalLahir(dataRegister.birthday)
        await register.setPassword(dataRegister.password)
        await register.setConfirmPassword(dataRegister.confirmPassword)
        await register.setEmail(dataRegister.email)
        await register.setNoTelp(dataRegister.phone)
        await register.setYoeYear(dataRegister.year)
        await register.setYoeMonth(dataRegister.month)
        await register.setSalary(dataRegister.salary)
        await register.setDomisili(dataRegister.domisili, dataRegister.subdomisili)


        //pendidikan
        await register.verifySectionPendidikan()
        await register.setClickTambahPendidikan()

        const dataPendidikan = [
            {
                gelar: 'Sarjana Dalam Negeri',
                institusi: 'Universitas Gunadarma',
                jurusan: 'Kedokteran',
                tahunMasuk: '2017',
                tahunLulus: '2021',
                gpa: '3.6'
            }
        ]

        for (const obj of dataPendidikan) {
            await browser.pause(1000)
            await register.setGelar(obj.gelar)
            await register.setGPA(obj.gpa)
            if (obj.institusi == "Others") {
                await register.setNamaInstitusi(obj.institusi)
                await register.setOtherNamaInstitusi(obj.name)
            } else {
                await register.setNamaInstitusi(obj.institusi)
            }

            if (obj.jurusan == "Others") {
                await register.setJuruasan(obj.jurusan)
                await register.setOtherJurusan(obj.jurusanField)
            } else {
                await register.setJuruasan(obj.jurusan)
            }
            await register.setStartYear(obj.tahunMasuk)
            await register.setgraduatedYear(obj.tahunLulus)
            count++
            await register.setSubmitPendidikan()
            if (count < dataPendidikan.length) {
                await register.setClickTambahPendidikan()
            }
        }

        //Organisasi
        await browser.pause(1000)
        await register.verifySectionOrganisasi()
        await register.setClickTambahOrganisasi()
        const dataOrganisasi = [
            {
                nama: 'Teknologi Bersama',
                lingkup: 'Jurusan',
                jabatan: 'Anggota'
            },
        ]
        count = 0
        for (const obj of dataOrganisasi) {
            await register.setNamaOrganisasi(obj.nama)
            await register.setLingkup(obj.lingkup)
            await register.setJabatan(obj.jabatan)
            await register.setSubmitOrganisasi()
            count++
            if (count < dataOrganisasi.length) {
                await register.setClickTambahOrganisasi()
            }
        }

        //magang
        await browser.pause(1000)
        await register.verifySectionMagang()
        await register.setClickTambahMagang()
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
        count = 0
        for (const obj of dataMagang) {
            await register.setNamaInstitusiMagang(obj.nama)
            await register.setFungsiMagang(obj.fungsi)
            await register.setIndustriMagang(obj.industi)
            await register.setStartDate(obj.mulai)
            await register.setEndaDate(obj.selesai)
            await register.setDeskripsiMagang(obj.desc)
            await register.setSubmitMagang()
            count++
            if (count < dataMagang.length) {
                await register.setClickTambahMagang()
            }
        }

        await browser.pause(1000)
        await register.verifySectionPengalaman()
        await register.setClickTambahPengalaman()
        const dataPengalaman = [
            {
                nama: "PT Test TBK",
                pangkat: "General Manager",
                tipe: 'Non Management Trainee',
                fungsi: "Education",
                industi: "Education",
                posisi: "Manager",
                mulai: "2022-01",
                selesai: "2022-04",
                desc1: 'Menyambung Kabel'
            }
        ]
        count = 0
        for (const obj of dataPengalaman) {
            await register.setNamaPerusahaan(obj.nama)
            await register.setPangkat(obj.pangkat)
            await register.setPosisi(obj.tipe)
            await register.setFungsiPengalaman1(obj.fungsi)
            await register.setIndustri(obj.industi)
            await register.setPosition(obj.posisi)
            await register.setStartDatePengalaman(obj.mulai)
            await register.setEndaDatePengalaman(obj.selesai)
            await register.setJobDesc1(obj.desc1)
            await register.setSubmitPengalaman()
            count++
            if (count < dataPengalaman.length) {
                await register.setClickTambahPengalaman()
            }
        }

        const setStatusPencarian = {
            status: 'Aktif',
            periode: 'Bulanan'
        }
        await browser.pause(1000)
        await register.verifySectionPencarianKeja()
        await register.setClickUbah()
        switch (setStatusPencarian.status) {
            case "Aktif":
                await register.setAktif()
                break;
            case "Pasif":
                await register.setPasif()
                break;
            case "Non Aktif":
                await register.setNonAktif()
                await register.setClickButtonOK()
                break;

        }

        if (setStatusPencarian.status !== 'Non Aktif') {
            switch (setStatusPencarian.periode) {
                case "Harian":
                    await register.setHarian()
                    await register.setClickButtonOK()
                    break;
                case "Mingguan":
                    await register.setMingguan()
                    await register.setClickButtonOK()
                    break;
                case "Bulanan":
                    await register.setBulanan()
                    await register.setClickButtonOK()
                    break;
            }
        }

        await register.setClickSimpan()

    })
})

describe(' @THRA-6835 @xsigerin2642 FLK and Platform 2 ', () => {
    it('@THRA-6865 @xsigerin2642 As Candidate, I want to add expected salary field in register Virtue with character  ', async () => {
        await homePage.open();
        await headerPage.clickDaftar()

        await register.setSalary("salary")
        await register.setErrMsg('Hanya format angka (0-9) yang diperbolehkan!')
    })
    it('@THRA-6864 @xsigerin2642 As Candidate, I want to add expected salary field in register Virtue with symbol  ', async () => {
        await homePage.open();
        await headerPage.clickDaftar()
        await browser.pause(1000)
        await register.setSalary("@")
        await register.setErrMsg('Hanya format angka (0-9) yang diperbolehkan!')
    })
    it('@THRA-6868 @xsigerin2642 As Candidate, I want to add expected salary field in register Virtue with combination of symbol, character and number ', async () => {
        await homePage.open();
        await headerPage.clickDaftar()
        await browser.pause(1000)
        await register.setSalary("s2@")
        await register.setErrMsg('Hanya format angka (0-9) yang diperbolehkan!')
    })
    it('@THRA-6867 @xsigerin2642 As Candidate, I want to add expected salary field in register Virtue with combination of character and number ', async () => {
        await homePage.open();
        await headerPage.clickDaftar()
        await browser.pause(1000)
        await register.setSalary("test12")
        await register.setErrMsg('Hanya format angka (0-9) yang diperbolehkan!')
    })
    it('@THRA-6866 @xsigerin2642 As Candidate, I want to add expected salary field in register Virtue with combination of symbol and number ', async () => {
        await homePage.open();
        await headerPage.clickDaftar()
        await browser.pause(1000)
        await register.setSalary("12@")
        await register.setErrMsg('Hanya format angka (0-9) yang diperbolehkan!')
    })
    it("@THRA-6853 @xsigerin2642 As Candidate, I want to add expected salary field in Edit profile Virtue with  combination of symbol, character and number", async () => {
        await homePage.open();
        await headerPage.clickMasuk()
        await loginPage.setLogin('kandidatAT1@yopmail.com', '123');
        await headerPage.verifyLoggedIn('reza tester');
        await loginPage.setProfileclick()
        await register.setSalary("s2@")
        await register.setErrMsg('Hanya format angka (0-9) yang diperbolehkan!')
        await loginPage.setLogout()
    })
    it("@THRA-6852 @xsigerin2642 As Candidate, I want to add expected salary field in Edit profile Virtue with combination of character and number", async () => {
        await homePage.open();
        await headerPage.clickMasuk()
        await loginPage.setLogin('kandidatAT1@yopmail.com', '123');
        await headerPage.verifyLoggedIn('reza tester');
        await loginPage.setProfileclick()
        await register.setSalary("test12")
        await register.setErrMsg('Hanya format angka (0-9) yang diperbolehkan!')
        await loginPage.setLogout()
    })
    it("@THRA-6851 @xsigerin2642 As Candidate, I want to add expected salary field in Edit profile Virtue with combination of symbol and number", async () => {
        await homePage.open();
        await headerPage.clickMasuk()
        await loginPage.setLogin('kandidatAT1@yopmail.com', '123');
        await headerPage.verifyLoggedIn('reza tester');
        await loginPage.setProfileclick()
        await register.setSalary("12@")
        await register.setErrMsg('Hanya format angka (0-9) yang diperbolehkan!')
        await loginPage.setLogout()
    })
    it("@THRA-6850  @xsigerin2642 As Candidate, I want to add expected salary field in Edit profile Virtue with character", async () => {
        await homePage.open();
        await headerPage.clickMasuk()
        await loginPage.setLogin('kandidatAT1@yopmail.com', '123');
        await headerPage.verifyLoggedIn('reza tester');
        await loginPage.setProfileclick()
        await register.setSalary("test")
        await register.setErrMsg('Hanya format angka (0-9) yang diperbolehkan!')
        await loginPage.setLogout()
    })
    it('@THRA-6849  @xsigerin2642 As Candidate, I want to add expected salary field in Edit profile Virtue with symbol',async()=>{
        await homePage.open();
        await headerPage.clickMasuk()
        await loginPage.setLogin('kandidatAT1@yopmail.com', '123');
        await headerPage.verifyLoggedIn('reza tester');
        await loginPage.setProfileclick()
        await register.setSalary("!@#$%")
        await register.setErrMsg('Hanya format angka (0-9) yang diperbolehkan!')
        await loginPage.setLogout()
    })
})

describe("@THRA-5603 @xsigerin2642 Input internship data pada virtue ", () => {
    it("@THRA-5609 @xsigerin2642 Add internship data di register virtue ", async () => {
        await homePage.open()
        await headerPage.clickDaftar()
        await register.verifyPage()
        await register.verifySectionMagang()
        await register.setClickTambahMagang()
        const dataMagang = [
            {
                nama: "PT MULIA TBK",
                fungsi: "Education",
                industi: "Education",
                mulai: "2022-01",
                selesai: "2022-04",
                desc: "Mantap"
            }
        ]
        let count = 0
        for (const obj of dataMagang) {
            await register.setNamaInstitusiMagang(obj.nama)
            await register.setFungsiMagang(obj.fungsi)
            await register.setIndustriMagang(obj.industi)
            await register.setStartDate(obj.mulai)
            await register.setEndaDate(obj.selesai)
            await register.setDeskripsiMagang(obj.desc)
            await register.setSubmitMagang()
            count++
            if (count < dataMagang.length) {
                await register.setClickTambahMagang()
            }
        }
    })
    it("@THRA-5610Add @xsigerin2642 internship data di register virtue jika pilih hingga saat ini ", async () => {
        await homePage.open()
        await headerPage.clickDaftar()
        await register.verifyPage()
        await register.verifySectionMagang()
        await register.setClickTambahMagang()
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
            await register.setNamaInstitusiMagang(obj.nama)
            await register.setFungsiMagang(obj.fungsi)
            await register.setIndustriMagang(obj.industi)
            await register.setStartDate(obj.mulai)
            await register.setEndaDate(obj.selesai)
            await register.setDeskripsiMagang(obj.desc)
            await register.setSubmitMagang()
            count++
            if (count < dataMagang.length) {
                await register.setClickTambahMagang()
            }
        }
    })
    it("@THRA-5611 @xsigerin2642 Add internship data di register virtue jika tidak isi mandatory", async () => {
        await homePage.open()
        await headerPage.clickDaftar()
        await register.verifyPage()
        await register.verifySectionMagang()
        await register.setClickTambahMagang()
        const dataMagang = [
            {
                fungsi: "Education",
                industi: "Education",
                mulai: "2022-01",
                selesai: "Hingga saat ini",
                desc: "Mantap"
            }
        ]
        let count = 0
        for (const obj of dataMagang) {
            await browser.pause(1000)
            await register.setFungsiMagang(obj.fungsi)
            await register.setIndustriMagang(obj.industi)
            await register.setStartDate(obj.mulai)
            await register.setEndaDate(obj.selesai)
            await register.setDeskripsiMagang(obj.desc)
            await register.setSubmitMagang()
            await register.setErrMsg("Silakan melengkapi data Magang/PKL")
        }
    })
    it("@THRA-5612 @xsigerin2642 Add internship data di confirm profile virtue ", async () => {
        await homePage.open();
        await headerPage.clickMasuk()
        await loginPage.setLogin('kandidatAT1@yopmail.com', '123');
        await headerPage.verifyLoggedIn('reza tester');
        await homePage.open();
        await headerPage.clickCariLowongan();
        await lowonganPage.verifypageLowongan()
        await lowonganPage.setLamarCardVacancy("VACANCY VIRTUE JULI 2022")
        await lowonganPage.setModalInfomasi("Sukses!")
        await lowonganPage.setOkModalInfomasi()
        await lowonganPage.setClickAjukanLamaran("Pilih Lowongan 1 dari 1000")
        await register.verifyPage()
        await register.verifySectionMagang()
        await register.setClickTambahMagang()
        const dataMagang = [
            {
                nama: "PT MULIA TBK",
                fungsi: "Education",
                industi: "Education",
                mulai: "2022-01",
                selesai: "2022-04",
                desc: "Mantap"
            }
        ]
        let count = 0
        for (const obj of dataMagang) {
            await register.setNamaInstitusiMagang(obj.nama)
            await register.setFungsiMagang(obj.fungsi)
            await register.setIndustriMagang(obj.industi)
            await register.setStartDate(obj.mulai)
            await register.setEndaDate(obj.selesai)
            await register.setDeskripsiMagang(obj.desc)
            await register.setSubmitMagang()
            count++
            if (count < dataMagang.length) {
                await register.setClickTambahMagang()
            }
        }
        await lowonganPage.setHapusLamaran("Pilih Lowongan 1 dari 1000", "579")
        await loginPage.setLogout()
    })
    it("@THRA-5613 @xsigerin2642 Add internship data di confirm profile virtue jika pilih hingga saat ini ", async () => {
        await homePage.open();
        await headerPage.clickMasuk()
        await loginPage.setLogin('kandidatAT1@yopmail.com', '123');
        await headerPage.verifyLoggedIn('reza tester');
        await homePage.open();
        await headerPage.clickCariLowongan();
        await lowonganPage.verifypageLowongan()
        await lowonganPage.setLamarCardVacancy("VACANCY VIRTUE JULI 2022")
        await lowonganPage.setModalInfomasi("Sukses!")
        await lowonganPage.setOkModalInfomasi()
        await lowonganPage.setClickAjukanLamaran("Pilih Lowongan 1 dari 1000")
        await register.verifyPage()
        await register.verifySectionMagang()
        await register.setClickTambahMagang()
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
            await register.setNamaInstitusiMagang(obj.nama)
            await register.setFungsiMagang(obj.fungsi)
            await register.setIndustriMagang(obj.industi)
            await register.setStartDate(obj.mulai)
            await register.setEndaDate(obj.selesai)
            await register.setDeskripsiMagang(obj.desc)
            await register.setSubmitMagang()
            count++
            if (count < dataMagang.length) {
                await register.setClickTambahMagang()
            }
        }
        await lowonganPage.setHapusLamaran("Pilih Lowongan 1 dari 1000", "579")
        await loginPage.setLogout()
    })
})