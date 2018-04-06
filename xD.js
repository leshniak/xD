(function (global) {
    var charCode = '',
        sourceCode = '',
        timeout = 0;

    function runAndReset() {
        Function('\'use strict\'; ' + sourceCode)();
        charCode = '';
        sourceCode = '';
        timeout = 0;
    }

    function xd(bit) {
        charCode += bit;

        if (!(charCode.length % 8)) {
            sourceCode += String.fromCharCode(parseInt(charCode, 2));
            charCode = '';
        }

        if (!timeout) {
            timeout = setTimeout(runAndReset, 0);
        }
    }

    function xD() { return xd('0'); }
    function XD() { return xd('1'); }

    Object.defineProperty(global, 'xD', {get: xD});
    Object.defineProperty(global, 'XD', {get: XD});
})((function () { return this; })());
