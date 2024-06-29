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

//定数の文字列をHTMLに反映　　index.htmlから取ってくる
document.getElementById('js-question').textContent = quiz;
document.getElementsByTagName('button')[0].textContent = answers[0];
document.getElementsByTagName('button')[1].textContent = answers[1];
document.getElementsByTagName('button')[2].textContent = answers[2];
document.getElementsByTagName('button')[3].textContent = answers[3];
document.getElementsByTagName('button')[4].textContent = answers[4];
document.getElementsByTagName('button')[5].textContent = answers[5];

//ボタンをクリックしたら正誤判定が出る
document.getElementsByTagName('button')[0].addEventListener('click',() => {
    if(correct === document.getElementsByTagName('button')[0].textContent){
        window.alert('正解‼︎')
    } else {
        window.alert('不正解‼︎')
    }
});