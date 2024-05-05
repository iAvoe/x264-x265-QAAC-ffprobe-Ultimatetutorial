/*jshint esversion: 6 */
/*jslint devel: true */
/*eslint no-extend-native: ["error", { "exceptions": ["Object"] }]*/
/**
 * Jia-Cheng Gong (JC) - 000758631, 2024
 */
var document; // Rectifying 'document not defined'
var window; // Rectifying 'window not defined'
if (document !== "undefined") {
    // Code that relies on the document object
    document.cookie = 'CookieName=NULL; SameSite=Strict';
}
/**
 * Click image to enlarge - up to 3 digits
 */
imgs = document.querySelectorAll('img');
let LRToUDOrientationID = 0;
for (let i=0; i<imgs.length; i++) {
    imgs[i].addEventListener('click', ()=>{ 
        switch(imgs[i].getAttribute('class')) {
            case 'img-medium':
                imgs[i].setAttribute("class", "");
                break;
            case '':
                imgs[i].setAttribute("class", "img-small");
                break;
            case 'img-small':
                imgs[i].setAttribute("class", "img-medium");
                break;
            // Images under row column grid system
            case 'img-medium img-right col-4': // Rotation 1 - Medium to Large
                imgs[i].setAttribute("class", "img-right col-auto");
                // i.e., Image element id: LR-UD-2, then the same column text block element id: LR-UD-1
                LRToUDOrientationID = parseInt(imgs[i].id.substr(6, [imgs[i].id.length]));
                document.getElementById("LR-UD-"+(LRToUDOrientationID-1).toString().padStart(3, '0')).setAttribute("class", "col-auto");
                break;
            case 'img-right col-auto': // Rotation 2 - Large to Small
                imgs[i].setAttribute("class", "img-small img-right col-2");
                // i.e., Image element id: LR-UD-2, then the same column text block element id: LR-UD-1
                LRToUDOrientationID = parseInt(imgs[i].id.substr(6, [imgs[i].id.length]));
                document.getElementById("LR-UD-"+(LRToUDOrientationID-1).toString().padStart(3, '0')).setAttribute("class", "col-10");
                break;
            case 'img-small img-right col-2': // Rotation 3 - Smal to Medium
                imgs[i].setAttribute("class", "img-medium img-right col-4");
                // i.e., Image element id: LR-UD-2, then the same column text block element id: LR-UD-1
                LRToUDOrientationID = parseInt(imgs[i].id.substr(6, [imgs[i].id.length]));
                document.getElementById("LR-UD-"+(LRToUDOrientationID-1).toString().padStart(3, '0')).setAttribute("class", "col-8");
                break;
            // Edge case - Images under row column grid system and auto margin bottom
            case 'img-medium img-right col-4 mb-auto': // Rotation 1 - Medium to Large
                imgs[i].setAttribute("class", "img-right col-auto mb-auto");
                // i.e., Image element id: LR-UD-2, then the same column text block element id: LR-UD-1
                LRToUDOrientationID = parseInt(imgs[i].id.substr(6, [imgs[i].id.length]));
                document.getElementById("LR-UD-" + (LRToUDOrientationID - 1).toString().padStart(3, '0')).setAttribute("class", "col-auto");
                break;
            case 'img-right col-auto mb-auto': // Rotation 2 - Large to Small
                imgs[i].setAttribute("class", "img-small img-right col-2 mb-auto");
                // i.e., Image element id: LR-UD-2, then the same column text block element id: LR-UD-1
                LRToUDOrientationID = parseInt(imgs[i].id.substr(6, [imgs[i].id.length]));
                document.getElementById("LR-UD-" + (LRToUDOrientationID - 1).toString().padStart(3, '0')).setAttribute("class", "col-10");
                break;
            case 'img-small img-right col-2 mb-auto': // Rotation 3 - Smal to Medium
                imgs[i].setAttribute("class", "img-medium img-right col-4 mb-auto");
                // i.e., Image element id: LR-UD-2, then the same column text block element id: LR-UD-1
                LRToUDOrientationID = parseInt(imgs[i].id.substr(6, [imgs[i].id.length]));
                document.getElementById("LR-UD-" + (LRToUDOrientationID - 1).toString().padStart(3, '0')).setAttribute("class", "col-8");
                break;
            // Edge case - iamges with margin top
            case 'img-medium img-right col-4 mt-3': // Rotation 1 - Medium to Large
                imgs[i].setAttribute("class", "img-right col-auto mt-3");
                // i.e., Image element id: LR-UD-2, then the same column text block element id: LR-UD-1
                LRToUDOrientationID = parseInt(imgs[i].id.substr(6, [imgs[i].id.length]));
                document.getElementById("LR-UD-"+(LRToUDOrientationID-1).toString().padStart(3, '0')).setAttribute("class", "col-auto");
                break;
            case 'img-right col-auto mt-3': // Rotation 2 - Large to Small
                imgs[i].setAttribute("class", "img-small img-right col-2 mt-3");
                // i.e., Image element id: LR-UD-2, then the same column text block element id: LR-UD-1
                LRToUDOrientationID = parseInt(imgs[i].id.substr(6, [imgs[i].id.length]));
                document.getElementById("LR-UD-"+(LRToUDOrientationID-1).toString().padStart(3, '0')).setAttribute("class", "col-10");
                break;
            case 'img-small img-right col-2 mt-3': // Rotation 3 - Small to Medium
                imgs[i].setAttribute("class", "img-medium img-right col-4 mt-3");
                // i.e., Image element id: LR-UD-2, then the same column text block element id: LR-UD-1
                LRToUDOrientationID = parseInt(imgs[i].id.substr(6, [imgs[i].id.length]));
                document.getElementById("LR-UD-"+(LRToUDOrientationID-1).toString().padStart(3, '0')).setAttribute("class", "col-8");
                break;   
            // Edge case - iamges with margin top and auto margin bottom
            case 'img-medium img-right col-4 mt-3 mb-auto': // Rotation 1 - Medium to Large
                imgs[i].setAttribute("class", "img-right col-auto mt-3 mb-auto");
                // i.e., Image element id: LR-UD-2, then the same column text block element id: LR-UD-1
                LRToUDOrientationID = parseInt(imgs[i].id.substr(6, [imgs[i].id.length]));
                document.getElementById("LR-UD-" + (LRToUDOrientationID - 1).toString().padStart(3, '0')).setAttribute("class", "col-auto");
                break;
            case 'img-right col-auto mt-3 mb-auto': // Rotation 2 - Large to Small
                imgs[i].setAttribute("class", "img-small img-right col-2 mt-3 mb-auto");
                // i.e., Image element id: LR-UD-2, then the same column text block element id: LR-UD-1
                LRToUDOrientationID = parseInt(imgs[i].id.substr(6, [imgs[i].id.length]));
                document.getElementById("LR-UD-" + (LRToUDOrientationID - 1).toString().padStart(3, '0')).setAttribute("class", "col-10");
                break;
            case 'img-small img-right col-2 mt-3 mb-auto': // Rotation 3 - Small to Medium
                imgs[i].setAttribute("class", "img-medium img-right col-4 mt-3 mb-auto");
                // i.e., Image element id: LR-UD-2, then the same column text block element id: LR-UD-1
                LRToUDOrientationID = parseInt(imgs[i].id.substr(6, [imgs[i].id.length]));
                document.getElementById("LR-UD-" + (LRToUDOrientationID - 1).toString().padStart(3, '0')).setAttribute("class", "col-8");
                break;    
            default:
                console.log("Click image event switch failed: calculated id "+LRToUDOrientationID);
                break;
        }
    }, false);
}

/**
 * Change all anchor behavior to open external page
 */
anchors = document.querySelectorAll('a');
for (let i=0; i<anchors.length; i++) { anchors[i].setAttribute("target", "_blank"); }
