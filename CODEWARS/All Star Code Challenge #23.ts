// This Kata is intended as a small challenge for my students

// All Star Code Challenge #23

// There is a certain multiplayer game where players are assessed at the end of the game for merit. Players are ranked according to an internal scoring system that players don't see.

// You've discovered the formula for the scoring system!

// Create a function called scoring() that takes an array of Player objects and returns an array of player names, in order of descending score (highest score is index 0, 2nd highest is index 1, etc.).

// Each player's score is calculated as follows:

// Each normal kill is worth 100 points
// Each assist is worth 50 points
// Each point of damage done is worth 0.5 points
// Each point of healing done is worth 1 point
// The longest kill streak is worth 2^N, where N is the number of kills of the streak
// Environmental kills are worth 500 points (These are counted separately from normal kills)
// For each of the above statistic, a Player object contains a respective "key:value" pairing. All values except the 'name' are integers.

// var player1 = {
//   name: "JuanPablo",
//   normKill: 5,
//   assist: 12,
//   damage: 3200,
//   healing: 0,
//   streak: 4,
//   envKill: 1
// }
// var player2 = {
//   name: "ProfX",
//   normKill: 2,
//   assist: 14,
//   damage: 600,
//   healing: 1500,
//   streak: 0,
//   envKill: 0
// }
// scoring([player1, player2]);
// //["JuanPable","ProfX"]
// // Scores of 3216 and 2701, respectively.
// Note:
// Assume the input array will ALWAYS have a properly constructed Player object (no missing keys or values)
// Names will not contain unusual characters nor repeat (names are unique)
// Players with the same score should be sorted by the order they appear in the array
// For simplicity, for a kill streak of 0 the kill streak calculation will yield 1 (or 20) points

interface Player {
  name: string;
  normKill: number;
  assist: number;
  damage: number;
  healing: number;
  streak: number;
  envKill: number;
}

function scoringTypescript(players: Player[]): string[] {
  const scores = players.map((player) => {
    const killScore = player.normKill * 100;
    const assistScore = player.assist * 50;
    const damageScore = player.damage * 0.5;
    const healingScore = player.healing * 1;
    const streakScore = Math.pow(2, player.streak) || 1;
    const envKillScore = player.envKill * 500;
    const totalScore =
      killScore +
      assistScore +
      damageScore +
      healingScore +
      streakScore +
      envKillScore;

    return {
      name: player.name,
      score: totalScore,
    };
  });

  scores.sort((a, b) => b.score - a.score);

  return scores.map((player) => player.name);
}

/**
 * Calculates the scores for each player in the given array of players and returns an array of player names sorted in descending order of their scores.
 * Each player's score is calculated using the following formula:
 * - Each normal kill is worth 100 points
 * - Each assist is worth 50 points
 * - Each point of damage done is worth 0.5 points
 * - Each point of healing done is worth 1 point
 * - The longest kill streak is worth 2^N, where N is the number of kills of the streak
 * - Environmental kills are worth 500 points (These are counted separately from normal kills)
 * @param {Array} players An array of Player objects, each containing keys 'name', 'normKill', 'assist', 'damage', 'healing', 'streak', and 'envKill'.
 * @returns {Array} An array of player names, in order of descending score (highest score is index 0, 2nd highest is index 1, etc.).
 */
function scoring(players) {
  const scores = players.map((player) => {
    const killScore = player.normKill * 100;
    const assistScore = player.assist * 50;
    const damageScore = player.damage * 0.5;
    const healingScore = player.healing * 1;
    const streakScore = Math.pow(2, player.streak) || 1;
    const envKillScore = player.envKill * 500;
    const totalScore =
      killScore +
      assistScore +
      damageScore +
      healingScore +
      streakScore +
      envKillScore;

    return {
      name: player.name,
      score: totalScore,
    };
  });

  scores.sort((a, b) => b.score - a.score);

  return scores.map((player) => player.name);
}
