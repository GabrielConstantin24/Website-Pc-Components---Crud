const produse = [{
    image: './monitor/Monitor Asus.webp',
    name: 'Asus Monitor Full HD 23.8 inch',
    priceCents: 110000,
}, {
    image: './monitor/Monitor Lenovo.webp',
    name: 'Monitor LED Lenovo 23.8 inch',
    priceCents: 39900,
}, {
    image: './monitor/Monitor HP.webp',
    name: 'Monitor LED HP 23.8 inch',
    priceCents: 129900,
}, {
    image: './desktop/Cyberton Core-i7.jpeg',
    name: 'Desktop Cyberton Core-i7',
    priceCents: 259900,
}, {
    image: './desktop/Desktop PC StudentOffice.webp',
    name: 'Desktop PC StudentOffice QuadCore 16GB RAM DDR4',
    priceCents: 98000,
}, {
    image: './desktop/Desktop PC expert GAMING 9thGen Intel SIX-CORE i5.webp',
    name: 'Desktop PC expert GAMING 9thGen Intel SIX-CORE i5',
    priceCents: 179900,  
}, {
    image: './mouse/Mouse Gaming.webp',
    name: 'Mouse gaming, Excitat, 7 culori cu LED-uri',
    priceCents: 12900,
}, {
    image: './mouse/Mouse Logitech.webp',
    name: 'Mouse gaming Logitech G102 Lightsync',
    priceCents: 7900,
}, {
    image: './mouse/Mouse Runmus.webp',
    name: 'Mouse Gaming profesional Runmus',
    priceCents: 10900,
}, {
    image: './casti/Casti HyperX.webp',
    name: 'Casti gaming HyperX Cloud Stinger Core',
    priceCents: 18300,
}, {
    image: './casti/Casti HunterSpider.webp',
    name: 'Casti Gaming HunterSpider V3 Pro',
    priceCents: 11900,
}, {
    image: './casti/Casti Runmus.webp',
    name: 'Casti gaming profesionale Runmus K3',
    priceCents: 9900,
}, {
    image: './placa-video/Gigabyte nvidia rtx 4070 ddr6x.jpg',
    name: 'Placa Video Gigabyte Nvidia RTX 4070 DDR6X',
    priceCents: 327500,
}, {
    image: './placa-video/Placa Video Asus.webp',
    name: 'Placa video ASUS Dual GeForce RTX 3060 GDDR6',
    priceCents: 164900,
}, {
    image: './placa-video/Placa Video AMD Radeon.webp',
    name: 'Placa video Sapphire Radeon, RX 6600 PULSE GDDR6',
    priceCents: 135900,
}, {
    image: './laptop/Laptop Lenovo.webp',
    name: 'Laptop Lenovo IdeaPad 3, i5-11320H, 512GB SSD',
    priceCents: 309900,
}, {
    image: './laptop/Laptop Acer.webp',
    name: 'Laptop Gaming Acer Nitro 5, procesor AMD Ryzen 7,512GB SSD',
    priceCents: 569900,
}, {
    image: './laptop/Laptop Allview.webp',
    name: 'Laptop Allview Allbook H, procesor Intel Celeron N4000, 256GB SSD',
    priceCents: 89900,
}];

let produseHTML = '';

produse.forEach((cards) => {
    produseHTML += `
        <div class="card">
            <img src="${cards.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${cards.name}</h5>
                <p class="card-text">Pret: ${cards.priceCents / 100} RON</p>
                <a href="#" class="btn btn-primary">Adauga in cos</a>
            </div>
        </div>
    `;
});

document.querySelector('.js-product-card').innerHTML = produseHTML;

let produseStorage = localStorage.getItem('product');

if (produseStorage) {
    localStorage.setItem('product', produseStorage);
}else {
    localStorage.setItem('product', JSON.stringify(produse));
}