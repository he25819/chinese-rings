/**
 * Created by xinweihe on 6/15/2018.
 */
var stepsDiv = document.getElementById("steps");
var ringsNum;
var count = 0;
var tempHtml = "";

var renderSimpleSteps = Function;
var renderVerboseSteps = Function;
var init = Function;
var moveTopRingsUseSimpleMode = Function;
var moveTopRingsUseVerboseMode = Function;
var displayMoveRings = Function;

(function() {
    renderSimpleSteps = function() {
        init();
        moveTopRingsUseSimpleMode(ringsNum, true);
        stepsDiv.innerHTML = tempHtml;
    };

    renderVerboseSteps = function() {
        init();
        moveTopRingsUseVerboseMode(ringsNum, true);
        stepsDiv.innerHTML = tempHtml;
    };

    init = function() {
        count = 0;
        tempHtml = "";
        ringsNum = document.getElementById("ringsNum").value;
        if (!(/^\d+$/.test(ringsNum))) {
            // alert("The number of rings must be a number");
            document.getElementById("ringsNum").value = 9;
            ringsNum = 9;
        }
        stepsDiv.innerHTML = "";
    };

    moveTopRingsUseSimpleMode = function(num, isMoveDown) {
        if (num <= 0) {
            alert("The number of rings must be positive!");
            return;
        }
        if (num == 1) {
            displayMoveRings("1", isMoveDown);
            return;
        } else if (num == 2) {
            displayMoveRings("1,2", isMoveDown);
            return;
        }

        moveTopRingsUseSimpleMode(num - 2, isMoveDown);
        displayMoveRings(num, isMoveDown);
        moveTopRingsUseSimpleMode(num - 2, !isMoveDown);
        moveTopRingsUseSimpleMode(num - 1, isMoveDown);
    };

    moveTopRingsUseVerboseMode = function(num, isMoveDown) {
        if (num <= 0) {
            return;
        }
        if (num == 1) {
            displayMoveRings("1", isMoveDown);
            return;
        }

        moveTopRingsUseVerboseMode(num - 2, isMoveDown);
        displayMoveRings(num, isMoveDown);
        moveTopRingsUseVerboseMode(num - 2, !isMoveDown);
        moveTopRingsUseVerboseMode(num - 1, isMoveDown);
    };

    displayMoveRings = function(str, isMoveDown) {
        tempHtml += "<p>step" + ++count + ": " + (isMoveDown ? "↓" : "↑") + " #" + str + "</p>";
    }
})();
