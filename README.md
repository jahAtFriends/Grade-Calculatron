# Grade Calculatron
Grade calculator for the CS Competency Rubric

## Access The Calculator
The most recent version of the grade calculator can be accessed [here](http://jahatfriends.github.io/Grade-Calculatron).
Updates pushed to the main branch of this repository will automaticaly become visible.

## Grade Calculation
Grades are calculated according to the following algorithm:

1. Each rubric category is assigned a letter grade (A+ through F)
2. Letter grades are converted to a 4-point scale
3. A weighted average is taken of the 4-point scores from each category
4. The average is converted back into a letter grade and a percent score

### Conversion between letter grades, 4-point scale, and percentages
Whenever a conversion between letter grades, 4-point scores, and percentages is needed,
the following table serves as a reference. Note that percentage grades are always rounded
to the nearest whole percent. Note also that the minimum allowed grade is a 59% (F).

| Letter Grade | 4-point Score | Percentage Score |
|--------------|---------------|------------------|
|     A+       | 4.0           | 100%             |
|     A        | 3.8           | 96%              |
|     A-       | 3.6           | 92%              |
|     B+       | 3.3           | 89%              |
|     B        | 3.0           | 86%              |
|     B-       | 2.7           | 82%              |
|     C+       | 2.3           | 79%              |
|     C        | 2.0           | 76%              |
|     C-       | 1.7           | 72%              |
|     D+       | 1.3           | 69%              |
|     D        | 1.0           | 66%              |
|     D-       | 0.5           | 62%              |
|     F        | 0.0           | 59%              |

### Weighted Average Calculation
To take a weighted average of all categories on the rubric, let $g_i$ denote the 4-point score of the $i$-th category
and $w_i$ be the weight corresponding to the same category. Then the overall 4-point grade $G$ is given by 

$$G = \sum_i g_i \cdot w_i $$

### Conversion Back to Letter Grade and Percentage

The weighted average yields a 4-point score. The final letter grade is given by the row which contains the greatest lower bound
for that score.

It is usually necessary to convert this back to a percentage score. For this, we use the third column of our table. In the case
where the weighted average falls exactly on one of the 4-point scores, the percentage score will be the lower bound for that range.
Otherwise the score falls between two rows. In that case, the percentage will be calculated by mapping the interval of the
bounding 4-point scores to the corresponding percentages.

For example, the 4-point average of 3.1 falls between a B and B+ which corresponds to the percentage range 83% - 87% and a 4-point
range of 3.0 - 3.3. Thus, we map the 4-point interval to the percentage interval to calculate the final grade, rounded to the nearest
percent. In some edge cases, this may result in a rounding up of a percentage score to the next letter grade (e.g. a 3.2999 is 
_technically_ a B-, but would still round to a grade of 87%). This is the intended operation of the formula.

Here is the proper formula for the percentage score P given the 4-point average $G$, the bounding 4-point scores $g_l$ and $g_u$,
and the bounding percentage scores $p_l$ and $p_u$:

$$P = \lceil\frac{G-g_l}{g_u-g_l} * (p_u - p_l) + p_l)\rceil$$
