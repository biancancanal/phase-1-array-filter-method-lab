
function findMatching(drivers, name) {
    return (drivers.filter((driver) => name.toUpperCase() == driver.toUpperCase()))
}

function fuzzyMatch(drivers, letter) {
    let firstLetter = drivers[0]
    return (drivers.filter((firstLetter) => letter == firstLetter))
}