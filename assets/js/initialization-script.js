$(document).ready(function() {
    

    $("#homepage-news").owlCarousel({
        loop: false,
        //rtl: true,
        video: true,
        lazyLoad: false,
        autoplay: false,
        autoplayTimeout: 2500,
        margin: 30,
        nav: true,
        dots: false,
        //navText: [$('.op-2'), $('.on-2')],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });

    

    var $tabs = $('#horizontalTab');
    $tabs.responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true,
        classes: {
            stateDefault: 'r-tabs-default',
            stateActive: 'r-tabs-active',
            stateDisabled: 'r-tabs-disabled',
            stateExcluded: 'r-tabs-excluded',
            container: 'r-tabs',
            ul: 'r-tabs-nav',
            tab: 'r-tabs-tab',
            anchor: 'r-tabs-anchor',
            panel: 'r-tabs-panel',
            accordionTitle: 'r-tabs-accordion-title'
        }

    });
    //$tabs.responsiveTabs('activate', 0);

    //$('.tableToCards').stacktable();
    $('.tableToCards').cardtable();

    var input = document.querySelector(".phone");
    window.intlTelInput(input, {
        // allowDropdown: false,
        // autoHideDialCode: false,
        // autoPlaceholder: "off",
        // dropdownContainer: document.body,
        // excludeCountries: ["us"],
        // formatOnDisplay: false,
        // geoIpLookup: function(callback) {
        //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
        //     var countryCode = (resp && resp.country) ? resp.country : "";
        //     callback(countryCode);
        //   });
        // },
        // hiddenInput: "full_number",
        initialCountry: "qa",
        // localizedCountries: { 'de': 'Deutschland' },
        // nationalMode: false,
        // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
        // placeholderNumberType: "MOBILE",
        // preferredCountries: ['cn', 'jp'],
        separateDialCode: true,
        //utilsScript: "build/js/utils.js",
    });

});