angular.module("umbraco")
    .controller("Rhythm.FontAwesomeIconPickerController",
        function($scope) {
            //empty for now
        });

angular.module('umbraco')
    .directive('fontAwesomeIconPicker', function(assetsService) {
    return {
        restrict: 'C', //matches class 'font-awesome-icon-picker'
        link: function(scope, el, attrs) {

                var PLUGIN_PATH = "/App_Plugins/FontAwesomeIconPicker";

                assetsService.load([
                        PLUGIN_PATH + '/vendor/select2/select2.min.js',
                    ])
                    .then(function() {
                        var format = function(value) {
                                return '<i class="fa ' + value.text + '"></i> ' + value.text;
                            },
                            options = {
                                formatSelection: format,
                                formatResult: format,
                                escapeMarkup: function(m) { return m; },
                                width: 'element'
                            };

                        //Ensure the custom select box loads after the first Angular digest
                        //so that the initial value matches model.value
                        setTimeout(function() {
                            $(el).select2(options);
                        }, 0);
                });

                assetsService.loadCss(PLUGIN_PATH + '/vendor/select2/select2.css');
                assetsService.loadCss(PLUGIN_PATH + '/vendor/fontawesome/fontawesome.min.css');
                assetsService.loadCss(PLUGIN_PATH + '/fontawesomeiconpicker.css');
        }
    };
});