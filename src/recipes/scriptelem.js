/* 
    RECIPE: scriptElemStats
    -------------------------------------------------------------
    Author: thomasmo
    Description: Collect stats for script elements
*/

void function() {
    window.CSSUsage.StyleWalker.recipesToRun.push( function scriptElemStats( element, results) {
        if(element.nodeName.toLowerCase() == "script") {
            results["data"] = results["data"] || [];
            results["data"].push({
                async       : element.hasAttribute("async"),
                defer       : element.hasAttribute("defer"),
                external    : element.hasAttribute("src"),
                parentElem  : element.parentNode.nodeName.toLowerCase()
            });
        }

        return results;
    });
}();
