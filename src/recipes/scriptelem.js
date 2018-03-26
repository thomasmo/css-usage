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
            parentElemName = element.parentNode.nodeName.toLowerCase();
            results["data"].push({
                async       : element.hasAttribute("async") ? 1 : 0,
                defer       : element.hasAttribute("defer") ? 1 : 0,
                external    : element.hasAttribute("src") ? 1 : 0,
                parentElem  : { 
                    head    : (parentElemName === "head") ? 1 : 0,
                    body    : (parentElemName === "body") ? 1 : 0
                }
            });
        }

        return results;
    });
}();
