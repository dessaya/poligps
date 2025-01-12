let points = [
    {
        "type": "Feature",
        "properties": {"n": "260"},
        "geometry": {
            "coordinates": [
                -71.624926,
                -40.760209
            ],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "n": "220/218"
        },
        "geometry": {
            "coordinates": [
                -71.625772,
                -40.759892
            ],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {"n": "193"},
        "geometry": {
            "coordinates": [
                -71.625333,
                -40.759875
            ],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {"n": "151?"},
        "geometry": {
            "coordinates": [
                -71.624688,
                -40.75965
            ],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {"n": "163"},
        "geometry": {
            "coordinates": [
                -71.625418,
                -40.759587
            ],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {"n": "162"},
        "geometry": {
            "coordinates": [
                -71.625607,
                -40.759472
            ],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {"n": "151?"},
        "geometry": {
            "coordinates": [
                -71.624672,
                -40.759484
            ],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {"n": "87"},
        "geometry": {
            "coordinates": [
                -71.624375,
                -40.7591
            ],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {"n": "69"},
        "geometry": {
            "coordinates": [
                -71.62512,
                -40.758962
            ],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {"n": "59?"},
        "geometry": {
            "coordinates": [
                -71.62467,
                -40.758887
            ],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {"n": "57?"},
        "geometry": {
            "coordinates": [
                -71.624773,
                -40.758857
            ],
            "type": "Point"
        }
    },
];

for (let p of points) {
    var circle = L.marker([p.geometry.coordinates[1], p.geometry.coordinates[0]], {
        title: p.properties.n,
    }).addTo(map);
}
