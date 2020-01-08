// Alphabet war
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

function alphabetWar(fight) {
	let power = { w: 4, m: 4, p: 3, q: 3, b: 2, d: 2, s: 1, z: 1 },
		right = 0,
		left = 0;

	fight
		.split('')
		.filter(a => a.match(/w|m|p|q|b|d|s|z/))
		.map(x => (/w|p|b|s/.test(x) ? (left += power[x]) : (right += power[x])));

        if (right === left) {
            return "Let's fight again!"
        } else if (right > left) {
            return "Right side wins!"
        } else {
            return "Left side wins!"
        }
}

// different solution

function alphabetWar(fight) {
    const score = [...fight].reduce((n, c) => n + "sbpw".indexOf(c) - "zdqm".indexOf(c), 0)
    return score === 0 ? "Let's fight again!" : `${score < 0 ? "Right" : "Left"} side wins!`
  }

