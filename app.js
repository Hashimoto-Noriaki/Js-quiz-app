const quiz = 'ルフィの悪魔の実は?';
const answers = [
    'ゴムゴム',
    'バラバラ',
    'メラメラ',
    'ピカピカ',
    'ハナハナ',
    'ゴロゴロ'
];
const correct = 'ゴムゴム';

//index.htmlから取ってくる
document.getElementById('js-question').textContent = quiz;
// console.log(document.getElementById('js-question').textContent);
// console.log(document.getElementById('js-question'));

//divがたくさんあるので、ふさわしくない
// document.getElementByTagName('div');
// console.log(document.getElementByTagName('div'));