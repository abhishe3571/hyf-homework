// Problem 3: Series duration of my life

/* How much time of my life have i been watching series on tv? Lets find out! 
   Calculate how much time a tv series have taken as a percentage of an average 
   lifespan of 80 years.
   Create a function that logs out the following text using the seriesDurations array:
*/


const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 1,
      hours: 3,
      minutes: 22,  
    },
    {
      title: '13 Reason why',
      days: 1,
      hours: 13,
      minutes: 03,
    },
    {
      title: 'Stranger Things',
      days: 0,
      hours: 16,
      minutes: 15,
    },
  ]

  const averageLifeSpam = 80;

  function logOutSeriesText(seriesDurations) {
    for (let i = 0; i < seriesDurations.length; i++) {
      const daysInYears = seriesDurations[i].days / 365;
      const hoursInYears = seriesDurations[i].hours / (24 * 365);
      const minutesInYears = seriesDurations[i].minutes / (60 * 24 * 365);
  
      const totalSeriesDurationInYears =
        daysInYears + hoursInYears + minutesInYears;
  
      const percentageSeriesInLife = totalSeriesDurationInYears / averageLifeSpam;
  
      console.log(
        `${seriesDurations[i].title} took ${percentageSeriesInLife.toFixed(
          2
        )} % of my life`
      );
    }
  }
  
  logOutSeriesText(seriesDurations);