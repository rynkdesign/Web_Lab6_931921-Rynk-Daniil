const buttons = document.querySelectorAll("button");
const left_img = document.querySelector(".cat");
const right_img = document.querySelector(".dog");

buttons.forEach(button => {
    button.onclick = () => {
        switch (button.id) {
            case 'btn_left':
                left_img.style.width = '95%';
                right_img.style.width = '5%';
                left_img.querySelector("img").style.display = 'block';
                right_img.querySelector("img").style.display = 'none';
                break;
            case 'btn_center':
                left_img.style.width = '50%';
                right_img.style.width = '50%';
                left_img.querySelector("img").style.display = 'block';
                right_img.querySelector("img").style.display = 'block';
                break;
            case 'btn_right':
                left_img.style.width = '5%';
                right_img.style.width = '95%';              
                right_img.querySelector("img").style.display = 'block';  
                left_img.querySelector("img").style.display = 'none';
                break;
        }
    }
})