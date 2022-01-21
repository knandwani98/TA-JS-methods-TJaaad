Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
 - Parameter : It takes the parameter and act as a seperator and convert a array and convert it into a single string.
      - By default its parameter is ",".
      - It will always takes value as a string;
  - Example : 
  ```js 
   let numbers = [1, 2, 3];
   numbers.join (); // "1,2,3"
   numbers.join ("-"); // "1-2-3"
  ```
3. `flat`
 - Parameter : It removes the nesting from an array and convert it into new array;
  - It takes only first level on default;
  - It accepts the number value to drop till the particular nesting level(depth);
  - Infinity value can be used to determine and remove nesting from the complete array;
  - Example :
  ```js
   let numbers = [1, [2, [3, 4], 5,] 6];

   numbers.flat(); // [1, 2, [3, 4], 5, 6];
   numbers.flat();

  ```
4. `push`
5. `indexOf`
6. `lastIndexOf`
7. `includes`
8. `reverse`
9. `every`
10. `shift`
11. `splice`
12. `find`
13. `unshift`
14. `findIndex`
15. `filter`
16. `flat`
17. `forEach`
18. `map`
19. `pop`
20. `reduce`
21. `slice`
22. `some`
