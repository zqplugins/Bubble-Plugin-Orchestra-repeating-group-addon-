function(instance, properties, context) {
    // this returns an array holding the list of whatever bubble holds. In this case a list of numbers.
    let getList = (columnXBasicReference, startPosition, finishPosition) => {
        let returnedList = columnXBasicReference.get(startPosition, finishPosition);
        return returnedList;
    };

    // this is to load data from Bubble's server.
    let listLoader = (columnBasicReference, columnLengthFunction) => {
        // grab the column array
        let acquiredListColumn = getList(columnBasicReference, 0, columnLengthFunction);
        // return it, whether it's a blank space or the actual list.
        return acquiredListColumn;
    };

    // class_to_trigger
    // cell_index_to_trigger
    // trigger_multiple_cells
    // cell_positions_list
    // trigger_every_cell

    let targetClass = `musician${properties.class_to_trigger}`;

    if (properties.trigger_every_cell) {
        let numberOfMusiciansInThisClass = document.getElementsByClassName(targetClass).length;

        // runs for every musician in the target class
        for (let i = 1; i < numberOfMusiciansInThisClass + 1; i++) {
            let currentTargetCellEventVariableName = `musicianVariable${targetClass}${i}`;

            window.dispatchEvent(window[currentTargetCellEventVariableName]);
        }

        instance.triggerEvent("musicians_finished");
    } else if (properties.trigger_multiple_cells) {
        // targets multiple cells
        let listOfTargetCellsPositions = listLoader(properties.cell_positions_list, properties.cell_positions_list.length());

        for (let i = 0; i < listOfTargetCellsPositions.length; i++) {
            let currentTargetCellEventVariableName = `musicianVariable${targetClass}${listOfTargetCellsPositions[i]}`;

            window.dispatchEvent(window[currentTargetCellEventVariableName]);
        }

        instance.triggerEvent("musicians_finished");
    } else {
        // targets an individual cell
        let targetCellEventVariableName = `musicianVariable${targetClass}${properties.cell_index_to_trigger}`;

        window.dispatchEvent(window[targetCellEventVariableName]);

        instance.triggerEvent("musicians_finished");
    }

    

  // window.dispatchEvent(window[triggerFirstOneTemp]);



  // for (i = 1; i < 10; i++) {

  //  let logMe = `musicianVariable${i}`;

  //console.log(window[logMe])

  // }
}
