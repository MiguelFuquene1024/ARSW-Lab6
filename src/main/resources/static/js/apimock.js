var apimock = (function () {

    var mockdata = [];

    mockdata["JhonConnor"] = [
        {
            author: "JhonConnor",
            name: "house",
            points: [
                {
                    x: 10,
                    y: 20
                },
                {
                    x: 15,
                    y: 25
                },
                {
                    x: 45,
                    y: 25
                }
            ]
        },
        {
            author: "JhonConnor",
            name: "bike",
            points: [
                {
                    x: 30,
                    y: 35
                },
                {
                    x: 40,
                    y: 45
                }
            ]
        }
    ]

    mockdata['LexLuthor'] = [
        {
            author: 'LexLuthor',
            name: 'kryptonite',
            points: [
                {
                    x: 60,
                    y: 65
                },
                {
                    x: 70,
                    y: 75
                }
            ]
        }
    ]
    
    mockdata['MiguelFuquene'] = [
        {
            author: 'MiguelFuquene',
            name: 'plano1',
            points: [
                {
                    x: 50,
                    y: 70
                },
                {
                    x: 70,
                    y: 65
                },
                {
                    x: 80,
                    y: 90
                },
            ]
        }
    ]
    mockdata['JavierLopez'] = [
        {
            author: 'JavierLopez',
            name: 'plano2',
            points: [
                {
                    x: 10,
                    y: 90
                },
                {
                    x: 70,
                    y: 30
                },
                {
                    x: 30,
                    y: 20
                },
            ]
        }
    ]
    mockdata['ArmandoCasillas'] = [
        {
            author: 'ArmandoCasillas',
            name: 'plano3',
            points: [
                {
                    x: 80,
                    y: 90
                },
                {
                    x: 15,
                    y: 45
                },
                {
                    x: 90,
                    y: 50
                },
                {
                    x: 80,
                    y: 70
                },
                {
                    x: 40,
                    y: 95
                },
            ]
        }
    ]

    return {
        getBlueprintsByAuthor: function(author, callback) {
            callback(null, mockdata[author]);
        },

        getBlueprintsByNameAndAuthor: function(name, author, callback) {
            blueprint = mockdata[author].find(function(blueprint) {
                return blueprint.name == name
            });
            callback(null, blueprint)
        }
    }

})();
