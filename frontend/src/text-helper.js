export const print = (message) => log(message, new Date());
export const log = (message, timestamp) => console.log(`${timestamp.toString()}: ${message}`);

// module.exports = {print, log}