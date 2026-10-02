function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Ferdium => {
  const getMessages = () => {
    const hasNotifications = !!document.querySelector(
      'a[href="/notifications"] span.rounded-full',
    );

    const hasDMs = !!document.querySelector(
      'a[href="/letters"] span.rounded-full',
    );

    Ferdium.setBadge(0, hasNotifications || hasDMs ? 1 : 0);
  };

  Ferdium.loop(getMessages);

  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
};
