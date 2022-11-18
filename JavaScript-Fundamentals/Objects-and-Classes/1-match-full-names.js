function matchNames(text) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    // [A-Z] - първата буква трябва да главна
    // [a-z]+ - втората буква трябва да е малка, която се повтаря един или повече пъти
    // повтаряме същото за втората дума
    // \b - поставяме начало и край на търсената от нас дума

    let names = text.match(pattern);

    console.log(names.join(' '));
}
matchNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");