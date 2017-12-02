var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());
 
app.get('/vocabulary', function (req, res) {
  res.send([
      { term: 'Do', description: 'Always follow.' },
      { term: 'Consider', description: 'Generally follow. If you understand the guideline and have a good reason to deviate, then do so.  Be consistent.' },
      { term: 'Avoid', description: 'Never do.'}
  ]);
});

app.get('/principles', function (req, res) {
    res.send(
        {
            title: 'Single Responsibility Principle',
            description: 'Apply the single responsibility principle (SRP) to all components, services, and other symbols. This helps make the app cleaner, easier to read and maintain, and more testable.',
            rules: [
                { 
                    title: 'Rule of One',
                    source: 'google',
                    code: 'Google Style 01-01',
                    description: '<p><span class="glyphicon glyphicon-ok"></span> Do define one thing, such as a service or component, per file.</p> Consider limiting files to 400 lines of code.',
                    reasons: [
                        'One component per file makes it far easier to read, maintain, and avoid collisions with teams in source control.',
                        'One component per file avoids hidden bugs that often arise when combining components in a file where they may share variables, create unwanted closures, or unwanted coupling with dependencies.',
                        'A single component can be the default export for its file which facilitates lazy loading with the router.'
                    ]
                },
                { 
                    title: 'Small Functions',
                    source: 'google',
                    code: 'Google Style 01-02',
                    description: '<p><span class="glyphicon glyphicon-ok"></span> Do define small functions. Consider limiting to no more than 75 lines.</p>',
                    reasons: [
                        'Small functions are easier to test, especially when they do one thing and serve one purpose.',
                        'Small functions promote reuse.',
                        'Small functions are easier to read.',
                        'Small functions are easier to maintain.',
                        'Small functions help avoid hidden bugs that come with large functions that share variables with external scope, create unwanted closures, or unwanted coupling with dependencies.'
                    ]
                },
            ]
        }
    );
  });

  app.get('/naming', function (req, res) {
    res.send(
        {
            title: 'Naming',
            description: 'Naming conventions are hugely important to maintainability and readability. This guide recommends naming conventions for the file name and the symbol name.',
            rules: [
                { 
                    title: 'General Naming Guidelines',
                    source: 'google',
                    code: 'Google Style 02-01',
                    description: `
                    <p><span class="glyphicon glyphicon-ok"></span> Do use consistent names for all symbols.<br /></p>
                    <p><span class="glyphicon glyphicon-ok"></span> Do follow a pattern that describes the symbol's feature then its type. The recommended pattern is <code>feature.type.ts</code>.</p>
                    `,
                    reasons: [
                        `Naming conventions help provide a consistent way to find content at a glance. Consistency within the project is vital. Consistency with a team is important. Consistency across a company provides tremendous efficiency.`,
                        `The naming conventions should simply help find desired code faster and make it easier to understand.`,
                        `Names of folders and files should clearly convey their intent. For example, app/heroes/hero-list.component.ts may contain a component that manages a list of heroes.`
                    ]
                },
                { 
                    title: 'File Naming Conventions',
                    source: 'ae',
                    code: 'AE Style 02-01',
                    description: `
                    <p><span class="glyphicon glyphicon-ok"></span> Do follow the recommended pattern that describes the symbol's feature then its type.</p>
                    <p><span class="glyphicon glyphicon-ok"></span> Do select from one of the valid types listed in the table below.</p>
                    <p><span class="glyphicon glyphicon-ok"></span> Do follow the recommended guidelines for the feature name.</p>
                    
                <div class="row">
                    <div class="col-md-6">
                        <div class="panel panel-default">
                            <!-- Default panel contents -->
                            <div class="panel-heading">List of Valid Types</div>
                
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>module</td>
                                        <td><code>feature.<b>module</b>.ts</code></td>
                                    </tr> 
                                    <tr>
                                        <td>router</td>
                                        <td><code>feature.<b>router</b>.ts</code></td>
                                    </tr>                          
                                    <tr>
                                        <td>component</td>
                                        <td><code>feature.<b>component</b>.ts</code></td>
                                    </tr>
                                    <tr>
                                        <td>directive</td>
                                        <td><code>feature.<b>directive</b>.ts</code></td>
                                    </tr>
                                    <tr>
                                        <td>pipe</td>
                                        <td><code>feature.<b>pipe</b>.ts</code></td>
                                    </tr>
                                    <tr>
                                        <td>service</td>
                                        <td><code>feature.<b>service</b>.ts</code></td>
                                    </tr>
                                    <tr>
                                        <td>factory</td>
                                        <td><code>feature.<b>factory</b>.ts</code></td>
                                    </tr>
                                    <tr>
                                        <td>model</td>
                                        <td><code>feature.<b>model</b>.ts</code></td>
                                    </tr>
                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="panel panel-default">
                            <!-- Default panel contents -->
                            <div class="panel-heading">Feature Naming Guidelines</div>
                
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Rule</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>All lowercase</td>
                                        <td><code><b>feature</b>.type.ts</code></td>
                                    </tr>
                                    <tr>
                                        <td>May contain dashes</td>
                                        <td><code><b>feature-list</b>.type.ts</code></td>
                                    </tr>
                                    <tr>
                                        <td>Avoid numbers, use string value instead</td>
                                        <td><code><b>feature-one</b>.type.ts</code></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                


                    `,
                    reasons: [
                    ]
                },
                { 
                    title: 'Separate file names with dots and dashes',
                    source: 'google',
                    code: 'Google Style 02-02',
                    description: `
                    <p><span class="glyphicon glyphicon-ok"></span> Do use dashes to separate words in the descriptive name.</p>
                    <p><span class="glyphicon glyphicon-ok"></span> Do use dots to separate the descriptive name from the type.</p>
                    <p><span class="glyphicon glyphicon-ok"></span> Do use consistent type names for all components following a pattern that describes the component's feature then its type. A recommended pattern is feature.type.ts.</p>
                    <p><span class="glyphicon glyphicon-ok"></span> Do use conventional type names including .service, .component, .pipe, .module, and .directive. Invent additional type names if you must but take care not to create too many.</p>
                    
                    `,
                    reasons: [
                        'Type names provide a consistent way to quickly identify what is in the file.',
                        'Type names make it easy to find a specific file type using an editor or IDE\'s fuzzy search techniques.',
                        'Unabbreviated type names such as .service are descriptive and unambiguous. Abbreviations such as .srv, .svc, and .serv can be confusing.',
                        'Type names provide pattern matching for any automated tasks.'
                    ]
                },   
                
                { 
                    title: 'Symbols and file names',
                    source: 'google',
                    code: 'Google Style 02-03',
                    description: `
                    <p><span class="glyphicon glyphicon-ok"></span> Do use consistent names for all assets named after what they represent.</p>
                    <p><span class="glyphicon glyphicon-ok"></span> Do use upper camel case for class names.</p>
                    <p><span class="glyphicon glyphicon-ok"></span> Do match the name of the symbol to the name of the file.</p>
                    <p><span class="glyphicon glyphicon-ok"></span> Do append the symbol name with the conventional suffix (such as Component, Directive, Module, Pipe, or Service) for a thing of that type.</p>
                    <p><span class="glyphicon glyphicon-ok"></span> Do give the filename the conventional suffix (such as .component.ts, .directive.ts, .module.ts, .pipe.ts, or .service.ts) for a file of that type.</p>

                    <table class="table">
                    <thead>
                        <tr>
                            <th>Symbol Name</th>
                            <th>File Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>All lowercase</td>
                            <td><code><b>feature</b>.type.ts</code></td>
                        </tr>
                        <tr>
                            <td>May contain dashes</td>
                            <td><code><b>feature-list</b>.type.ts</code></td>
                        </tr>
                        <tr>
                            <td>Avoid numbers, use string value instead</td>
                            <td><code><b>feature-one</b>.type.ts</code></td>
                        </tr>
                    </tbody>
                </table>
                    `,  
                    reasons: [
                        'Consistent conventions make it easy to quickly identify and reference assets of different types.'
                    ]
                },
            ]
        }
    );
  });

 
app.listen(3000);