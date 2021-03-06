'use strict';

// import * as Link from "./TestFolder/link.js";
// import * as TreeMap from "treemap-js";

/*
 * dir: C:\Users\nickp\source\repos\JavaScriptPlayground\JavaScriptPlayground
 * - node app.js
 * <install nodes>: npm install <package name>
 *   - npm install -g is not working as of now
 *   
 * node overview:
 *   -treemap-js: TreeMap with O(lg2(n)) avg --> self-rebalancing red-black tree 
 *    see usage here "https://www.npmjs.com/package/treemap-js"
 *   -jest: test framework for JS applications (Assertions & Mockito all in one)
 *    see usage & tutorial here "https://jestjs.io/" "https://jestjs.io/docs/getting-started"
 *    
 * run application:
 * 1) traverse to where 'app.js' resides (see dir above) and run 'node app.js'
 * 2) traverse to where 'app.js' resides (see dir above) and run 'npm run app'
 * 
 * run tests:
 * 1) traverse to where 'app.js' resides (see dir above) and run 'npm run test
 */

// const Link = require("./TestFolder/link.js"); // works well

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const Link = require("./Src/CJS/link.cjs");
const Sum = require("./Src/CJS/sum.cjs");
const TreeMap = require("treemap-js");

import * as Foo from "./Src/ESM/moduleTest.js";

main();

function main() {

    console.log('Hello world');
    Link.testLink();
    console.log(`Sum of 5 + 5 = ${Sum.sum(5, 5)}`);

    Foo.foo();

    let power = 0;
    console.log(10 ** power++);
    console.log(10 ** ++power);
}