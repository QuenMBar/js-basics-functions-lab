function distanceFromHqInBlocks(dist) {
    return Math.abs(42 - dist);
}
function distanceFromHqInFeet(dist) {
    return Math.abs(42 - dist) * 264;
}
function distanceTravelledInFeet(dist1, dist2) {
    return Math.abs(dist1 - dist2) * 264;
}
function calculatesFarePrice(start, destination) {
    let dist = distanceTravelledInFeet(start, destination);
    if (dist < 400) {
        return 0;
    } else if (dist < 2000) {
        return 0.02 * (dist - 400);
    } else if (dist < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }

}
