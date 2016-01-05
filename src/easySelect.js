
var EasySelect = {
    handleClick() {
        this.showLoading();
        this.emptyDetail();
        this.hideLight();
        this.hideDetail();
        this.showLight();
    },
    showLoading() {
        $('#loading').show();
    },
    hideLoading() {
        $('#loading').hide();
    },
    emptyDetail() {
        $('#detail-select').empty();
    },
    hideDetail() {
        $('#detail-select').hide();
    },
    hideLight() {
        $('#light-select').hide();
    },
    showLight() {
        $('#light-select').show();
    }
};

export default EasySelect;

