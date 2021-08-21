/**
 * PUBLISH SUBSCRIBE PATTERN
 */
function pubSub() {
  const subscribers = {};

  function publish(eventName, data) {
    if (!Array.isArray(subscribers[eventName])) {
      return;
    }
    subscribers[eventName].forEach((callback) => {
      callback(data);
    });
  }

  function subscribe(eventName, callback) {
    if (!Array.isArray(subscribers[eventName])) {
      subscribers[eventName] = [];
    }
    subscribers[eventName].push(callback);
  }

  return {
    publish,
    subscribe,
  };
}


const ps = pubSub();

ps.subscribe('CustomEvent', (eventData) => {
    console.log(eventData);
})

ps.subscribe('CustomEvent', (eventData) => {
    console.log(eventData);
})

// Call publish from somewhere else
setTimeout(() => {
    ps.publish('CustomEvent', { message : 'custom event called'})
}, 3000);