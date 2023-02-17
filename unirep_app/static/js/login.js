let click_login = document.getElementById('click-login')
let click_register = document.getElementById('click-register')

click_login.addEventListener('click', function() {

    stylingClick(click_login, true)
    stylingClick(click_register, false)
})

click_register.addEventListener('click', function() {

    stylingClick(click_register, true)
    stylingClick(click_login, false)
})

function stylingClick(element, mode) {

    if (mode == true) {
        element.style.color = "#FF8063"
    }

    if (mode == false) {
        element.style.color = "#434343"
    }
}