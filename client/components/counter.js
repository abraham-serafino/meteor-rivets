import rivets from 'rivets';

rivets.components['counter'] = {
  template: () => Blaze.toHTML(Template['counter']),

  initialize(elements, attributes) {
    return {
      color: attributes.color || 'red',
      counter: attributes.startAt || 0,

      increment(event, scope) {
        scope.counter++;
      },

      decrement(event, scope) {
        scope.counter--;
      },

      toggleColor(event, scope) {
        scope.color = scope.color === 'red' ? 'blue' : 'red';
      }
    };
  }
};
