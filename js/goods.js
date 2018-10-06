var GOODS_COUNT = 26;
var NAMES = [
  'Чесночные сливки',
  'Огуречный педант',
  'Молочная хрюша',
  'Грибной шейк',
  'Баклажановое безумие',
  'Паприколу итальяно',
  'Нинзя - удар васаби',
  'Хитрый баклажан',
  'Горчичный вызов',
  'Кедровая липучка',
  'Корманный портвейн',
  'Чилийский задира',
  'Беконовый взрыв',
  'Арахис vs виноград',
  'Сельдерейная душа',
  'Початок в бутылке',
  'Чернющий мистер чеснок',
  'Раша федераша',
  'Кислая мина',
  'Кукурузное утро',
  'Икорный фуршет',
  'Новогоднее настроение',
  'С пивком потянет',
  'Мисс креветка',
  'Бесконечный взрыв',
  'Невинные винные',
  'Бельгийское пенное',
  'Острый язычок',
];

var PICTURES = [
  'gum-cedar.jpg',
  'gum-chile.jpg',
  'gum-eggplant.jpg',
  'gum-mustard.jpg',
  'gum-portwine.jpg',
  'gum-wasabi.jpg',
  'ice-cucumber.jpg',
  'ice-eggplant.jpg',
  'ice-garlic.jpg',
  'ice-italian.jpg',
  'ice-mushroom.jpg',
  'ice-pig.jpg',
  'marmalade-beer.jpg',
  'marmalade-caviar.jpg',
  'marmalade-corn.jpg',
  'marmalade-new-year.jpg',
  'marmalade-sour.jpg',
  'marshmallow-bacon.jpg',
  'marshmallow-beer.jpg',
  'marshmallow-shrimp.jpg',
  'marshmallow-spicy.jpg',
  'marshmallow-wine.jpg',
  'soda-bacon.jpg',
  'soda-celery.jpg',
  'soda-cob.jpg',
  'soda-garlic.jpg',
  'soda-peanut-grapes.jpg',
  'soda-russian.jpg'
];

var CONTENTS = [
  'молоко',
  'сливки',
  'вода',
  'пищевой краситель',
  'патока',
  'ароматизатор бекона',
  'ароматизатор свинца',
  'ароматизатор дуба, идентичный натуральному',
  'ароматизатор картофеля',
  'лимонная кислота',
  'загуститель',
  'эмульгатор',
  'консервант: сорбат калия',
  'посолочная смесь: соль, нитрит натрия',
  'ксилит',
  'карбамид',
  'вилларибо',
  'виллабаджо'
];

/**
 * Генерируем случайное число в диапозоне min - max
 * @param {number} min - минимальное число
 * @param {number} max - максимальное число
 * @return {number} возвращаем сгенерированное число в диапозоне min - max
 */
var getRandomNumber = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

/**
 * Генерируем случайное число
 * @param {number} a, b - число
 * @return {number} возвращаем сгенерированное число
 */
var mix = function (a, b) {
  return Math.random() - 0.25;
}

var generateContents = function (contents) {
  var contentsCount = getRandomNumber(1, contents.length - 1);
  var mixContents = contents.sort(mix);
  var contentsArray = mixContents.slice(0, contentsCount);
  return contentsArray.join(', ');
}

/**
 * Генерируем массив товаров
 * @param {number} amount - количество генерируемых товаров
 * @return {Array} массив объектов товаров
 */
var generateGoods = function (amount, names, pictures, contents) {
  var goods = [];
  for (var i = 0; i < amount; i++) {
    goods[i] = {
      name: names[getRandomNumber(0, names.length - 1)],
      picture: 'img/cards/' + pictures[getRandomNumber(0, pictures.length - 1)],
      price: getRandomNumber(100, 1500),
      weight: getRandomNumber(30, 300),
      nutritionFacts: {
        sugar: !!getRandomNumber(0, 1),
        energy: getRandomNumber(70, 500),
        contents: generateContents(contents),
      },
      rating: {
        value: getRandomNumber(1, 5),
        number: getRandomNumber(10, 900)
      }
    };
  };
  return goods;
};



var data = generateGoods(GOODS_COUNT, NAMES, PICTURES, CONTENTS);
