const calculateSumWorker = (target) => {
    let sum = 0; 
    for (let index = 1; index <= target; index++) {
        sum += index;
    }
   return sum;
}

const calculateAverageWorker = (target) => {
    let sum = calculateSumWorker(target);
    return sum / target;
}

self.onmessage = (event) => {
    const { target, method } = event.data;
    switch (method) {
        case "sum": {
            self.postMessage(calculateSumWorker(target));
            break;
        }
        case "average": {
            self.postMessage(calculateAverageWorker(target));
            break;
        }
        default: {
            self.postMessage("invalid method");
        }
    }
}

