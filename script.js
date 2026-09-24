document.addEventListener("DOMContentLoaded", () => {
    const parent = document.getElementById('abdullohBlack');

    if (!parent) {
        console.error("Xatolik: 'abdullohBlack' IDli HTML element topilmadi!");
        return;
    }


    const product = [
        {
            id: "p1",
            pic: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/115-Red_1_300x.png?v=1675859737",
            name: "Airdopes 115",
            desc1: "bestSellers",
            fulldesc: "Bluetooth Calling Smartwatch with 1.69 HD Curved Display",
            price: "1009",
            category: "gadget",
            count: 1
        },
        {
            id: "p2",
            pic: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103",
            name: "Airdopes 131",
            desc1: "bestSellers",
            fulldesc: "Wireless Earbuds with upto 60 Hours Playback",
            price: "1099",
            category: "gadget",
            count: 1
        },
        {
            id: "p3",
            pic: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Grey_560cad08-698b-45d6-a3dd-d10ae3fec8ee_300x.png?v=1657775492",
            name: "Airdopes 131 PRO",
            desc1: "bestSellers",
            fulldesc: "Wireless Earbuds with ENx Noise cancellation",
            price: "1290",
            category: "gadget",
            count: 1
        },
        {
            id: "p4",
            pic: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_white_600x.png?v=1641206209",
            name: "Airdopes 161",
            desc1: "bestSellers",
            fulldesc: "Wireless Earbuds with Massive Playback of upto 17 Hour",
            price: "1300",
            category: "gadget",
            count: 1
        },
        {
            id: "p5",
            pic: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/wave-call--4_600x.png?v=1658295340",
            name: "Wave Call",
            desc1: "bestSellers",
            fulldesc: "Bluetooth Calling Smartwatch with 1.69 HD Curved Display",
            price: "1990",
            category: "gadget",
            count: 1
        },
        {
            id: "p6",
            pic: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/grey_600x.png?v=1668599490",
            name: "Airdopes 141",
            desc1: "topEarbuds",
            fulldesc: "Bluetooth Calling Smartwatch with 1.69 HD Curved Display",
            price: "1299",
            category: "gadget",
            count: 1
        },
        {
            id: "p7",
            pic: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
            name: "Airdopes 131",
            desc1: "topEarbuds",
            fulldesc: "Wireless Earbuds with upto 60 Hours Playback",
            price: "1099",
            category: "gadget",
            count: 1
        },
        {
            id: "p8",
            pic: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_white_9263689b-ad66-47cd-8183-f59685e1dff6_600x.png?v=1671193643",
            name: "Airdopes 163",
            desc1: "topEarbuds",
            fulldesc: "Wireless Earbuds with Massive Playback of upto 17 Hour",
            price: "1399",
            category: "gadget",
            count: 1
        },
        {
            id: "p9",
            pic: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/grey_92c7203d-e618-4992-864f-cc69f45cbdb2_600x.png?v=1673001301",
            name: "Airdopes 141",
            desc1: "topEarbuds",
            fulldesc: "Bluetooth Calling Smartwatch with 1.69 HD Curved Display",
            price: "1499",
            category: "gadget",
            count: 1
        },
        {
            id: "p10",
            pic: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Bubble_600x.png?v=1662533385",
            name: "Airdopes 131 PRO",
            desc1: "topEarbuds",
            fulldesc: "Wireless Earbuds with ENx Noise cancellation",
            price: "1299",
            category: "gadget",
            count: 1
        }
    ];

  
    const arr = [
        {
            id: 1,
            mazz: "Макси Бокс",
            name: "Макси Бокс Традиция",
            image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F78199004-19e7-479a-bfbc-247629a015e8&w=1920&q=75",
            price: 32000,
            category: "maksibox",
            count: 1
        },
        {
            id: 2,
            name: "Макси Бокс Популярный",
            image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Feb0f64ba-e9f4-4373-863c-02a4620013f7&w=1920&q=75",
            price: 35000,
            category: "maksibox",
            count: 1
        },
        {
            id: 3,
            name: "Макси бокс Ретро",
            image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fd78ad5ad-9634-4502-8e3d-f0c96d0aa323&w=1920&q=75",
            price: 35000,
            category: "maksibox",
            count: 1
        },
        {
            id: 4,
            name: "Макси Бокс Тренд",
            image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F7c408517-033f-41f9-a563-3d56410e001a&w=1920&q=75",
            price: 30000,
            category: "maksibox",
            count: 1
        },
        {
            id: 5,
            name: "Клаб Сэндвич куриный",
            image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F1c9ddfa3-0208-4744-896a-05cf01b292cb&w=1920&q=75",
            price: 25000,
            category: "sendvich",
            count: 1
        },
        {
            id: 6,
            name: "Сэндвич Classic",
            image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fd5306c3e-c2d9-4a51-980d-94b5dd0736cd&w=1920&q=75",
            price: 5000,
            category: "sendvich",
            count: 1
        },
        {
            id: 7,
            name: "Клаб Сэндвич куриный",
            image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fd5306c3e-c2d9-4a51-980d-94b5dd0736cd&w=1920&q=75",
            price: 29000,
            category: "sendvich",
            count: 1
        },
        {
            id: 8,
            name: "Сэндвич Classic",
            image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F1c9ddfa3-0208-4744-896a-05cf01b292cb&w=1920&q=75",
            price: 15000,
            category: "sendvich",
            count: 1
        },
        {
            id: 9,
            name: "Лаваш",
            image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F7c6ef844-be8a-4b89-bed0-01841f744594&w=1920&q=75",
            price: 25000,
            category: "lavash",
            count: 1
        },
        {
            id: 10,
            name: "Лаваш мини",
            image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F607d839e-4912-4809-a90c-cc125f555851&w=1920&q=75",
            price: 5000,
            category: "lavash",
            count: 1
        },
        {
            id: 11,
            name: "Лаваш куриный",
            image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F7c6ef844-be8a-4b89-bed0-01841f744594&w=1920&q=75",
            price: 29000,
            category: "lavash",
            count: 1
        },
        {
            id: 12,
            name: "Лаваш куриный",
            image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F7c6ef844-be8a-4b89-bed0-01841f744594&w=1920&q=75",
            price: 11500,
            category: "lavash",
            count: 1
        }
    ];

    
    const allProducts = [...arr, ...product];

    parent.classList.add("flex", "justify-center", "gap-6", "flex-wrap", "p-6");

    function RenderList(products) {
        parent.innerHTML = "";

        products.forEach((element) => {
            const div = document.createElement('div');
            
            // image va pic, hamda string/number narxlarni normallashtiramiz
            const imageUrl = element.image || element.pic;
            const priceFormatted = Number(element.price).toLocaleString();

            div.innerHTML = `
                <div class="card bg-base-100 w-80 shadow-md border border-base-200 hover:shadow-xl transition">
                    <figure class="px-4 pt-4 h-64 bg-gray-50 flex items-center justify-center">
                        <img
                            src="${imageUrl}"
                            alt="${element.name}"
                            class="rounded-xl max-h-full object-contain" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-base font-bold">${element.name}</h2>
                        <p class="text-gray-600">Цена: <span class="font-semibold text-primary">${priceFormatted}</span> сум</p>
                        <div class="card-actions justify-end mt-2">
                            <button class="btn btn-primary btn-sm">Buy Now</button>
                        </div>
                    </div>
                </div>
            `;
            parent.append(div);
        });
    }

    RenderList(allProducts);
});