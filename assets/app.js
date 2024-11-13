$(document).ready(function () {
//     search modal show and hide start
    let searchModal = $('.search-modal');
    let menuBtn = $('.searchModalOpen');

    menuBtn.on('click', function () {
        searchModal.removeClass('d-none');
    });

    $('#searchModalClose').on('click', function () {
        searchModal.addClass('d-none')
    });
    menuBtn.on('click', function () {
        searchModal.show();
    });

    $('#menuBtnClose').on('click', function () {
        searchModal.hide();
    });
//     search modal show and hide end

//     jalali date start
    $('.jalaliDate').is(function () {
        $(this).persianDatepicker({
            format: 'YYYY/MM/DD HH:mm:ss',
            autoClose: true,
            timePicker: {
                enabled: true,
                step: 1
            }
        });
    })
//     jalali date end

//     customer edit order start

    const editProductModal = $('#editProductModal');
    $('.editProductOpenBtn').on('click', function (e) {
        e.preventDefault()
        editProductModal.removeClass('d-none')
        $('body').addClass('overflow-hidden')
    })
    $('#closeEditProductModalBtn').on('click', function (e) {
        e.preventDefault()
        editProductModal.addClass('d-none')
        $('body').removeClass('overflow-hidden')
    })
//     customer edit order end
//  add product to invoice start

    $('#addProductInInvoiceOpenBtn').on('click', function (e) {
        e.preventDefault();
        const modal = $('#addProductToInvoiceModal');
        modal.removeClass('d-none')
    })
    $('#addProductInInvoiceCloseBtn').on('click', function (e) {
        e.preventDefault();
        const modal = $('#addProductToInvoiceModal');
        modal.addClass('d-none');
    })

    $('#variableProductInInvoiceOpenBtn').on('click', function (e) {
        e.preventDefault();
        const modal = $('#variableProductToInvoiceModal');
        modal.removeClass('d-none')
    })
    $('#variableProductToInvoiceCloseBtn').on('click', function (e) {
        e.preventDefault();
        const modal = $('#variableProductToInvoiceModal');
        modal.addClass('d-none');
    })
    $('#discountBtn').on('click',function (e) {
        e.preventDefault();
        $('.discount-input#discount').focus()
    })
    $('#ExtraBtn').on('click', function (e) {
        e.preventDefault();
        $('.discount-input#extra').focus()
    })

    function hideModalGift() {
        const modal = $('#gitRemoveConfirmModal');
        modal.toggleClass('d-none');
    }

    $('#giftTrashOpenModal').on('click', function (e) {
        e.preventDefault();
        hideModalGift()
    })
    $('#gitRemoveConfirmClose').on('click', function (e) {
        e.preventDefault();
        hideModalGift()
    })
//  add product to invoice end

//     category product start
    $('.accordion-container').is(function (){
        new Accordion('.accordion-container',{
            openOnInit: [0]
        });
    })


//     delete modal start
    const deleteProductModal = $('#deleteProductModal');
    $('.btn-delete').on('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        deleteProductModal.removeClass('d-none')
        console.log('rewrw')
    })
    $('.btn-close-modal').on('click', function (e) {
        e.preventDefault()
        deleteProductModal.addClass('d-none')
    })
//     category product end

//     toggle password show in setting page start
    $('.toggle-password').on('click', function () {
        const passwordField = $(this).siblings('input');
        const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
        passwordField.attr('type', type);
        $(this).toggleClass('fa-eye fa-eye-slash');
    });
//     toggle password show in setting page end
});