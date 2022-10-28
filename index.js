// var D= {'2020-01-01':6, '2020-01-04': 12, '2020-01-05': 14, '2020-01-06': 2, '2020-01-07':4}

// var D = {'2020-01-01':4, '2020-01-02': 4, '2020-01-03': 6, '2020-01-04': 8, '2020-01-05': 2, '2020-01-06': -6, '2020-01-07': 2, '2020-01-08': -2}
const weekday = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

checkIfZero = (res)=>{
    weekday.forEach((day, index) => {
        console.log(res[day], index);
        if(res[day] == 0) {
            if(res[weekday[index+1]] == 0) {
                let i=1;
                while(res[weekday[index+i]] == 0) {
                    i++;
                }
                let diff = res[weekday[index+i]] - res[weekday[index-1]];
                let avg = diff/(i+1);
                // console.log(res[weekday[index-1]], res[weekday[index+i]]);
                // console.log({"average":avg}, {"diff":diff}, {"i":i});

                for(let j=0; j<i; j++) {
                    res[weekday[index+j]] = res[weekday[index-1]] + avg*(j+1);
                }
            }else{
                res[day] = (res[weekday[index-1]] + res[weekday[index+1]])/2;
            }
            // console.log(day);
            
        }
    });
    return res;
}

function solution(D) {
    let res=weekday.reduce((acc,day)=> {
        return {...acc, [day]:0};
    }, {});
    for( const [key, value] of Object.entries(D)) {
        const d = new Date(key);
        let day = d.getDay();
        if(day === 0) day = 6
        else day = day - 1;
        res[weekday[day]] += value;
    }

    return checkIfZero(res);
}


module.exports = solution;