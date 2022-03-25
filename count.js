const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

let uniques = new Map();

let words = sonnet.match(/[a-zA-Z0-9_’'"]+/g);

for (let i = 0; i < words.length; i++) {
    let word = words[i]
    if (uniques.get(word)) {
        let currentValue = uniques.get(word)
        uniques.set(word, currentValue + 1)
    } else {
        uniques.set(word, 1)
    }
};

function numberCompare(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

function numberCompare(a, b) {
    return a - b
}

function square(a) {
    return Math.pow(a, 2)
}

let altPow = (a, b) => {
    return Math.pow(a, b)
}