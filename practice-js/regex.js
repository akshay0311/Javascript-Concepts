const string = `There is something that I know about is 917-555-1234.
                Also this is coming up 646.555.1234.`

console.log(string);


/**
 * Literal Characters - Literally the character  
 * Meta Characters - Representative of the character 
 * 
 * Single Char            Quantifier            Postition
 * \d -> 0 - 9              * 0 or more         ^ beginning 
 * \w -> A-Z a-z 0-9        + 1 or more         $ end
 * \s -> whitespace         ? 0 or 1            \b word boundary  
 *  . -> any char           {min, max}  
 * \W -> prime of \w        {n}        
 * \S -> prime of \s
 * 
 * akshaycoding123@gmail.com  akshaycoding123@gmail.edu
 */

/**
 * Character Class -> [abc] which is a or b or c [a- z] any character from a through z 
 * Alternation ->  (net|org|com)
 * Meta character if wanted to be matched as a literal characters
 * 
 */