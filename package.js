Package.describe({
  summary: 'The board system in Meteor',
  version: '0.0.1',
  name: 'emirue:bod',
  git: 'https://github.com/emirue/bod.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4');

  var packages = [
    'ddp'
    , 'minimongo'
    , 'livedata'
    , 'underscore'
    , 'mongo'
    , 'accounts-ui'
    , 'accounts-password'
    , 'ecmascript'
    , 'es5-shim'
    , 'blaze-html-templates'
    , 'check'
    , 'email'
    , 'random'
    , 'reactive-dict'
    , 'reactive-var'
    , 'session'
    , 'tracker'

    // community packages
    , 'tap:i18n@1.8.0'
    , 'iron:router@1.0.12'
    , 'meteorhacks:unblock@1.1.0'
    , 'matb33:collection-hooks@0.8.1'
    , 'hitchcott:method-hooks@1.1.0'
    , 'mrt:external-file-loader@0.1.4'
    , 'fourseven:scss@3.9.0'
    , 'meteorflux:dispatcher@1.2.3'
    , 'aida:pagination@1.0.10'
    , 'aldeed:simple-schema@1.5.3'
    , 'aldeed:collection2@2.8.0'
    , 'percolate:migrations@0.9.8'
    , 'dburles:collection-helpers@1.0.4'
  ];

  api.use(packages, ['client', 'server']);
  api.imply(packages);

  //-----------------------------------------------------
  // Client
  //-----------------------------------------------------
  api.addFiles([
    'lib/client/bod_list.html',
    'lib/client/bod_list.js',
  ], ['client']);
});