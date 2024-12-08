// 1
const friends = ["Artem", "Vanya", "Andriy", "Zlata"];
const result = friends.join(",");
friends.join(",");
console.log(result);
// 2
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4 ",
  "Карточка-5",
];
cards.splice(3, 2);
console.log(cards)
cards.splice(2, 0, "невідома карточка")
console.log(cards)
cards.splice(2, 1, "заміна")
console.log(cards)