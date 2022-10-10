class lowonganPage {
    async setLamarCardVacancy(data) {
        await $(`//*[text()="${data}"]/../../div[@class="col-12 textCenter padTopBot"]//button`).click()
    }
    async setSelengkapnya(data) {
        await $(`[href="/vacancydetail?id=${data}"]`).click()
    }
    async setModalInfomasi(data) {
        await $(`//*[text()="${data}"]`).waitForDisplayed()
    }
    async setOkModalInfomasi() {
        await $(`[class="swal2-confirm swal2-styled"]`).click()
    }
    async setbatalModalInfomasi() {
        await $(`[class="swal2-cancel swal2-styled"]`).click()
    }
    async setCariBerdasarkanPerusahaan() {
        await $(`[class="marginInherit company-tile null"]`).click()
    }
    async setNonAktifCariBerdasarkanperusahaan() {
        await $('[class="marginInherit company-tile selected-tile"]').click()
    }
    async setCariBerdasarkanFungsi(index, data) {
        await $(`//div[@data-index="${index}"]//*[text()="${data}"]`).click()
    }
    async setNonAktifCariBerdasarkanFungsi(index, data) {
        await $(`//div[@data-index="${index}"]//*[text()="${data}"]`).click()
    }
    async setDataNotFound() {
        await $('//*[text()="Hasil pencarian tidak ditemukan"]').waitForDisplayed()
    }
    async verifypageLowongan() {
        await $('//*[text()="Lihat seluruh lowongan yang tersedia!"]').waitForDisplayed()
    }
    async setVerifyCardSearch(data) {
        await $(`//*[text()="${data}"]`).waitForDisplayed()
    }
    async setKriteriaPencarian() {
        await $('//*[text()="Kriteria Pencarian : "]').waitForDisplayed()
    }
    async setVerifyCardSelengkapnya(data) {
        await $(`//*[text()="${data}"]`).waitForDisplayed()
    }
    async setKeranjangLowongan(data) {
        await $(`//*[text()="${data}"]`)
    }
    async setClickAjukanLamaran(data) {
        await $(`[title="${data}"]`).click()
        await $(`[href="/confirmProfile"] button`).click()
    }
    async setHapusLamaran(data, value) {
        await $(`[title="${data}"]`).click()
        await $(`[value="${value}"]`).click()
    }
  
}

export default new lowonganPage