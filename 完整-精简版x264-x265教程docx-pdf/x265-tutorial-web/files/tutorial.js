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
 * LaTex formula conversion support
 */
MathJax = {
    tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
    svg: { fontCache: 'global' }
};

/**
 * Detection of mobile platform and increase line height in Desktop env
 * This only changes style, not class, otherwise it would break class detection on image click re-formating
 * Credit: http://detectmobilebrowsers.com/
 */
window.mobileCheck = function() {
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) return true;})(navigator.userAgent||navigator.vendor||window.opera);
    return false;
};
if (!window.mobileCheck()) {
    mainPara = document.querySelectorAll('p:not([class])');
    for (let i=0; i<mainPara.length; i++) {
        mainPara[i].style.lineHeight = "3rem";
    }
}
else { body.style.fontSize = "0.75rem"; }

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
