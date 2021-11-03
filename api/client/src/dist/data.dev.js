"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popularProducts = exports.categories = exports.sliderItems = void 0;

var _men = _interopRequireDefault(require("./images/men.jpg"));

var _kids = _interopRequireDefault(require("./images/kids.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sliderItems = [{
  id: 1,
  img: "https://media.istockphoto.com/photos/nice-lady-overjoyed-by-warm-spring-breeze-going-romantic-date-wear-picture-id1170647073?k=20&m=1170647073&s=612x612&w=0&h=GmXU_8sjKaR7bB1UOKbyBM9N8tcUQJg_4fMwLX2EK0c=",
  title: "SUMMER SALE",
  desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
  bg: "f5fafd"
}, {
  id: 2,
  img: "https://media.istockphoto.com/photos/happiness-beautiful-girl-dressed-in-autumn-coat-hat-and-scarf-picture-id878677378?k=20&m=878677378&s=612x612&w=0&h=PAKbXdvlAl-NkntsSSWHEUiIN-stDZ8xSjGgJl7uzMg=",
  title: "AUTUMN COLLECTION",
  desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
  bg: "fcf1ed"
}, {
  id: 3,
  img: "https://media.istockphoto.com/photos/cute-little-funny-boy-playing-with-snow-outdoors-picture-id535722687?k=20&m=535722687&s=612x612&w=0&h=CdpJDky5tZRYws2HTzdbouFaoqFnnkSi2VJYSvVsYJE=",
  title: "WINTER COLLECTION",
  desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
  bg: "fbf0f4"
}];
exports.sliderItems = sliderItems;
var categories = [{
  id: 1,
  img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  title: "WOMENS WEAR!",
  cat: "women"
}, {
  id: 2,
  img: "".concat(_men["default"]),
  title: "MENS WEAR",
  cat: "men"
}, {
  id: 3,
  img: "".concat(_kids["default"]),
  title: "KIDS WEAR",
  cat: "kids"
}];
exports.categories = categories;
var popularProducts = [{
  id: 1,
  img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"
}, {
  id: 2,
  img: "https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388"
}, {
  id: 3,
  img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png"
}, {
  id: 4,
  img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png"
}, {
  id: 5,
  img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png"
}, {
  id: 6,
  img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png"
}, {
  id: 7,
  img: "https://www.vintageindustries.nl/download_front/qympzk1762/2217_Arrow_Jacket_Forest.png"
}, {
  id: 8,
  img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png"
}];
exports.popularProducts = popularProducts;