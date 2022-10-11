
const path = require('path');

class Register {
    open() {
        return browser.url(`${browser.options.baseUrl}/register`);
    }

    async verifyPage() {
        await $('//*[text()="Lengkapi profil Anda untuk mendapatkan lowongan yang sesuai!"]').waitForDisplayed()
        await expect($(`//*[text()="Lengkapi profil Anda untuk mendapatkan lowongan yang sesuai!"]`)).toBeDisplayed()
    }
    async setNameProfile(data) {
        await $('[id="name"]').setValue(data)
    }
    async setJenisKelamin(data) {
        await $('div[id="gender"]').click()
        await $('input[id="gender"]').setValue(data)
        await browser.keys("\uE007");
    }

    async setTanggalLahir(data) {
        await $('[id="dateOfBirth"]').click()
        await $('input[id="dateOfBirth"]').setValue(data)
        await browser.keys("\uE007");
    }

    async setPassword(data) {
        await $(`[name="password"]`).setValue(data)
    }
    async setConfirmPassword(data) {
        await $(`[name="retypePassword"]`).setValue(data)
    }
    async setEmail(data) {
        await $('#email').setValue(data)
    }
    async setNoTelp(data) {
        await $('#mobilePhone').setValue(data)
    }
    async setYoeYear(data) {
        await $('#yoeYear').setValue(data)
    }
    async setYoeMonth(data) {
        await $('#yoeMonth').setValue(data)
    }
    async setSalary(data) {
        await $('#expectedSalary').setValue(data)
    }
    async setDomisili(data, subdata) {
        await $('div[id="currentDomicile"]').click()
        if (data !== "Others") {
            await $('input[id="currentDomicile"]').setValue(data)
            await browser.keys("\uE007");
        } else {
            await $('input[id="currentDomicile"]').setValue(data)
            await browser.keys("\uE007");
            await $('input[id="otherDomicile"]').setValue(subdata)
        }
    }

    //Pendidikan
    async verifySectionPendidikan() {
        await $('//*[text()="Pendidikan"]').scrollIntoView()
    }
    async setClickTambahPendidikan() {
        await $('//*[text()="Tambah Pendidikan"]/../../button').click()
    }
    async setGelar(data) {
        await $('div[id="degree"]').click()
        await $('input[id="degree"]').setValue(data)
        await browser.keys("\uE007");
    }
    async setGPA(data) {
        await $('input[id="gpa"]').setValue(data)
    }
    async setNamaInstitusi(data) {
        await $('div[id="instituteUniversity"]').click()
        await $('input[id="instituteUniversity"]').setValue(data)
        await browser.keys("\uE007");
    }
    async setOtherNamaInstitusi(data) {
        await $('[name="otherInstitute"]').setValue(data)

    }
    async setJuruasan(data) {
        await $('div[id="major"]').click()
        await $('input[id="major"]').setValue(data)
        await browser.keys("\uE007");
    }
    async setOtherJurusan(data) {
        await $('[id="otherMajor"]').setValue(data)

    }
    async setStartYear(data) {
        await $('// *[@id="startYear"]/../../../../..//div[@class="ant-form-item-control"]').click()
        await $('input[id="startYear"]').setValue(data)
        await browser.keys("\uE007");
    }
    async setgraduatedYear(data) {
        await $('// *[@id="graduatedYear"]/../../../../..//div[@class="ant-form-item-control"]').click()
        await $('input[id="graduatedYear"]').setValue(data)
        await browser.keys("\uE007");
    }
    async setSubmitPendidikan() {
        await $('//*[text()="Tambah Pendidikan"]/../../button[@type="submit"]').click()
    }

    //Organisasi
    async verifySectionOrganisasi() {
        await $('//*[text()="Organisasi"]').scrollIntoView()

    }
    async setClickTambahOrganisasi() {
        await $('//*[text()="Tambah Organisasi"]/../../button').click()
    }
    async setNamaOrganisasi(data) {
        await $('#organizationName').setValue(data)
    }
    async setLingkup(data) {
        await $(`div[id="organizationalScope"]`).click()
        await $(`input[id="organizationalScope"]`).setValue(data)
        await browser.keys("\uE007");
    }

    async setJabatan(data) {
        await $(`div[id="organizationalRole"]`).click()
        await $(`input[id="organizationalRole"]`).setValue(data)
        await browser.keys("\uE007");
    }

    async setSubmitOrganisasi() {
        await $('//*[text()="Tambah Organisasi"]/../../button[@type="submit"]').click()
    }

    //magang
    async verifySectionMagang() {
        await $('//*[text()="Magang/Praktek Kerja Lapangan (Opsional)"]').scrollIntoView()

    }
    async setClickTambahMagang() {
        await $('//*[text()="Tambah Magang/PKL"]/../../button').click()
    }
    async setNamaInstitusiMagang(data) {
        await $('#InstitutionName').setValue(data)
    }
    async setFungsiMagang(data) {
        await $('div[id="InternFuction"]').click()
        await $('input[id="InternFuction"]').setValue(data)
        await browser.keys("\uE007");
    }
    async setIndustriMagang(data) {
        await $('div[id="InternIndustry"]').click()
        await $('input[id="InternIndustry"]').setValue(data)
        await browser.keys("\uE007");
    }
    async setStartDate(data) {
        await $('// *[@id="StartDate"]/../../../../..//div[@class="ant-form-item-control"]').click()
        await $('#StartDate').setValue(data)
        await browser.keys("\uE007");
    }
    async setEndaDate(data) {
        if (data == "Hingga saat ini") {
            await $('#isPresentIntern').click()
        } else {
            await $('// *[@id="EndDate"]/../../../../..//div[@class="ant-form-item-control"]').click()
            await $('#EndDate').setValue(data)
            await browser.keys("\uE007");
        }
    }
    async setDeskripsiMagang(data) {
        await $('#JobDesc').setValue(data)
    }
    async setSubmitMagang() {
        await $('//*[text()="Tambah Magang/PKL"]/../../button[@type="submit"]').click()
    }

    //pengalaman kerja
    async verifySectionPengalaman() {
        await $('//*[text()="Pengalaman Bekerja"]').scrollIntoView()

    }
    async setClickTambahPengalaman() {
        await $('//*[text()="Tambah Pengalaman"]/../../button').click()
    }
    async setNamaPerusahaan(data) {
        await $('#companyName').setValue(data)
    }

    async setPangkat(data) {
        await $('div[id="title"]').click()
        await $('input[id="title"]').setValue(data)
        await browser.keys("\uE007");
    }
    async setPosisi(data) {
        await $('div[id="positionType"]').click()
        await $('input[id="positionType"]').setValue(data)
        await browser.keys("\uE007");
    }
    async setFungsiPengalaman1(data) {
        await $('div[id="functionName"]').click()
        await $('input[id="functionName"]').setValue(data)
        await browser.keys("\uE007");
    }
    async setFungsiPengalaman2(data) {
        await $('div[id="functionId2"]').click()
        await $('input[id="functionId2"]').setValue(data)
        await browser.keys("\uE007");
    }
    async setFungsiPengalaman3(data) {
        await $('div[id="functionId3"]').click()
        await $('input[id="functionId3"]').setValue(data)
        await browser.keys("\uE007");
    }
    async setIndustri(data) {
        await $('div[id="industry"]').click()
        await $('input[id="industry"]').setValue(data)
        await browser.keys("\uE007");
    }
    async setPosition(data) {
        await $('input[id="position"]').setValue(data)
    }
    async setStartDatePengalaman(data) {
        await $('// *[@id="startDate"]/../../../../..//div[@class="ant-form-item-control"]').click()
        await $('#startDate').setValue(data)
        await browser.keys("\uE007");
    }
    async setEndaDatePengalaman(data) {
        if (data == "Hingga saat ini") {
            await $('#untilCurrent').click()
        } else {
            await $('// *[@id="endDate"]/../../../../..//div[@class="ant-form-item-control"]').click()
            await $('#endDate').setValue(data)
            await browser.keys("\uE007");
        }
    }

    async setJobDesc1(data) {
        await $('#jobDescription_1').setValue(data)
    }
    async setJobDesc2(data) {
        await $('#jobDescription_2').setValue(Data)
    }
    async setJobDesc3(data) {
        await $('#jobDescription_3').setValue(Data)
    }

    async setSubmitPengalaman() {
        await $('//*[text()="Tambah Pengalaman"]/../../button[@type="submit"]').click()
    }

    //status Pencarian Kerja
    async verifySectionPencarianKeja() {
        await $('//*[text()="Status Pencari Kerja"]').scrollIntoView()
    }
    async setClickUbah() {
        await $(`//*[text()='Ubah ']/../../../..//div[@class="button__wrapper"]`).click()
    }
    async setAktif() {
        await $('//input[@value="1"]/../../span').click()
    }
    async setPasif() {
        await $('//input[@value="2"]/../../span').click()
    }
    async setNonAktif() {
        await $('//input[@value="3"]/../../span').click()
    }
    async setHarian() {
        await $('//input[@value="1"]/../../span[@class]').click()
    }
    async setMingguan() {
        await $('//input[@value="2"]/../../span[@class]').click()
    }
    async setBulanan() {
        await $('//input[@value="3"]/../../span[@class]').click()
    }

    async setClickButtonOK() {
        await $('button[class="ant-btn ant-btn-primary"]').click()
    }

    async setClickSimpan() {
        await $('//*[text()="Simpan"]//..//..//button').click()
    }

    async setErrMsg(data){
        await $(`//*[text()="${data}"]`).waitForDisplayed()
    }

    //button batal
    async setButtonBatal(){
        await $('//*[text()="Batal"]/../../button').click()
    }
}


export default new Register();