// Task 1
const elem = document.getElementById('1');
const elem2 = document.getElementById('5');
const elem3 = document.getElementById('2');
const elem4 = document.getElementById('4');
const elem5 = document.getElementById('3');

const elem_2 = document.querySelector('.number1');
const elem2_2 = document.querySelector('.number5');
const elem3_2 = document.querySelector('.number2');
const elem4_2 = document.querySelector('.number4');
const elem5_2 = document.querySelector('.number3');



console.log("Output result: ", elem.textContent, ",", elem2.textContent, ",", elem3.textContent,",",
elem4.textContent, ",", elem5.textContent);

console.log("Output result: ", elem_2.textContent, ",", elem2_2.textContent, ",", elem3_2.textContent,",",
elem4_2.textContent, ",", elem5_2.textContent);

// Task 2

const element_h1 = document.querySelector('.newBackground');
element_h1.style.cssText = `background-color: lightgreen;`;

const element_p_1 = document.querySelector('.boldText');
element_p_1.style.cssText = `font-weight: bold;`;

const element_p_2 = document.querySelector('.colorText');
element_p_2.style.cssText = `color: red;`;

const element_p_3 = document.querySelector('.underlineText');
element_p_3.style.cssText = `text-decoration: underline;`;

const element_p_4 = document.querySelector('.italicText');
element_p_4.style.cssText = `font-style: italic;`;

const element_li = document.querySelector('.a');
element_li.style.cssText = `display: inline-block;
list-style: none; float: left;`;

const element_li2 = document.querySelector('.b');
element_li2.style.cssText = `display: inline-block;
list-style: none; float: left;`;
const element_li3 = document.querySelector('.c');

element_li3.style.cssText = `display: inline-block;
list-style: none; float: left;`;

const elementSpan = document.querySelector('.invisible');
elementSpan.style.cssText = `visibility: hidden;`;

// Task 3
const btn = document.querySelector('.mybtn');

const Text_1 = document.querySelector('.Text1');
    btn.addEventListener('click', function(){
        Text_1.style.cssText = `visibility:visible;`;
    })
    
    
    const Text_2 = document.querySelector('.Text2');
    btn.addEventListener('mouseover', function(){
        Text_2.style.cssText = `visibility:visible;`;  
        const Text_4 = document.querySelector('.Text4');
        btn.addEventListener('mouseover', function(){
            Text_4.style.cssText = `visibility:visible;`;
            const Text_5 = document.querySelector('.Text5');
            btn.addEventListener('mouseover', function(){
                Text_5.style.cssText = `visibility:visible;`;
            })
        })
    
    })

    const Text_3 = document.querySelector('.Text3');
    btn.addEventListener('mouseout', function(){
        Text_3.style.cssText = `visibility:visible;`;
        const Text_6 = document.querySelector('.Text6');
            btn.addEventListener('mouseout', function(){
                Text_6.style.cssText = `visibility:visible;`;
                const Text_7 = document.querySelector('.Text7');
                btn.addEventListener('mouseout', function(){
                    Text_7.style.cssText = `visibility:visible;`;
                })
            })
    })


    // const Text_3 = document.querySelector('.Text3');
    // btn.addEventListener('mouseout', function(){
    //     Text_3.style.cssText = `visibility:visible;`;
        
    // })
    
