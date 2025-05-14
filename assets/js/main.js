(function ($) {
    "use strict";

    /*== Loader ==*/
    $(window).on("load", function () {
        $("#cx-overlay").fadeOut("slow");
    });

    /*== Sidebar ==*/
    $('.cx-toggle-sidebar').on("click", function () {
        $('.cx-sidebar-overlay').toggleClass("cx-sidebar-overlay-hide");
        $('.cx-sidebar').toggleClass("sidebar-hide");
        $('.cx-header').toggleClass("sb-hide");
        $('.cx-main-content').toggleClass("sb-hide");
        $('footer').toggleClass("sb-hide");
        $('.cx-toggle-sidebar').toggleClass("active-toggle");
    });
    $(".cx-sidebar-overlay").on('click', function (e) {
        $('.cx-sidebar-overlay').removeClass("cx-sidebar-overlay-hide");
        $('.cx-sidebar').removeClass("sidebar-hide");
        $('.cx-header').removeClass("sb-hide");
        $('.cx-main-content').removeClass("sb-hide");
        $('footer').removeClass("sb-hide");
        $('.cx-toggle-sidebar').removeClass("active-toggle");
    });

    // On page load active menu
    var oldURL = window.location.pathname;
    var newURL = oldURL.split("/").pop();
    newURL = newURL == '' ? 'index.html' : newURL;
    $('a.cx-page-link, .cx-drop-toggle').each(function () {
        var $this = $(this);

        if ($this.attr('href').indexOf(newURL) !== -1) {
            $(this).addClass('active-nav');
            $(this).parent().parent().siblings().addClass('active-nav');
            $(this).parent().parent().slideDown();
        }
    });

    // On click active menus
    $('.cx-drop-toggle').on("click", function () {
        if ($(this).hasClass("active-nav")) {
            $('.cx-drop-toggle').removeClass("active-nav");
            $('.cx-drop-toggle').siblings('.cx-sb-drop').slideUp();
        } else {
            $('.cx-drop-toggle').removeClass("active-nav");
            $('.cx-drop-toggle').siblings('.cx-sb-drop').slideUp();
            $(this).addClass("active-nav");
            $(this).siblings('.cx-sb-drop').slideDown();
        }
    });

    /*== Label cards ==*/
    $('.label-cards').owlCarousel({
        loop: false,
        margin: 0,
        responsiveClass: true,
        dots: false,
        nav: true,
        navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
        pagination: false,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            1199: {
                items: 3,
            },
            1366: {
                items: 4,
            }
        }
    })

    $('.ecom-label-cards').owlCarousel({
        loop: false,
        margin: 0,
        responsiveClass: true,
        dots: false,
        nav: true,
        navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
        pagination: false,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            1200: {
                items: 3,
            },
            1400: {
                items: 4,
            }
        }
    })

    /*======== Chat sidebar (chatapp page) ========*/
    $('.cx-btn-chat').click(function (e) {
        $('#chat_sidebar').addClass("open-chat-list");
        $('.chat-sidebar-overlay').fadeIn();
    });
    $('.chat-sidebar-overlay, .close-chat-list').click(function (e) {
        $('#chat_sidebar').removeClass("open-chat-list");
        $('.chat-sidebar-overlay').fadeOut();
    });

    /*== Footer ==*/
    if ($("#copyright_year").length) {
        var date = new Date().getFullYear();
        document.getElementById("copyright_year").innerHTML = date;
    }

    /*========== Event calendar ===========*/
    var $calendar;
    let eventCalendar = $("#eventCalendar").simpleCalendar({
        fixedStartDay: 0, // begin weeks by sunday
        disableEmptyDetails: true,
        events: [
            // generate new event after tomorrow for one hour
            {
                startDate: new Date(new Date().setHours(new Date().getHours() + 24)).toDateString(),
                endDate: new Date(new Date().setHours(new Date().getHours() + 25)).toISOString(),
                summary: 'Visit Google Headquarters'
            },
            // generate new event for yesterday at noon
            {
                startDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 12, 0)).toISOString(),
                endDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 11)).getTime(),
                summary: 'John doe Birthday '
            },
            // generate new event for the last two days
            {
                startDate: new Date(new Date().setHours(new Date().getHours() - 48)).toISOString(),
                endDate: new Date(new Date().setHours(new Date().getHours() - 24)).getTime(),
                summary: 'Deal with mr.morgus dronald'
            },
            {
                startDate: new Date(new Date().setHours(new Date().getHours() - 72)).toISOString(),
                endDate: new Date(new Date().setHours(new Date().getHours() - 24)).getTime(),
                summary: 'Visit lorence infra llp.'
            }
        ],

    });
    $calendar = eventCalendar.data('plugin_simpleCalendar')

    /*========== BASIC DATA TABLE ===========*/
    var basicDataTable = $("#basic-data-table");
    if (basicDataTable.length !== 0) {
        basicDataTable.DataTable({
            "dom": '<"row justify-content-between top-information"lf>rt<"row justify-content-between bottom-information"ip><"clear">'
        });
    }
    /*========== RESPONSIVE DATA TABLE ===========*/
    var responsiveDataTable = $("#lead-data-table");
    if (responsiveDataTable.length !== 0) {
        responsiveDataTable.DataTable({
            "aLengthMenu": [[5, 20, 30, 50, 75, -1], [5, 20, 30, 50, 75, "All"]],
            "pageLength": 5,
            "dom": '<"row justify-content-between top-information"lf>rt<"row justify-content-between bottom-information"ip><"clear">'
        });
    }
    /*========== Product List TABLE ===========*/
    var responsiveDataTable = $("#product-list-table");
    if (responsiveDataTable.length !== 0) {
        responsiveDataTable.DataTable({
            "aLengthMenu": [[6, 20, 30, 50, 75, -1], [6, 20, 30, 50, 75, "All"]],
            "pageLength": 6,
            "dom": '<"row justify-content-between top-information"lf>rt<"row justify-content-between bottom-information"ip><"clear">'
        });
    }
    /*========== Category DATA TABLE ===========*/
    var responsiveDataTable = $("#cat_data_table");
    if (responsiveDataTable.length !== 0) {
        responsiveDataTable.DataTable({
            "aLengthMenu": [[5, 10, 20, 30, 50, 75, -1], [5, 10, 20, 30, 50, 75, "All"]],
            "pageLength": 5,
            "dom": '<"row justify-content-between top-information"lf>rt<"row justify-content-between bottom-information"ip><"clear">'
        });
    }
    /*========== Sub Category DATA TABLE ===========*/
    var responsiveDataTable = $("#subcat_data_table");
    if (responsiveDataTable.length !== 0) {
        responsiveDataTable.DataTable({
            "aLengthMenu": [[5, 10, 20, 30, 50, 75, -1], [5, 10, 20, 30, 50, 75, "All"]],
            "pageLength": 10,
            "dom": '<"row justify-content-between top-information"lf>rt<"row justify-content-between bottom-information"ip><"clear">'
        });
    }
    /*========== Todo DATA TABLE ===========*/
    var responsiveDataTable = $("#todo-data-table");
    if (responsiveDataTable.length !== 0) {
        responsiveDataTable.DataTable({
            "aLengthMenu": [[8, 20, 30, -1], [8, 20, 30, "All"]],
            "pageLength": 8,
            "dom": '<"row justify-content-between top-information"lf>rt<"row justify-content-between bottom-information"ip><"clear">'
        });
    }

    $(".cx-notify").on("click", function () {
        $(".cx-notify-bar").addClass("cx-notify-bar-open");
        $(".cx-notify-bar-overlay").fadeIn();
    });
    $(".cx-notify-bar-overlay, .close-notify").on("click", function () {
        $(".cx-notify-bar").removeClass("cx-notify-bar-open");
        $(".cx-notify-bar-overlay").fadeOut();
    });

    /*========== Calendar Event ===========*/
    if ($("#cx_calendar").length) {
        var calendarEl = document.getElementById('cx_calendar');

        var cx_calendar = new FullCalendar.Calendar(calendarEl, {
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            initialDate: '2024-04-12',
            navLinks: true, // can click day/week names to navigate views
            selectable: true,
            selectMirror: true,
            select: function (arg) {
                var title = prompt('Event Title:');
                if (title) {
                    cx_calendar.addEvent({
                        title: title,
                        start: arg.start,
                        end: arg.end,
                        allDay: arg.allDay
                    })
                }
                cx_calendar.unselect()
            },
            eventClick: function (arg) {
                if (confirm('Are you sure you want to delete this event?')) {
                    arg.event.remove()
                }
            },
            editable: true,
            dayMaxEvents: true, // allow "more" link when too many events
            events: [
                {
                    title: '10th year celebration event',
                    start: '2024-04-05',
                    end: '2024-04-07'
                },
                {
                    title: 'USA company tour',
                    start: '2024-04-12',
                    end: '2024-04-17'
                },
                {
                    title: 'Conference',
                    start: '2024-04-11',
                    end: '2024-04-13'
                },
                {
                    title: 'Conference meeting',
                    start: '2024-04-24',
                    end: '2024-04-26'
                }
            ]
        });

        cx_calendar.render();
    }

    $('input[name="deadline"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 2022,
        maxYear: 2030,
        locale: {
            format: 'DD/MM/YYYY'
        }
    });

    /*==========Upload image live preview ===========*/
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#cxImagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#cxImagePreview').hide();
                $('#cxImagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        readURL(this);
    });

    if ($(".marquee").length) {
        $('.marquee').marquee({
            duration: 12000,
            gap: 15,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true
        });
    }
    if ($(".marquee-2").length) {
        $('.marquee-2').marquee({
            duration: 12000,
            gap: 15,
            delayBeforeStart: 0,
            direction: 'right',
            duplicated: true
        });
    }

    /*======== Popup alert ========*/
    $('.pop-basic').on("click", function () {
        Swal.fire('Any fool can use a computer')
    });
    $('.pop-text-under').on("click", function () {
        Swal.fire(
            'The Internet?',
            'That thing is still around?',
            'question'
        )
    });
    $('.pop-error-icon').on("click", function () {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    });
    $('.pop-long-content').on("click", function () {
        Swal.fire({
            imageUrl: 'https://placeholder.pics/svg/300x1500',
            imageHeight: 1500,
            imageAlt: 'A tall image'
        })
    });
    $('.pop-like').on("click", function () {
        Swal.fire({
            title: '<strong>HTML <u>example</u></strong>',
            icon: 'info',
            html:
                'You can use <b>bold text</b>, ' +
                '<a href="https://maraviyainfotech.com/" target="_blank">links</a> ' +
                'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="ri-thumb-up-line"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
                '<i class="ri-thumb-down-line"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
        })
    });
    $('.pop-save').on("click", function () {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    });
    $('.pop-positioned-timeout').on("click", function () {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    });
    $('.pop-fade-down').on("click", function () {
        Swal.fire({
            title: 'Custom animation with Animate.css',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    });
    $('.pop-delete').on("click", function () {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    });
    $('.pop-success').on("click", function () {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Best work!',
            text: "You job is done!",
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Ok',
        })
    });
    $('.pop-delete-cancel').on("click", function () {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    });
    $('.pop-img').on("click", function () {
        Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    });
    $('.pop-custom').on("click", function () {
        Swal.fire({
            title: 'Custom width, padding, color, background.',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff',
            backdrop: `
              rgba(0,0,123,0.4)
              left top
              no-repeat
            `
        })
    });
    $('.pop-auto-close').on("click", function () {

        let timerInterval
        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                // console.log('I was closed by the timer')
            }
        })
    });
    $('.pop-rtl').on("click", function () {
        Swal.fire({
            title: 'هل تريد الاستمرار؟',
            icon: 'question',
            iconHtml: '؟',
            confirmButtonText: 'نعم',
            cancelButtonText: 'لا',
            showCancelButton: true,
            showCloseButton: true
        })
    });
    $('.pop-ajax').on("click", function () {
        Swal.fire({
            title: 'Submit your Github username',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                return fetch(`//api.github.com/users/${login}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(response.statusText)
                        }
                        return response.json()
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                            `Request failed: ${error}`
                        )
                    })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `${result.value.login}'s avatar`,
                    imageUrl: result.value.avatar_url
                })
            }
        })
    });

    $(document).ready(function () {

        /*======== Product category sidebar dropdown ========*/
        $(".drop-list").slideUp("fast");
        $(".category-item.active > .drop-list").fadeIn("fast");
        $('.category-item .item > a').on("click", function () {
            if ($(this).parent().parent().hasClass("active")) {
                $(this).parent().parent().find(".drop-list").slideUp();
                $(this).parent().parent().removeClass("active");
            } else {
                $(".drop-list").slideUp();
                $(".category-item").removeClass("active");
                $(this).parent().parent().find(".drop-list").slideDown();
                $(this).parent().parent().addClass("active");
            }
        });

        /*========== Search Remix icon page ===========*/
        $('[data-search-icon]').on('keyup', function () {
            var searchVal = $(this).val().toLowerCase();
            var filterItems = $('[data-search-item]');

            var filterItemsText = $('[data-search-item]').text().toLowerCase();
            var a = $('[data-search-item]:contains(' + searchVal + ')');
            if (searchVal != '') {
                filterItems.closest(".remix-unicode-icon").addClass('hide');
                $('[data-search-item]:contains(' + searchVal + ')').closest(".remix-unicode-icon").removeClass('hide');
            } else {
                filterItems.closest(".remix-unicode-icon").removeClass('hide');
            }
        });

        /*========== Search Material icon page ===========*/
        $('[data-search-material]').on('keyup', function () {
            var searchVal = $(this).val().toLowerCase();
            console.log(searchVal);
            var filterItems = $('.material-search-item');
            var filterItemsText = $('.material-search-item').text().toLowerCase();
            var a = $('.material-search-item:contains(' + searchVal + ')');
            if (searchVal != '') {
                filterItems.closest(".material-icon-item").addClass('hide');
                $('.material-search-item:contains(' + searchVal + ')').closest(".material-icon-item").removeClass('hide');
            } else {
                filterItems.closest(".material-icon-item").removeClass('hide');
            }
        });
    });
    
    /*======== Product Image Change on Upload ========*/
    $("body").on("change", ".cx-image-upload", function (e) {

        var lkthislk = $(this);

        if (this.files && this.files[0]) {

            var reader = new FileReader();
            reader.onload = function (e) {

                var ec_image_preview = lkthislk.parent().parent().children('.cx-preview').find('.cx-image-preview').attr('src', e.target.result);

                ec_image_preview.hide();
                ec_image_preview.fadeIn(650);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });

    /*======== Single product Slider ========*/
    $('.single-product-cover').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.single-nav-thumb',
    });

    $('.single-nav-thumb').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.single-product-cover',
        dots: false,
        arrows: true,
        focusOnSelect: true
    });

    var $link = $('<link>', {
        rel: 'stylesheet',
        href: 'assets/css/dark.css',
        id: 'dark'
    });
    $(".cx-mode.dark").on("click", function (e) {
        $("#mainCss").after($link);
        $(this).css("display", "none");
        $(".cx-mode.light").css("display", "flex");
    });
    $(".cx-mode.light").on("click", function (e) {
        $("#dark").remove();
        $(this).css("display", "none");
        $(".cx-mode.dark").css("display", "flex");
    });

    /*======== Date range Picker ========*/
    if ($(".revenue-overview")) {
        var start = moment().subtract(1, "days");
        var end = moment().subtract(1, "days");
        var cb = function (start, end) {
            $(".revenue-overview .cx-date-range span").html(
                start.format("ll") + " - " + end.format("ll")
            );
        };

        $(".revenue-overview .cx-date-range").daterangepicker(
            {
                startDate: start,
                endDate: end,
                opens: 'left',
                ranges: {
                    Today: [moment(), moment()],
                    Yesterday: [
                        moment().subtract(1, "days"),
                        moment().subtract(1, "days")
                    ],
                    "Last 7 Days": [moment().subtract(6, "days"), moment()],
                    "Last 30 Days": [moment().subtract(29, "days"), moment()],
                    "This Month": [moment().startOf("month"), moment().endOf("month")],
                    "Last Month": [
                        moment()
                            .subtract(1, "month")
                            .startOf("month"),
                        moment()
                            .subtract(1, "month")
                            .endOf("month")
                    ]
                }
            },
            cb
        );
        cb(start, end);
    }

})(jQuery);