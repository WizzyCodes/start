const dayUntilChristmas = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const christmasDate = new Date(currentYear, 11, 25);

  if (today > christmasDate) {
    christmasDate.setFullYear(currentYear + 1);
  }

  const timeDifference = christmasDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysLeft;
};
console.clear();
console.log(`There are ${dayUntilChristmas()} days left until Christmas!`);

const today = new Date();
const christmasDate = new Date(today.getFullYear(), 11, 25);

const timeDifference = christmasDate.getTime() - today.getTime();

console.log(timeDifference);
