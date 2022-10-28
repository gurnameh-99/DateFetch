const solution = require('./index');

describe('solution', () => {
    test("Case when all days have some value", () => {
        const D = {
            '2020-01-01': 4,
            '2020-01-02': 4,
            '2020-01-03': 6,
            '2020-01-04': 8,
            '2020-01-05': 2,
            '2020-01-06': -6,
            '2020-01-07': 2,
            '2020-01-08': -2
        }
        const expected = {
            'Mon': -6,
            'Tue': 2,
            'Wed': 2,
            'Thu': 4,
            'Fri': 6,
            'Sat': 8,
            'Sun': 2
        }
    
        expect(solution(D)).toStrictEqual(expected);
    });
    
    test("Case when some days are missing", () => {
        const D = {
            '2020-01-01': 6,
            '2020-01-04': 12,
            '2020-01-05': 14,
            '2020-01-06': 2,
            '2020-01-07': 4
        }
        const expected = {
            'Mon': 2,
            'Tue': 4,
            'Wed': 6,
            'Thu': 8,
            'Fri': 10,
            'Sat': 12,
            'Sun': 14
        }
    
        expect(solution(D)).toStrictEqual(expected);
    });

    test("Case when one day is missing", () => {
        const D = {
            '2022-10-01': 6,
            '2022-10-02': 12,
            '2022-10-03': 14,
            '2022-10-05': 2,
            '2022-10-06': 10,
            '2022-10-07': 7
        }
        const expected = {
            'Mon': 14,
            'Tue': 8,
            'Wed': 2,
            'Thu': 10,
            'Fri': 7,
            'Sat': 6,
            'Sun': 12
        }
    
        expect(solution(D)).toStrictEqual(expected);
    });
})