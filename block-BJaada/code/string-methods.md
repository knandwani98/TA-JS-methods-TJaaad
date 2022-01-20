Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
   - Parameter: is null. It is called without value .
   - Return: It returns the Lower Case data to Upper Case. (String Data Type)
   - Example: 
   ```js
   let name = "Kushal Nandwani";
   name.toUpperCase (); //'KUSHAL NANDWANI'
   let error = "There is no place like 127.0.0.1";
   error.toUpperCase (); // 'THERE IS NO PLACE LIKE 127.0.0.1'
   ```

3. `toLowerCase`
   - Parameter : any parameters doesn't work, Null;
   - Return : It returns all value in lower case (String Data Type);
    - Example :
    ```js
       let name = "KUSHAL NANDWANI";
   name.toLowerCase (); // 'Kushal Nandwani'
   let error = "THERE IS NO PLACE LIKE 127.0.0.1";
   error.toLowerCase (); // 'There is no place like 127.0.0.1'
    ```
4. `trim`
 - Parameter :  any parameters doesn't work, Null.
 - Return : It removes the extra spaces from start and end. (Strring & Number Data Type)
 - Example : 
 ```js
 let name = "      Kushal Nandwani      "
 name.trim(); // "Kushal Nandwani"
 let error = "         THERE IS NO PLACE LIKE 127.0.0.1                                                                 ";
error.trim() // "THERE IS NO PLACE LIKE 127.0.0.1"
 ```
5. `trimEnd`
 - Parameter :  any parameters doesn't work, Null.
 - Return : It only removes the extra spaces from end. (Strring & Number Data Type)
 - Example : 
 ```js
 let name = "Kushal Nandwani      "
 name.trim(); // "Kushal Nandwani"
 let error = "   THERE IS NO PLACE LIKE 127.0.0.1                                                                 ";
error.trim() // "   THERE IS NO PLACE LIKE 127.0.0.1"
 ```
6. `trimStart`
 - Parameter :  any parameters doesn't work, Null.
 - Return : It removes the extra spaces only from start. (Strring & Number Data Type)
 - Example : 
 ```js
 let name = "      Kushal Nandwani"
 name.trim(); // "Kushal Nandwani"
 let error = "         THERE IS NO PLACE LIKE 127.0.0.1      ";
error.trim() // "THERE IS NO PLACE LIKE 127.0.0.1     "
 ```

7. `concat`
parameter : add many values you want by just using conjuction "," (val1, val2, .......val10);
return : It will concatinate the every values into new string. (Number and String Data Type)
example: 
```js
let firstName = "Kushal", lastName = "Nandwani", midName = " ";
firstName.concat(midName, lastName) // "Kushal Nandwani"

 let error = "THERE IS NO PLACE LIKE 127.0.0.1";

firstName.concat(" says ", error);
```
8. `endsWith`

9. `includes`
10. `indexOf`
11. `lastIndexOf`
12. `padEnd`
13. `padStart`
14. `repeat`
15. `replace`
16. `slice`
17. `split`
18. `substring`
