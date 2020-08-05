const section = document.getElementById("section");
const btn_change = document.querySelector("#change-word");
const words = ["Hi there!", "My second element appearing", "Third one now", "There will be more.."];
const colors = ["blue", "red", "green", "teal"]

let cur_word = words.length-1;

section.innerHTML = `<p>${words [cur_word]} </p>`;

section.style.color = colors[cur_word];
// function wordChange (e)
// {
//     if (cur_word == 0)
//     {
//         cur_word = words.length-1;
//     }
//     else {
//         cur_word --;
//     }

//     section.innerHTML = `<p>${words [cur_word]} </p>`;
// }
// or

// wordChange = (e) => {
//     if (cur_word == 0)
//     {
//         cur_word = words.length-1;
//     }
//     else {
//         cur_word --;
//     }

//     section.innerHTML = `<p>${words [cur_word]} </p>`;
// }

// or

// words.map (words =>{
//    section.innerHTML = `<p>${words [cur_word]} </p>`;
//    setTimeout(() =>{cur_word++}, 5000)
// })

btn_change.addEventListener("click",(e)=>{
    if (cur_word == 0)
    {
        cur_word = words.length-1;
    }
    else {
        cur_word --;
    }

    section.innerHTML = `<p>${words [cur_word]} </p>`;
    section.style.color = colors[cur_word]
   
})

