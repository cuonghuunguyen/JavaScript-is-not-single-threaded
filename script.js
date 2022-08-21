const worker = new Worker("./worker.js");

const setLoading = (loading) => {
    document.getElementById("loading").style.display = loading ? "block" : "none"
}

setLoading(false);

const getTarget = () => {
    const val = document.getElementById("target").value;
    return parseInt(val);
}

const calculateSum = () => {
    setLoading(true);
    const target = getTarget();
    worker.postMessage({ method: "sum", target })
}

const calculateAverage = () => {
    setLoading(true);
    const target = getTarget();
    worker.postMessage({ method: "average", target })
}

worker.onmessage = (event) => {
    setLoading(false);
    document.getElementById("result").innerText = event.data;
}; 

document.getElementById("calculate-sum").addEventListener("click", calculateSum);
document.getElementById("calculate-average").addEventListener("click", calculateAverage);