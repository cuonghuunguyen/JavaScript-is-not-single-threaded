importScripts("./sum.js");
importScripts("./average.js");

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

