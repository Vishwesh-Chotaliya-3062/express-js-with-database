const id = require("./index");

let states = [
    {
        StateName: "Alabama",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 1
    },
    {
        StateName: "Alaska",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 2
    },
    {
        StateName: "American Samoa",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 3
    },
    {
        StateName: "Arizona",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 4
    },
    {
        StateName: "Arkansas",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 5
    },
    {
        StateName: "California",
        Status: true,
        DateCreated: "2020-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 6
    },
    {
        StateName: "Colorado",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-11-05T14:48:00.000Z",
        ID: 7
    },
    {
        StateName: "Connecticut",
        Status: true,
        DateCreated: "2020-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 8
    },
    {
        StateName: "Delaware",
        Status: true,
        DateCreated: "2020-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 9
    },
    {
        StateName: "District Of Columbia",
        Status: true,
        DateCreated: "2020-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 10
    },
    {
        StateName: "Federated States Of Micronesia",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2015-10-05T14:48:00.000Z",
        ID: 11
    },
    {
        StateName: "Florida",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2015-10-05T14:48:00.000Z",
        ID: 12
    },
    {
        StateName: "Georgia",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2015-10-05T14:48:00.000Z",
        ID: 13
    },
    {
        StateName: "Guam",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2015-10-05T14:48:00.000Z",
        ID: 14
    },
    {
        StateName: "Hawaii",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 15
    },
    {
        StateName: "Idaho",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 16
    },
    {
        StateName: "Illinois",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 17
    },
    {
        StateName: "Indiana",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 18
    },
    {
        StateName: "Iowa",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 19
    },
    {
        StateName: "Kansas",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 20
    },
    {
        StateName: "Kentucky",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 21
    },
    {
        StateName: "Louisiana",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 22
    },
    {
        StateName: "Maine",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 23
    },
    {
        StateName: "Marshall Islands",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 24
    },
    {
        StateName: "Maryland",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 24
    },
    {
        StateName: "Massachusetts",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 25
    },
    {
        StateName: "Michigan",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 26
    },
    {
        StateName: "Minnesota",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 27
    },
    {
        StateName: "Mississippi",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 28
    },
    {
        StateName: "Missouri",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 29
    },
    {
        StateName: "Montana",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 30
    },
    {
        StateName: "Nebraska",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 31
    },
    {
        StateName: "Nevada",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 32
    },
    {
        StateName: "New Hampshire",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 33
    },
    {
        StateName: "New Jersey",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 34
    },
    {
        StateName: "New Mexico",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 35
    },
    {
        StateName: "New York",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 36
    },
    {
        StateName: "North Carolina",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 37
    },
    {
        StateName: "North Dakota",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 38
    },
    {
        StateName: "Northern Mariana Islands",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 39
    },
    {
        StateName: "Ohio",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 40
    },
    {
        StateName: "Oklahoma",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 41
    },
    {
        StateName: "Oregon",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 42
    },
    {
        StateName: "Palau",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 43
    },
    {
        StateName: "Pennsylvania",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 44
    },
    {
        StateName: "Puerto Rico",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 45
    },
    {
        StateName: "Rhode Island",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 46
    },
    {
        StateName: "South Carolina",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 47
    },
    {
        StateName: "South Dakota",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 48
    },
    {
        StateName: "Tennessee",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 49
    },
    {
        StateName: "Texas",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 50
    },
    {
        StateName: "Utah",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 51
    },
    {
        StateName: "Vermont",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 52
    },
    {
        StateName: "Virgin Islands",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 53
    },
    {
        StateName: "Virginia",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 54
    },
    {
        StateName: "Washington",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 55
    },
    {
        StateName: "West Virginia",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 56
    },
    {
        StateName: "Wisconsin",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 57
    },
    {
        StateName: "Wyoming",
        Status: true,
        DateCreated: "2011-10-05T14:48:00.000Z",
        DateModified: "2011-10-05T14:48:00.000Z",
        ID: 58
    }

];


//for Ascending Order
const ascendingStates = states.sort();
const ascendingStateNames = ascendingStates.filter(x => x.StateName).map(x => "State Name: " + x.StateName);

//for DateCreated in 2020 year
const statesIn2020 = states.filter(s1 => s1.DateCreated == "2020-10-05T14:48:00.000Z");
const stateNamesIn2020 = statesIn2020.filter(x => [x.StateName,x.DateCreated]).map(x => ["State Name: " + x.StateName, "Date Created: " + x.DateCreated]);

//for States by ID
const idByID = states.filter(x => [x.ID,x.StateName]).map(x => ["ID: " + x.ID,"State Name: " + x.StateName]);

//for length less than equal to 6
const stateLengthSix = states.filter(s2 => s2.StateName.length <= 6);
const stateNamesLengthSix = stateLengthSix.filter(x => x.StateName).map(x => "State Name: " + x.StateName);

//for adding Reverse Name
const ReverseString = str => [...str].reverse().join('');

var result = states.map(function(el) {
    var o = Object.assign({}, el);
    o.ReverseName = ReverseString(o.StateName);
    return o;
  })
const reverseName = result.filter(x => [x.StateName,x.DateModified,x.ReverseName])
                    .map(x => ["State Name: " + x.StateName, "Date Modified: " + x.DateModified, "Reverse State Name: " + x.ReverseName]);

//for Descending Order
const descendingStates = states.reverse();
const descendingStateNames = descendingStates.filter(x => x.StateName).map(x => "State Name: " + x.StateName);

module.exports = {states,ascendingStateNames,descendingStateNames,stateNamesIn2020,idByID,stateNamesLengthSix,reverseName};