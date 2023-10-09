//Tombol Onclick Icons Shooping
function shooping() {
    var shopp = "Apakah Anda Ingin Melihat Product Populer Salad-Nyoo ?";
    if (confirm(shopp)) {
        location.href = 'product.html';
    } else {
        location.href = 'index.html';
    }
}

function Buy() {
    var BuyShp = "Apakah Anda Ingin Membeli Product Kami SaladNyoo ?";
    if (confirm(BuyShp)) {
        location.href = 'buy.html';
    } else {
        location.href = 'index.html';
    }
}

function gofood() {
    var gofood = "Apakah Anda Ingin Membeli Product Kami SaladNyoo ?";
    if (confirm(gofood)) {
        location.href = 'https://gofood.co.id/en';
    } else {
        location.href = 'index.html';
    }
}

function Order() {
    var Order = "Apakah Anda Ingin Membeli Product Kami SaladNyoo ?";
    if (confirm(Order)) {
        location.href = 'https://gofood.co.id/en';
    } else {
        location.href = 'index.html';
    }
}

function detail() {
    var detailShp = 'Apakah Anda Ingin Melihat Detail Product Kami SaladNyoo ?';
    if (confirm(detailShp)) {
        location.href = 'detail.html';
    } else {
        location.href = 'index.html';
    }
}

function started() {
    var shopp = "Apakah Anda Ingin Melihat Product Populer Salad-Nyoo ?";
    if (confirm(shopp)) {
        location.href = 'product.html';
    } else {
        location.href = 'index.html';
    }
}

//Pragraf Otomatis Merubah Color
var pragraff = document.getElementsByClassName("pragraff");
setInterval(function () {
    pragraff[0].style.color = "#B0578D";
    pragraff[1].style.color = "#B0578D";

    // TimeOut Color
    setTimeout(function () {
        pragraff[0].style.color = "white";
        pragraff[1].style.color = "white";
    }, 600)
}, 2000);

const goToTo = () => {
    return location.href = '#home';
}
