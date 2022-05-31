//! DOM - Document Object Modal
//? селекторы get...

// let btn = document.getElementById('btn');
// console.log(typeof btn);

// let blocks = document.getElementsByClassName('blocks');
// console.log(blocks);

// let blocks = document.getElementsByTagName('div')
// console.log(blocks);

// let inp = document.getElementsByName('phone')
// console.log(inp);

//? селекторы querySelectors

// let btn = document.querySelector('#btn')
// let blocks = document.querySelectorAll('.blocks')
// let blocks2 = document.querySelectorAll('div')
// let inp = document.querySelectorAll('[name="phone"]')
// console.log(btn, blocks, blocks2, inp);

// let container = document.getElementById('container')
// console.log(container);
// container.innerText = 'Hello DOM!'
// container.innerHTML = "<h1>Hello DOM!</h1>"
// container.style.backgroundColor = 'red'
// container.style.color = 'white'
// console.log(document.body);
// document.body.style.backgroundColor = 'black'

// let container = document.getElementById('container')
// container.style.display = 'flex'
// container.style.flexWrap = 'wrap'
// for(let i = 1; i <= 10; i++){
//     let block = document.createElement('div')
//     block.style.width = '100px'
//     block.style.height = '100px'
//     block.style.backgroundColor = 'green'
//     block.style.margin = '10px'
//     container.append(block)
// }
// console.log(container.firstChild.previousElementSibling);
// console.log(container.firstChild.nextElementSibling);
// console.log(getComputedStyle(container));

// let blocks1 = document.querySelectorAll('.blocks')     //! NodeList - static
// let blocks2 = document.getElementsByClassName('blocks')     //! HTMLCollection - dinamic 
// blocks1[0].remove()
// console.log(blocks1);
// console.log(blocks2);

// let inp = document.getElementById('inp')
// inp.setAttribute('placeholder', 'search...')
// inp.classList.add('new-class')
// inp.classList.add('new-class2')
// inp.classList.remove('new-class')
// inp.classList.toggle('new-class-3')
// console.log(inp);