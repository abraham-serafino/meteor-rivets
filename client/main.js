import rivets from 'rivets';

Router.route('/', () => {
  rivets.init('app', document.querySelector('app'), {});
});
