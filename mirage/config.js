import { Response } from 'ember-cli-mirage';

export default function() {
  this.timing = 1000;

  this.get('/trending-topics', () => {
    return new Response(200, {}, [
      { id: 1, name: '#AcceptableFirstDateQuestions' },
      { id: 1, name: 'Seahawks' },
      { id: 1, name: '#BadHolidayMoviePlots' }
    ]);
  });
}
