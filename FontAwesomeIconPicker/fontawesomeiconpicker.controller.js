angular.module("umbraco")
    .controller("Rhythm.FontAwesomeIconPickerController",
        function($scope, assetsService) {
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
                            width: 'element',
                            allowClear: true,
                            placeholder: "None"
                        };

                    $('.font-awesome-icon-picker').select2(options);
                });

            assetsService.loadCss(PLUGIN_PATH + '/vendor/select2/select2.css');
            assetsService.loadCss(PLUGIN_PATH + '/vendor/fontawesome/fontawesome.min.css');
            assetsService.loadCss(PLUGIN_PATH + '/fontawesomeiconpicker.css');
        });