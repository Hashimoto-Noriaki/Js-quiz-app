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

//同じような処理が続いたので、変数、定数にまとめる  $があることで、HTMLのオブジェクトが入っていると理解できる
const $button = document.getElementsByTagName('button');

    //定数の文字列をHTMLに反映　　index.htmlから取ってくる
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz;
    //$buttonが何回も繰り返されていたので、リファクタリング
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        //命令
        $button[buttonIndex].textContent = answers[buttonIndex];
        buttonIndex++;
    }
} 
setupQuiz();

//ボタンをクリックしたら正誤判定が出る
document.getElementsByTagName('button')[0].addEventListener('click',() => {
    if(correct === $button[0].textContent){
        window.alert('正解‼︎')
    } else {
        window.alert('不正解‼︎')
    }
});

document.getElementsByTagName('button')[1].addEventListener('click',() => {
    if(correct === $button[1].textContent){
        window.alert('正解‼︎')
    } else {
        window.alert('不正解‼︎')
    }
});

document.getElementsByTagName('button')[2].addEventListener('click',() => {
    if(correct === $button[2].textContent){
        window.alert('正解‼︎')
    } else {
        window.alert('不正解‼︎')
    }
});

document.getElementsByTagName('button')[3].addEventListener('click',() => {
    if(correct === $button[3].textContent){
        window.alert('正解‼︎')
    } else {
        window.alert('不正解‼︎')
    }
});

document.getElementsByTagName('button')[4].addEventListener('click',() => {
    if(correct === $button[4].textContent){
        window.alert('正解‼︎')
    } else {
        window.alert('不正解‼︎')
    }
});

document.getElementsByTagName('button')[5].addEventListener('click',() => {
    if(correct === $button[5].textContent){
        window.alert('正解‼︎')
    } else {
        window.alert('不正解‼︎')
    }
});
