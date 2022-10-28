# Date Fetch

## Description
Given a dictionary D where key is of form YYYY-MM-DD and its corresponding value is an integer, returns a new dictionary D such that:

1) it's key (type: String) is a Day: [Mon, Tue, Wed, Thu, Fri, Sat, Sun]
2) and corresponding value (type: INT) is sum of values on that day

## Example
*Input -- D= {'2020-01-01':4, '2020-01-02': 4, '2020-01-03': 6, '2020-01-04': 8, '2020-01-05': 2, '2020-01-06': -6,  '2020-01-07': 2, 2020-01-08': -2}

*Output -- D= ('Mon': -6, 'Tue': 2, 'Wed': 2, 'Thu': 4, 'Fri': 6, 'Sat': 8, 'Sun': 2}

## Running tests
To run tests, run the following command in the terminal:

* ```yarn add jest```
* ```yarn global add jest``` (if you don't have jest installed globally)
* ```jest```