var display_content = '';
function num(num){
    // console.log(num);
    display_content = display_content+num;
    document.getElementById('display_box').innerHTML = display_content;
    return display_content;
}
function sol() {
    document.getElementById('display_box').innerHTML = eval(document.getElementById('display_box').innerHTML);
    display_content = document.getElementById('display_box').innerHTML
    }
function _clear(){
    display_content = ''
    console.log(0)
    document.getElementById('display_box').innerHTML = display_content
}
function _del(){
    document.getElementById('display_box').innerHTML = document.getElementById('display_box').innerHTML.slice(0,-1);
    display_content = document.getElementById('display_box').innerHTML; 
}