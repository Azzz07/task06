sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cnv/test/integration/FirstJourney',
		'cnv/test/integration/pages/tableList',
		'cnv/test/integration/pages/tableObjectPage'
    ],
    function(JourneyRunner, opaJourney, tableList, tableObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cnv') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThetableList: tableList,
					onThetableObjectPage: tableObjectPage
                }
            },
            opaJourney.run
        );
    }
);