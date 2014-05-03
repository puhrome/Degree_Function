/**
 * Converting Centigrade to Fahrenheit Created by Phirom Yim on 4/29/14.
 *
 */

function convertToCentigrade(degFahren){
    var degCent;
    degCent = 5/9 * (degFahren - 32);
    return degCent;
}
convertToCentigrade(200);