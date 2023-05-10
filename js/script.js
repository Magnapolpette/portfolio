window.addEventListener('DOMContentLoaded', function () {


})
 

function mobile() {
    if (window.matchMedia('(max-width: 1130px)').matches) {
        window.location.href = "m_index.html";
    }
}
function desktop() {
    if (window.matchMedia('(min-width: 1130px)').matches) {
        window.location.href = "index.html";
    }
}

