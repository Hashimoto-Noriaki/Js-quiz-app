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

//同じような処理が続いたので、変数、定数にまとめる
//$があることで、HTMLのオブジェクトが入っていると理解できる
const $button = document.getElementsByTagName('button');

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];
$button[4].textContent = answers[4];
$button[5].textContent = answers[5];

//ボタンをクリックしたら正誤判定が出る
document.getElementsByTagName('button')[0].addEventListener('click',() => {
    if(correct === $button[0].textContent){
        window.alert('正解‼︎')
    } else {
        window.alert('不正解‼︎')
    }
});