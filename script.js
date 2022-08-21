const getTarget = () => {
    const val = document.getElementById("target").value;
    return parseInt(val);
}

const calculateSum = () => {
    const target = getTarget();
    let sum = 0; 
    for (let index = 1; index <= target; index++) {
        sum += index;
    }
    document.getElementById("result").innerText = sum;
}

const calculateAverage = () => {
    const target = getTarget();
    let sum = 0; 
    for (let index = 1; index <= target; index++) {
        sum += index;
    }
    document.getElementById("result").innerText = sum / target;
}

document.getElementById("calculate-sum").addEventListener("click", calculateSum);
document.getElementById("calculate-average").addEventListener("click", calculateAverage);