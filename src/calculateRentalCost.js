/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCostPerDay = 40;
  const longTerm = 7;
  const shortTerm = 3;
  const shortDiscount = 20;
  const longDiskount = 50;

  if (days >= longTerm) {
    return rentalCostPerDay * days - longDiskount;
  }

  if (days >= shortTerm) {
    return rentalCostPerDay * days - shortDiscount;
  }

  return rentalCostPerDay * days;
}

module.exports = calculateRentalCost;
