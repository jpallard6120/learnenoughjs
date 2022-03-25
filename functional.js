let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // Ways of squaring numbers

// Named Function
function square1(array) {
    array.forEach(function(element) {
        return console.log(element * element)
    })
};

// Arrow function
let square2 = array => {
        array.forEach(function(element) {
            return console.log(element * element)
        })
    }
    //
    // USING MAP
    //
    // Map1 - Anonymous function
numbers.map(function(n) { return n * n });

// Map 2 - Arrow Function
numbers.map((n) => {
    return n * n
});

// Map 3 - Arrow function with single argument
numbers.map(n => n * n)

// Apply to slugifying strings
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Slugify a single element
function slugify(element) {
    return element.toLowerCase().split(/\s+/).join("-");
};

// Slugify an array - Imperative version
function imperativeUrls(elements) {
    let urls = []
    elements.forEach(function(element) {
        urls.push(slugify(element));
    })
    return urls
}

// Slugify an array - Functional version
function functionalUrls(elements) {
    return elements.map(element => slugify(element))
}

// Append a fully qualified URL to the slugified array
function qualifiedUrl(url, states) {
    return states.map(state => url + slugify(state))
}

//
// USING FILTER
//

let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element) {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles
};

function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1)
}

function functionalSinglesIncludes(elements, includes) {
    return elements.filter(element => element.toLowerCase().includes(includes.toLowerCase()))
}

function functionalSinglesRegex(elements) {
    return elements.filter(element => element.split(/\s+/).length === 2)
}

//
// USING REDUCE
//

// Imperative sum
function imperativeSum(elements) {
    let total = 0
    elements.forEach(function(n) {
        total += n
        console.log(total)
    });
    return total
}

// Using reduce
numbers.reduce((accumulator, element) => {
    accumulator += element
    return accumulator
}, 0);
// In one step
numbers.reduce((accumulator, element) => { return accumulator += element }, 0); // The second arg (0) is the starting value of the accumulator (optional in this case)

numbers.reduce((accumulator, element) => { return accumulator *= element });

// Another example

// Imperative
function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(function(element) {
        lengths[element] = element.length;
    });
    return lengths
}

function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length;
        return lengths
    }, {})
};