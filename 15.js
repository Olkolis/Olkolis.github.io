
// задачка на суму числової послідовності
function n1(a, b) {
  let sum = 0;
  for(let i = a + 1; i < b; i += 1) {   
    sum += i;   
  }
  console.log(sum)
}

n1(1, 33);
n1(5, 10);

// задачка на послідовність символів
function draw(width, symb){
  let sum = '';
  for(i = 0; i < width; i++){
    sum += symb;
  }

  console.log(sum)
}

draw(5, '*');
draw(3, 'w');



// функція на найменше слово із введених
document.querySelector('.word-button').onclick = findShort;

function findShort() {
    let text = document.querySelector('.word').value.trim();

    let min = Math.min.apply(null, text.split(' ').map(elem => elem.length));

    document.querySelector(".answerLetter p").innerText = `"${text}" → ${min}`;
}

// function findShort() {

//     let s = text.split(' ');
//     let min = s[0].length;
//     for (let i = 0; i < s.length; i++) {
//             if (min > s[i].length) {
//             min = s[i].length;
//         }
//     }

//     // let arr = s.map(elem => elem.length)
//     // let min = arr[0];

//     // arr.forEach(elem => {
//     //     if (min > elem){
//     //         min = elem;
//     //     }
//     // })

document.querySelector('.button').onclick = DNA;

function DNA() {
    
    let data = document.querySelector('.input').value;

    if (data == ""||data == null||data == 0) {
        document.querySelector('.answerDNA p').innerText = `😥😥😥Нитка ДНК порожня або ДНК взагалі немає`;
    } else {
        calc()
    }
}

function calc() {
  let DNAstrand = document.querySelector('.input').value;
  let complement = '';

  for (let i = 0; i < DNAstrand.length; i++) {
    switch (DNAstrand[i]) {
      case 'A':
        complement += 'Ⓣ';
        break;
      case 'T':
        complement += 'Ⓐ';
        break;
      case 'C':
        complement += 'Ⓖ';
        break;
      case 'G':
        complement += 'Ⓒ';
        break;
      default:
        document.querySelector('.answerDNA p').innerText = `😥😥😥Нитка ДНК якась дивна`;
        break;
    }
  }
  document.querySelector('.answerDNA p').innerText = `${complement}`;
}