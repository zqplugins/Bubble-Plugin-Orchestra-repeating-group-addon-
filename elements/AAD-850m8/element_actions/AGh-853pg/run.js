function(instance, properties, context) {

  // adds class .musicianclass to support multiple musician elements and id #musicianclass1 based on index.

  let musicianClass = `musician${properties.musicians_class}`;

  instance.canvas.addClass(musicianClass);


  let idIndex = $(`.${musicianClass}`).length;

  let uniqueIdentifierByClassAndId = `${musicianClass}${idIndex}`;

  instance.canvas.attr('id',uniqueIdentifierByClassAndId );


  function doSomething(e) {

    instance.triggerEvent("workflow_inside_each_cell")

  }


  window.addEventListener(`myEventName${uniqueIdentifierByClassAndId}`, doSomething, false);

  window[`musicianVariable${uniqueIdentifierByClassAndId}`] = new CustomEvent(`myEventName${uniqueIdentifierByClassAndId}`);

}
