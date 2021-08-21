$(document).ready(function () {
    let currentFloor = 1
    let counterUp = $('.counter-up')
    let counterDown = $('.counter-down')
    let floorPath = $('.home path')
    let viewFlats = $('.view-flats')
    const modal = $('.modal')
    const modalClose = $('.modal-close')
    floorPath.on('mouseover', function () {
        currentFloor = $(this).attr('data-floor')
        $('.counter').text(currentFloor)
        floorPath.removeClass('current-floor')
    });

    floorPath.on('click', toggleModal)
    

    modalClose.on('click', toggleModal)

    viewFlats.on('click', toggleModal)


    counterUp.on('click', function () {
        if(currentFloor < 17) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor')
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
        }
    })

    counterDown.on('click', function () {
        if(currentFloor > 1) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor')
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
        }
    })



    function toggleModal () {
        modal.toggleClass('is-open')
    }
});

