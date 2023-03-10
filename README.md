# Remove External Brackets

**"removeExternalBrackets"** is a small library designed to remove external matching brackets on any string input.

It's written entirely in JavaScript and can be used by simply calling the function from an external program.

For example, you can use the _index.html_ example file in this repository, or you can create your own web page.

To use the library, import the _removeExternalBrackets.js_ file.  
The file includes two functions:

1.  The first one (_removeExternalBrackets_) works only with non-pathological inputs. In case a pathological string is provided, the function returns the input string.
2.  The second one (_repairBrackets)_ accepts pathological inputs too.

Following the structure of the functions:

> `string removeExternalBrackets(string inputString)`

> `string repairBrackets(string inputString)`

---

## **Example**

The following is an example of an HTML page using the library:

```html
    <html>
        <script src="./removeExternalBrackets.js"></script>
        
        <body onload="
                        let inputV = prompt('Insert a valid input');
                        alert(removeExternalBrackets(inputV));
                        let inputI = prompt('Insert a valid or a pathological input');
                        alert(repairBrackets(inputI));">
        </body>
    </html>
```

<mark>Please, make sure to locate the JS file in the same directory as the HTML page, or to change the file path in the script tag.</mark>

---

## **Description**

The _removeExternalBrackets_ function gets a valid string as input and returns the same string without the external matching brackets.

| Input | Output |
| --- | --- |
| `(abc)` | `abc` |
| `((abc))` | `abc` |
| `(abc` | `(abc` |
| <br> |   |
| `()` |   |
| `(ab) (cd)` | `(ab) (cd)` |
| `((ab) (cd))` | `(ab) (cd)` |
| `ab(cd)` | `ab(cd)` |

<mark>**If a pathological input is provided, the functions return the input string unchanged.**  
**Use the** _**repairBrackets**_ **if you want to work with pathological inputs.**</mark>

In the case of a pathological string input, repairBrackets adds to the end of the string as many brackets as the difference of the number between open and closed brackets, to balance the number of brackets. In the case of inverted brackets, it adds an opposing bracket to the beginning and end of the string.  
E.g. `ab)(ab)` => `(ab)(ab)`

---

## **Behavior**

### “How can we be reasonably sure about the correctness of the solution?”

To be reasonably sure about the correctness of the solution, you can follow these steps:

*   Understand the requirements: Make sure to understand the requirements of the problem and how the library is supposed to work.
*   Identify test cases: Identify a set of test cases that cover the various scenarios where the library is expected to work correctly. This could include input strings with nested brackets, and invalid input strings.
*   Write test cases: Write test cases for the identified scenarios and execute them against the library.
*   Check output: Check the output of the library against the expected output for each test case. Make sure the library returns the expected output for all test cases.
*   Edge cases: Identify any edge cases that may not be covered in the initial set of test cases and add them to the test suite. Edge cases could include input strings with large numbers of brackets or extreme cases like input strings with millions of characters.
*   Test automation: Automate the test so that it can be run easily and frequently. This will help catch any regressions in the library as new features are added or changes are made.
*   Code review: Review the code of the library to ensure that it is well-designed, efficient, and readable. Ensure that the code is well documented and adheres to coding standards.

By following these steps, you can be reasonably sure about the correctness of the solution. However, it's important to note that testing can never guarantee 100% correctness. An essential part of testing is to try with as wide a range of inputs as possible.

---

## **Performance**

### “Space-time complexity of the solution (General and language related)”

The space-time complexity of the given JavaScript function can be analyzed as follows:

Time Complexity:

*   The function uses three loops to iterate through each character of the input string. Each of these loops has a worst-case time complexity of O(n), making it a linear operation where n is the length of the input string.

Space Complexity:

*   The function uses a constant amount of additional space to store the counter variable and the loop variables. Hence, the space complexity of the function is O(1). This solution is more optimized than using a stack to store the opening brackets.

Language Related Space-Time Complexity:

*   JavaScript's built-in String.charAt method has a time complexity of O(1), which means that accessing a specific character in a string takes constant time.
*   The slice method used in the function has a time complexity of O(n), where n is the length of the substring being sliced.
*   The startsWith and endsWith methods used to check for matching brackets have a time complexity of O(1), having to check only the first and last character of the string.
*   Storing a string has a linear space complexity (O(n)).

In conclusion, the given JavaScript function has a time complexity of O(n) and a space complexity of O(1). The language-related space-time complexities are also constant, except for the slice method, which has a time complexity of O(n).
