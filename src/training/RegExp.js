import React from 'react'

function RegExp() {
   // let pattern = /^.d?[a-zA-Z0-9]+$/i  // i- case insensitive
   let pattern = /^\d{5,}$/ 
   let input = "5458999"
    console.log(pattern.test(input))
    console.log(pattern.exec(input))
    console.log(input.match(pattern))
    
    // ^ - start of the pattern
    // $ - end of the pattern
    // * - 0 or more
    // + - 1 or more
    // . - single char
    // ? - optional , present or absents
    // \d - only digits
    // \D - non digits
    // \w - characters (alphabets, numbers, _)
    // \W - non Characters
    // \s - space
    // \S - non space
    // {n} - exact n counts
    // {n,} - start counts from n
    // {n,m} - b/w n and m


  return (
    <div>
      
    </div>
  )
}

export default RegExp
