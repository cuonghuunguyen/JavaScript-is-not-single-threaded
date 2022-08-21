const calculateAverageWorker = (target) => {
    let sum = calculateSumWorker(target);
    return sum / target;
}