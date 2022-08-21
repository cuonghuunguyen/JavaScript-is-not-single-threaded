const calculateSumWorker = (target) => {
    let sum = 0; 
    for (let index = 1; index <= target; index++) {
        sum += index;
    }
   return sum;
}