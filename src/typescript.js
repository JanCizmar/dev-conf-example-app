(() => {
  const strs = ["Tato aplikace vám řekne, co dnes jíst!", "Co dnes jíst?"];
  let hits = 0;
  window.onkeyup = async (event) => {
    if (event.ctrlKey && event.key === "h") {
      const input = document.activeElement;
      for (const char of strs[hits]) {
        if (input.value !== undefined) {
          setReactValue(input, input.value + char)
        }
        await new Promise((resolve) => setTimeout(resolve, 30))
      }
      hits++;
    }
  }

  function setReactValue(element, value) {
    let lastValue = element.value;
    element.value = value;
    let event = createNewEvent("input", element);
    event.simulated = true;
    let tracker = element._valueTracker;
    if (tracker) {
      tracker.setValue(lastValue);
      element.dispatchEvent(event);
    }
    return lastValue;
  }

  function createNewEvent(eventName, element) {
    let event;
    if (typeof(Event) === 'function') {
      event = new Event(eventName, {target: element, bubbles:true});
    } else {
      event = document.createEvent('Event');
      event.initEvent(eventName, true, true);
      element.addEventListener(eventName, function(e) {
        e.target = element;
      });
    }
    return event;
  }
})()
