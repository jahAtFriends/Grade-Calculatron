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

| Letter Grade | 4-point Score | Percentage Range |
|--------------|---------------|------------------|
|     A+       | 4.0           | $(96, 100]$      |
|     A        | 3.8           | 93% - 96%        |
|     A-       | 3.6           | 90% - 92%        |
|     B+       | 3.3           | 87% - 89%        |
|     B        | 3.0           | 83% - 86%        |
|     B-       | 2.7           | 80% - 82%        |
|     C+       | 2.3           | 77% - 79%        |
|     C        | 2.0           | 73% - 76%        |
|     C-       | 1.7           | 70% - 72%        |
|     D+       | 1.3           | 67% - 69%        |
|     D        | 1.0           | 63% - 66%        |
|     D-       | 0.5           | 60% - 62%        |
|     F        | 0.0           | 59%              |

### Weighted Average Calculation
To take a weighted average of all categories on the rubric, let $g_i$ denote the 4-point score of the $i$-th category
and $w_i$ be the weight corresponding to the same category. Then the overall 4-point grade $G$ is given by 

$$G = \sum_i g_i \cdot w_i $$

### Conversion Back to Letter Grade and Percentage

The weighted average yields a 4-point score. If necessary to convert back to a letter grade use the chart above.
The third collumn gives a range of percentages
