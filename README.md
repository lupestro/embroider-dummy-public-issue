embroider-dummy-public-issue
==============================================================================

Addon to demonstrate the problem present through Embroider 0.23.0 where Embroider builds fail to deliver /tests/dummy/public into the destination directory.

The application route of the dummy app attempts to fetch test data to build dummy app's model.
It expects to find the test data in a json file at the root of the project, 
supplied from the application through the `/tests/dummy/public` tree.

You can see the application operating normally either by enabling the traditional build or by copying the contents of tests/dummy/public to dist and starting the application, built by Embroider, with `ember serve --path dist`.

This demonstration app also has a few interesting commented build options in the setup in `ember-cli-build.js`:
```
    /* 
        extraPublicTrees: ['tests/dummy/public'] 
    */
```
Enabling this option produces a collision that demonstrates that the build already knows that it should be doing something with tests/dummy/public.

```
    /*
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticComponents: true,
    packagerOptions: {
      webpackConfig: { }
    }
    */
```
I included this to demonstrate that the situation is unaffected by the usual static options.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install embroider-dummy-public-issue
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
