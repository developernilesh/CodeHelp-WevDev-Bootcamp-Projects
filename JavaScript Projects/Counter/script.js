const countValue = document.querySelector('.count');
const increment = () => {
    let value = countValue.innerHTML;
    value++;
    countValue.innerText = value;
}
const decrement = () => {
    let value = countValue.innerHTML;
    value--;
    countValue.innerText = value;
}