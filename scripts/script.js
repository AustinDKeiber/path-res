/* 
    initiliazes variables for the icon area. Anything ending in Icon changes
    the blurryness of an icon's image and anything that has Text at the end
    controls the opacity of the box that is over the Icon's image, controls 
    the roundness of its corners, and controls the expansion of the designat-
    ed information areas.
 */
var container = $("#expander");
var brandingIcon = $('img#icon1');
var brandingText = $("h1#brandingIcon");
var adsIcon = $('img#icon2');
var adsText = $("h1#advertisementIcon");
var waIcon = $('img#icon3');
var waText = $("h1#waIcon");
var smIcon = $('img#icon4');
var smText = $("h1#socialMediaIcon");

var currentSelectedIcon = null;
var currentSelectedText = null;

$(document).ready(function () {

    /* ENTIRE SECTION IS FOR ICON SELECTION AREA */
    /* 
       Creates hovers for the box's that overlay the Icon's image that change the
       blurryness of the Icon's image that is under it. This is required because
       the user can't actually hover over the Icon's image meaning we can't add a
       hover using the CSS method.
    */
    brandingText.hover(function () {
        brandingIcon.css("filter", "blur(5px)");
    }, function () {
        brandingIcon.css("filter", "blur(0px)");
    });
    adsText.hover(function () {
        adsIcon.css("filter", "blur(5px)");
    }, function () {
        adsIcon.css("filter", "blur(0px)");
    });
    waText.hover(function () {
        waIcon.css("filter", "blur(5px)");
    }, function () {
        waIcon.css("filter", "blur(0px)");
    });
    smText.hover(function () {
        smIcon.css("filter", "blur(5px)");
    }, function () {
        smIcon.css("filter", "blur(0px)");
    });

    /* 
       Creates events that when the Box in front of the Icon's image is clicked 
       first checks to see if any of the boxes in front of the other Icon's images
       has the class 'clicked' class. If so a few things occur for that Icon.
            1)"clicked" class is removed from the Icon's Box.
                - Removing "clicked" takes away the constant roundness of the top 
                  corners of the Icon's box and changes the permanant opacity to
                  0.0
            2)"expanded" class is removed from the current expanded Icon info area
                - Removing "expanded" changes the height of the expanded box from
                  200 to 0.0 and changes the opacity of the box from 1.0 to 0.0
            3) Changes the blur of the Icon's image to 0
                - This is required to make sure that when another Icon is clicked 
                  the image of a previously clicked icon doesn't remain blurry.
            4) Hover for Icon's box is changed back to default hover
                - Default hover changes the blur of the Icon's image and then when
                  you stop hoving over the Icon's box the Icon's image should no 
                  longer be blurred.This happens because when an icon's box is 
                  clicked the leaving hover function is removed because the blur
                  neeeds to remain constant.
       Then the Icon that was actually clicked on is changed in multiple ways.
            1) Hover for Icon's box is changed to no longer have a style change
                - Required so that when the user leaves the Icon's box area the
                  box will remain with an opacity of 1.0 and have non rounded 
                  corners that connect to the Icon's information area.
            2)"clicked" class is added to the clicked Icon's box
                - This makes sure that the Icon's box remains solid and also 
                  allows the box to remain with an opacity of 1.0. This is impor
                  -tant because the box shouldn't be influced by any hover funct
                  -ions that might be applied to the Icon's box.
            3)"expanded" class is added to Icon's infomation area
                - Expanded class expands the information area for the Icon by 
                  changing the height from 0 to 200 and also changes the opacity
                  from 0 to 1.0
    */

    // BRANDING ICON'S BOX ON CLICK
    brandingText.on('click', function () {
        if (adsText.hasClass('clicked')) {
            adsText.removeClass('clicked');
            $('#adsInfo').removeClass('expanded');
            adsIcon.css("filter", "blur(0px)");
            adsText.hover(function () {
                adsIcon.css("filter", "blur(5px)");
            }, function () {
                adsIcon.css("filter", "blur(0px)");
            });
        } else if (waText.hasClass('clicked')) {
            waText.removeClass('clicked');
            $('#waInfo').removeClass('expanded');
            waIcon.css("filter", "blur(0px)");
            waText.hover(function () {
                waIcon.css("filter", "blur(5px)");
            }, function () {
                waIcon.css("filter", "blur(0px)");
            });
        } else if (smText.hasClass('clicked')) {
            smText.removeClass('clicked');
            $('#smInfo').removeClass('expanded');
            smIcon.css("filter", "blur(0px)");
            smText.hover(function () {
                smIcon.css("filter", "blur(5px)");
            }, function () {
                smIcon.css("filter", "blur(0px)");
            });
        }
        currentSelectedIcon = brandingIcon;
        currentSelectedText = brandingText;
        brandingText.hover(function () {
            brandingIcon.css("filter", "blur(5px)");
        });
        brandingText.addClass('clicked');
        $('#brandingInfo').delay(300).addClass('expanded');
    });

    // ADS ICON'S BOX ON CLICK
    adsText.on('click', function () {
        if (brandingText.hasClass('clicked')) {
            brandingText.removeClass('clicked');
            $('#brandingInfo').removeClass('expanded');
            brandingIcon.css("filter", "blur(0px)");
            brandingText.hover(function () {
                brandingIcon.css("filter", "blur(5px)");
            }, function () {
                brandingIcon.css("filter", "blur(0px)");
            });
        } else if (waText.hasClass('clicked')) {
            waText.removeClass('clicked');
            $('#waInfo').removeClass('expanded');
            waIcon.css("filter", "blur(0px)");
            waText.hover(function () {
                waIcon.css("filter", "blur(5px)");
            }, function () {
                waIcon.css("filter", "blur(0px)");
            });
        } else if (smText.hasClass('clicked')) {
            smText.removeClass('clicked');
            $('#smInfo').removeClass('expanded');
            smIcon.css("filter", "blur(0px)");
            smText.hover(function () {
                smIcon.css("filter", "blur(5px)");
            }, function () {
                smIcon.css("filter", "blur(0px)");
            });
        }
        currentSelectedIcon = adsIcon;
        currentSelectedText = adsText;
        adsText.hover(function () {
            adsIcon.css("filter", "blur(5px)");
        });
        adsText.addClass('clicked');
        $('#adsInfo').addClass('expanded');
    });

    // WEB/APP ICON'S BOX ON CLICK
    waText.on('click', function () {
        if (adsText.hasClass('clicked')) {
            adsText.removeClass('clicked');
            $('#adsInfo').removeClass('expanded');
            adsIcon.css("filter", "blur(0px)");
            adsText.hover(function () {
                adsIcon.css("filter", "blur(5px)");
            }, function () {
                adsIcon.css("filter", "blur(0px)");
            });
        } else if (brandingText.hasClass('clicked')) {
            brandingText.removeClass('clicked');
            $('#brandingInfo').removeClass('expanded');
            brandingIcon.css("filter", "blur(0px)");
            brandingText.hover(function () {
                brandingIcon.css("filter", "blur(5px)");
            }, function () {
                brandingIcon.css("filter", "blur(0px)");
            });
        } else if (smText.hasClass('clicked')) {
            smText.removeClass('clicked');
            $('#smInfo').removeClass('expanded');
            smIcon.css("filter", "blur(0px)");
            smText.hover(function () {
                smIcon.css("filter", "blur(5px)");
            }, function () {
                smIcon.css("filter", "blur(0px)");
            });
        }
        currentSelectedIcon = waIcon;
        currentSelectedText = waText;
        waText.hover(function () {
            waIcon.css("filter", "blur(5px)");
        });
        waText.addClass('clicked');
        $('#waInfo').addClass('expanded');
    });

    // SOCIAL MEDIA ICON'S BOX ON CLICK
    smText.on('click', function () {
        if (adsText.hasClass('clicked')) {
            adsText.removeClass('clicked');
            $('#adsInfo').removeClass('expanded');
            adsIcon.css("filter", "blur(0px)");
            adsText.hover(function () {
                adsIcon.css("filter", "blur(5px)");
            }, function () {
                adsIcon.css("filter", "blur(0px)");
            });
        } else if (waText.hasClass('clicked')) {

            waText.removeClass('clicked');
            $('#waInfo').removeClass('expanded');
            waIcon.css("filter", "blur(0px)");
            waText.hover(function () {
                waIcon.css("filter", "blur(5px)");
            }, function () {
                waIcon.css("filter", "blur(0px)");
            });
        } else if (brandingText.hasClass('clicked')) {

            brandingText.removeClass('clicked');
            $('#brandingInfo').removeClass('expanded');
            brandingIcon.css("filter", "blur(0px)");

            brandingText.hover(function () {
                brandingIcon.css("filter", "blur(5px)");
            }, function () {
                brandingIcon.css("filter", "blur(0px)");
            });
        }
        currentSelectedIcon = smIcon;
        currentSelectedText = smText;
        smText.hover(function () {
            smIcon.css("filter", "blur(5px)");
        });
        smText.addClass('clicked');
        $('#smInfo').addClass('expanded');
    });

});


$(document).mouseup(function (e) {
    // console.log(currentSelectedIcon);
    var clicked = e.target.classList;

    console.log(clicked);
    console.log(currentSelectedIcon);
    if(clicked != currentSelectedIcon){}
});