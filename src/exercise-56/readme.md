## Exercise

Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. So far you're using an algorithm that sorts in O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

Write a function that takes:

a list of `unsorted_scores`
the `highest_possible_score` in the game
and returns a sorted list of scores in less than O(nlgn) time.

For example:

```ts
unsorted_scores = [37, 89, 41, 65, 91, 53];
HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsorted_scores, HIGHEST_POSSIBLE_SCORE)
//returns [91, 89, 65, 53, 41, 37]
```
