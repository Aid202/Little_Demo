const select = document.querySelector('.select')
const option_list = document.querySelector('.options-list')
const options = document.querySelectorAll('.option') 

// 1. 切换语音菜单的显示和隐藏
select.addEventListener('click', () => {
    console.log(1);
    option_list.classList.toggle('active')
    select.querySelector('.fa-angle-down').classList.toggle('fa-angle-up')
})
// 2. 切换语言
options.forEach((option) => {
    option.addEventListener('click', () => {
        options.forEach((option) => {
            option.classList.remove('selected')
        })
        select.querySelector('span').innerHTML = option.innerHTML;
        option.classList.add('selected')
        option_list.classList.toggle('active')
        select.querySelector('.fa-angle-down').classList.toggle('fa-angle-up')
    })
})