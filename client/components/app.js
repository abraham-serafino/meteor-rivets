import rivets from 'rivets';

rivets.components['app'] = {
  template: () => Blaze.toHTML(Template['app']),
  initialize(element, attributes) {}
};
