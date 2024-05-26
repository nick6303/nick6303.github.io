var tooltipSlider = document.getElementById('slider-tooltips');

noUiSlider.create(tooltipSlider, {
    start: [2000, 4000],
    tooltips: [true, true],
    connect: true,
    step: 1000,
    range: {
        'min': 0,
        'max': 5000
    },
    format: {
        to: function(value) {
            return '$ ' + value;
        },
        from: function(value) {
            return value.replace('', '');
        }
    }
});