function mapToNegativize(sourceArray) {
  let r = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    r.push(-1 * sourceArray[i])
  }
  return r
}

function mapToNoChange(sourceArray) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++ ) {
      r.push(sourceArray[i])
    }
    return r
  }

  function mapToDouble(sourceArray) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++ ) {
      r.push(2 * sourceArray[i])
    }
    return r
  }

  function mapToSquare(sourceArray) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++ ) {
      r.push(Math.pow(sourceArray[i], 2))
    }
    return r
  }

  function reduceToTotal(sourceArray, startingPoint=0) {
      let total = startingPoint
      for (let i = 0; i < sourceArray.length; i++ ) {
          total = total + sourceArray[i]
      }
      return total 
    }

    function reduceToAllTrue(sourceArray) {
        for (let i = 0; i < sourceArray.length; i++ ) {
            if (sourceArray[i] === false) return false
        }
         return true 
    }

    function reduceToAnyTrue(sourceArray){
        for (let i = 0; i < sourceArray.length; i++ ) {
            if (sourceArray[i]) return true 
        }
        return false 
    }