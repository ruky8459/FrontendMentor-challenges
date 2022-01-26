var result;

fetch('data.json').then(function (res) {
    res.json().then(function (item) {
    result = item;
    return result;
    });
});

// fetch('data.json').then(function (res) {
//     res.json().then(function (data) {
//         result = data;
//         return result
//     });
// });

function displayDaily() {
    document.getElementById('workNow').innerHTML = result[0].timeframes.daily.current +'hrs';
    document.getElementById('workPre').innerHTML = 'yesterday - '+ result[0].timeframes.daily.previous +'hrs';
    document.getElementById('playNow').innerHTML = result[1].timeframes.daily.current +'hrs';
    document.getElementById('playPre').innerHTML = 'yesterday - '+ result[1].timeframes.daily.previous +'hrs';
    document.getElementById('studyNow').innerHTML = result[2].timeframes.daily.current +'hrs';
    document.getElementById('studyPre').innerHTML = 'yesterday - '+ result[2].timeframes.daily.previous +'hrs';
    document.getElementById('exerciseNow').innerHTML = result[3].timeframes.daily.current +'hrs';
    document.getElementById('exercisePre').innerHTML = 'yesterday - '+ result[3].timeframes.daily.previous +'hrs';
    document.getElementById('socialNow').innerHTML = result[4].timeframes.daily.current +'hrs';
    document.getElementById('socialPre').innerHTML = 'yesterday - '+ result[4].timeframes.daily.previous +'hrs';
    document.getElementById('selfCareNow').innerHTML = result[5].timeframes.daily.current +'hrs';
    document.getElementById('selfCarePre').innerHTML = 'yesterday - '+ result[5].timeframes.daily.previous +'hrs';
    document.getElementById('daily').style.opacity = 1;
    document.getElementById('weekly').style.opacity = 0.6;
    document.getElementById('monthly').style.opacity = 0.6;

}
function displayWeekly() {
    document.getElementById('workNow').innerHTML = result[0].timeframes.weekly.current +'hrs';
    document.getElementById('workPre').innerHTML = 'last week - '+ result[0].timeframes.weekly.previous +'hrs';
    document.getElementById('playNow').innerHTML = result[1].timeframes.weekly.current +'hrs';
    document.getElementById('playPre').innerHTML = 'last week - '+ result[1].timeframes.weekly.previous +'hrs';
    document.getElementById('studyNow').innerHTML = result[2].timeframes.weekly.current +'hrs';
    document.getElementById('studyPre').innerHTML = 'last week - '+ result[2].timeframes.weekly.previous +'hrs';
    document.getElementById('exerciseNow').innerHTML = result[3].timeframes.weekly.current +'hrs';
    document.getElementById('exercisePre').innerHTML = 'last week - '+ result[3].timeframes.weekly.previous +'hrs';
    document.getElementById('socialNow').innerHTML = result[4].timeframes.weekly.current +'hrs';
    document.getElementById('socialPre').innerHTML = 'last week - '+ result[4].timeframes.weekly.previous +'hrs';
    document.getElementById('selfCareNow').innerHTML = result[5].timeframes.weekly.current +'hrs';
    document.getElementById('selfCarePre').innerHTML = 'last week - '+ result[5].timeframes.weekly.previous +'hrs';
    document.getElementById('daily').style.opacity = 0.6;
    document.getElementById('weekly').style.opacity = 1;
    document.getElementById('monthly').style.opacity = 0.6;
}
function displayMonthly() {
    document.getElementById('workNow').innerHTML = result[0].timeframes.monthly.current +'hrs';
    document.getElementById('workPre').innerHTML = 'last month - '+ result[0].timeframes.monthly.previous +'hrs';
    document.getElementById('playNow').innerHTML = result[1].timeframes.monthly.current +'hrs';
    document.getElementById('playPre').innerHTML = 'last month - '+ result[1].timeframes.monthly.previous +'hrs';
    document.getElementById('studyNow').innerHTML = result[2].timeframes.monthly.current +'hrs';
    document.getElementById('studyPre').innerHTML = 'last month - '+ result[2].timeframes.monthly.previous +'hrs';
    document.getElementById('exerciseNow').innerHTML = result[3].timeframes.monthly.current +'hrs';
    document.getElementById('exercisePre').innerHTML = 'last month - '+ result[3].timeframes.monthly.previous +'hrs';
    document.getElementById('socialNow').innerHTML = result[4].timeframes.monthly.current +'hrs';
    document.getElementById('socialPre').innerHTML = 'last month - '+ result[4].timeframes.monthly.previous +'hrs';
    document.getElementById('selfCareNow').innerHTML = result[5].timeframes.monthly.current +'hrs';
    document.getElementById('selfCarePre').innerHTML = 'last month - '+ result[5].timeframes.monthly.previous +'hrs';
    document.getElementById('daily').style.opacity = 0.6;
    document.getElementById('weekly').style.opacity = 0.6;
    document.getElementById('monthly').style.opacity = 1;
}
document.getElementById('daily').addEventListener('click', displayDaily);
document.getElementById('weekly').addEventListener('click', displayWeekly);
document.getElementById('monthly').addEventListener('click', displayMonthly);
window.addEventListener('load',displayDaily);
