/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/eslint-plugin-rxjs-angular
 */

import rule = require("../../source/rules/prefer-takeuntil");
import { ruleTester } from "../utils";

ruleTester({ types: true }).run("prefer-takeuntil", rule, {
  valid: [],
  invalid: []
});
