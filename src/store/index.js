import {createStore, compose} from 'redux';

import rootReducer from '../reducers';

const initialState = {
    token: "none",
    noMoreBeer: false,
    activeOne: {
        name: 'Triple Karmeliet',
        id: 1,
        image: 'https://c8.alamy.com/comp/F3GDTN/a-tripel-karmeliet-beer-and-glass-the-belgian-ale-has-a-strength-of-F3GDTN.jpg',
    },
    matchedBeers: [
        {
            name: 'Kastel',
            id: 0,
            image: 'http://cdn.shopify.com/s/files/1/2273/8373/products/kasteel-kasteel-rouge-33_1024x1024.jpg?v=1504027363',
        },
    ],
    beers: [
        {
            name: 'Rince Cochon',
            id: 2,
            image: 'http://1.bp.blogspot.com/-oklsffqJp1Y/UUGy83A6KgI/AAAAAAAAAEk/9j8ukz1-_MI/s1600/P1070783.JPG',
        },
        {
            name: 'Panaché',
            id: 3,
            image: 'https://static.openfoodfacts.org/images/products/200/000/002/1421/front_fr.6.full.jpg',
        },
        {
            name: '86',
            id: 4,
            image: 'http://unwinedliquor.com.au/wp-content/uploads/2015/09/Bavaria-86.jpg',
        },
        {
            name: 'Amsterdam',
            id: 5,
            image: 'https://78.media.tumblr.com/c89488ed9cdd5d3ffe0cd14c0ec3433e/tumblr_nvnpgllkOa1ualcxdo1_1280.jpg',
        },
        {"id":"6","name":"Fischer Doreleï","image":"https://static.openfoodfacts.org/images/products/311/978/025/8543/front_en.12.400.jpg"} ,
        {"id":"7","name":"Licorne Bio","image":"https://static.openfoodfacts.org/images/products/324/485/100/1466/front.7.400.jpg"},
        {"id":"8","name":"Brassin de Noël","image":"https://static.openfoodfacts.org/images/products/324/485/100/3002/front.5.400.jpg"} ,
        {"id":"9","name":"La Goudale","image":"https://static.openfoodfacts.org/images/products/326/157/000/0044/front.7.400.jpg"},
        {"id":"10","name":"La Goudale","image":"https://static.openfoodfacts.org/images/products/326/157/000/0655/front.5.400.jpg"},
        {"id":"11","name":"La Goudale","image":"https://static.openfoodfacts.org/images/products/326/157/000/0723/front.4.400.jpg"},
        {"id":"12","name":"La Divine","image":"https://static.openfoodfacts.org/images/products/326/157/000/1713/front.5.400.jpg"},
        {"id":"13","name":"La Goudale","image":"https://static.openfoodfacts.org/images/products/326/157/000/2086/front.5.400.jpg"},
        {"id":"14","name":"Ténébreuse","image":"https://static.openfoodfacts.org/images/products/327/191/850/0501/front.5.400.jpg"} ,
        {"id":"15","name":"Bière de garde de Saint-François","image":"https://static.openfoodfacts.org/images/products/327/246/012/0544/front.5.400.jpg"} ,
        {"id":"16","name":"Ch'ti ambrée","image":"https://static.openfoodfacts.org/images/products/327/246/012/2395/front.5.400.jpg"} ,
        {"id":"17","name":"Ch'ti blonde","image":"https://static.openfoodfacts.org/images/products/327/246/012/2401/front.5.400.jpg"},
        {"id":"18","name":"Bière de garde","image":"https://static.openfoodfacts.org/images/products/327/246/012/2807/front.5.400.jpg"} ,
        {"id":"19","name":"La Choulette Blonde","image":"https://static.openfoodfacts.org/images/products/327/319/017/5040/front.3.400.jpg"},
        {"id":"20","name":"L'Angelus Blonde","image":"https://static.openfoodfacts.org/images/products/328/647/000/0086/front.4.400.jpg"},
        {"id":"21","name":"Bière de Flandre","image":"https://static.openfoodfacts.org/images/products/332/402/000/3337/front.6.400.jpg"} ,
        {"id":"22","name":"Gavroche","image":"https://static.openfoodfacts.org/images/products/332/402/000/4334/front.5.400.jpg"},
        {"id":"23","name":"3 Monts grande réserve","image":"https://static.openfoodfacts.org/images/products/332/402/000/8752/front.5.400.jpg"} ,
        {"id":"24","name":"Triple Secret des Moines","image":"https://static.openfoodfacts.org/images/products/334/797/000/0249/front.5.400.jpg"},
        {"id":"25","name":"Cervoise","image":"https://static.openfoodfacts.org/images/products/348/470/000/0022/front.6.400.jpg"},
        {"id":"26","name":"Telenn Du","image":"https://static.openfoodfacts.org/images/products/348/470/000/0053/front.7.400.jpg"},
        {"id":"27","name":"Blanche Hermine","image":"https://static.openfoodfacts.org/images/products/348/470/000/0244/front.8.400.jpg"},
        {"id":"28","name":"Blanche Hermine","image":"https://static.openfoodfacts.org/images/products/348/470/000/0251/front.5.400.jpg"},
        {"id":"29","name":"Bonnets Rouges","image":"https://static.openfoodfacts.org/images/products/348/470/000/0275/front.4.400.jpg"},
        {"id":"30","name":"Morgane","image":"https://static.openfoodfacts.org/images/products/348/470/000/0305/front.5.400.jpg"},
        {"id":"31","name":"Lancelot","image":"https://static.openfoodfacts.org/images/products/348/470/000/3504/front.6.400.jpg"},
        {"id":"32","name":"pietra biere corse","image":"https://static.openfoodfacts.org/images/products/349/864/010/3033/front_en.3.400.jpg"},
        {"id":"33","name":"Bière blanche de Corse","image":"https://static.openfoodfacts.org/images/products/349/864/030/1002/front.5.400.jpg"} ,
        {"id":"34","name":"Bière blonde extra","image":"https://static.openfoodfacts.org/images/products/357/286/000/1352/front.6.400.jpg"} ,
        {"id":"35","name":"Bellerose","image":"https://static.openfoodfacts.org/images/products/357/286/000/1437/front_en.3.400.jpg"},
        {"id":"36","name":"Northmæn Blonde","image":"https://static.openfoodfacts.org/images/products/357/952/750/1019/front.6.400.jpg"} ,
        {"id":"37","name":"Northmæn ambrée","image":"https://static.openfoodfacts.org/images/products/357/952/750/1125/front.6.400.jpg"} ,
        {"id":"38","name":"Northmæn Rousse","image":"https://static.openfoodfacts.org/images/products/357/952/750/1132/front.6.400.jpg"} ,
        {"id":"39","name":"Northmæn brune","image":"https://static.openfoodfacts.org/images/products/357/952/750/1149/front.7.400.jpg"} ,
        {"id":"40","name":"Blanche","image":"https://static.openfoodfacts.org/images/products/357/952/750/1170/front.6.400.jpg"},
        {"id":"41","name":"Brimbel","image":"https://static.openfoodfacts.org/images/products/358/274/000/0016/front.5.400.jpg"},
        {"id":"42","name":"Combel","image":"https://static.openfoodfacts.org/images/products/358/274/000/0023/front.7.400.jpg"},
        {"id":"43","name":"Bière à la verveine du Velay","image":"https://static.openfoodfacts.org/images/products/358/274/000/0139/front.5.400.jpg"} ,
        {"id":"44","name":"Bourganel au miel de châtaignier","image":"https://static.openfoodfacts.org/images/products/358/274/000/0160/front.5.400.jpg"} ,
        {"id":"45","name":"L'bière d'mincoin","image":"https://static.openfoodfacts.org/images/products/362/910/300/0327/front.7.400.jpg"} ,
        {"id":"46","name":"Gallia Pale Ale","image":"https://static.openfoodfacts.org/images/products/370/069/390/0133/front.5.400.jpg"},
        {"id":"47","name":"Bière de pays ambrée","image":"https://static.openfoodfacts.org/images/products/376/000/155/0023/front.8.400.jpg"} ,
        {"id":"48","name":"Rousse ambrée au malt tourbé","image":"https://static.openfoodfacts.org/images/products/376/001/013/0162/front.7.400.jpg"} ,
        {"id":"49","name":"88°","image":"https://static.openfoodfacts.org/images/products/376/001/013/0353/front.5.400.jpg"} ,
        {"id":"50","name":"Rosée à la fraise de Plougastel","image":"https://static.openfoodfacts.org/images/products/376/001/013/0933/front.5.400.jpg"} ,
        {"id":"51","name":"Bière blonde","image":"https://static.openfoodfacts.org/images/products/376/001/014/0017/front.12.400.jpg"} ,
        {"id":"52","name":"La Verte au Génépi","image":"https://static.openfoodfacts.org/images/products/376/002/324/2012/front_en.13.400.jpg"} ,
        {"id":"53","name":"Myrha","image":"https://static.openfoodfacts.org/images/products/376/002/512/0011/front_en.3.400.jpg"},
        {"id":"56","name":"La Mousse au Génépi","image":"https://static.openfoodfacts.org/images/products/376/002/705/0385/front.10.400.jpg"},
        {"id":"57","name":"La Mousse à la Framboise","image":"https://static.openfoodfacts.org/images/products/376/002/705/0422/front.5.400.jpg"}
    ],
};

const store = createStore(
    rootReducer,
    initialState,
    compose(window.devToolsExtension ? window.devToolsExtension() : f => f),
);

export default store;
