/*
* **********************************************************
* OverallJS v1.0
* Copyright (C) 2015  Thilak49(thilak.chelliah49@gmail.com)
* Licensed under http://www.apache.org/licenses/LICENSE-2.0
* **********************************************************
*/
/**********Global Varibles*******/
var _AlphabetsSmall = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,i,o,p,q,r,s,t,u,v,w,x,y,z',
    _AlphabetsCaps = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z',
    _MonthName = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec',
    _Number = '0,1,2,3,4,5,6,7,8,9',
    _UserDefinedGlobVar = '',
    _StartTime = "",
    _EndTime = "";
/**********Global Functions******/

function _CalculateFactorial(num) {
    if (num == 1) {
        return num;
    } else {
        return num * _CalculateFactorial(num - 1);
    }
}
var OverallJS = {
    /*Method to get a random number between two numbers*/
    GetRandomNumBetween: function (a, b) {
        return Math.floor(Math.random() * b) + a;
    },
    /*Method to get a random alpha-numeric(small case) string based on number of digits*/
    GetRandomAlphaSmallNum: function (digits) {
        var aphaArray = _AlphabetsSmall.split(',');
        numArray = _Number.split(','),
        alphanum = "";
        for (var i = 1; i <= digits; i++) {
            var value = '';
            if (OverallJS.GetRandomNumBetween(1, 2) == 1) value = aphaArray[OverallJS.GetRandomNumBetween(0, 27)];
            else value = numArray[OverallJS.GetRandomNumBetween(0, 9)];
            alphanum = alphanum + value;
        }
        return alphanum;
    },
    /*Method to get a random alpha-numeric(small as well as upper case) string based on number of digits*/
    GetRandomAlphaSmallAndUpperNum: function (digits, isSplitted) {
        var aphaSmallArray = _AlphabetsSmall.split(','),
            aphaUpperArray = _AlphabetsCaps.split(','),
            numArray = _Number.split(','),
            alphanum = "";
        for (var i = 1; i <= digits; i++) {
            var value = '',
                chosenType = OverallJS.GetRandomNumBetween(1, 3);
            if (chosenType == 1) value = aphaSmallArray[OverallJS.GetRandomNumBetween(0, 27)];
            else if (chosenType == 2) value = aphaUpperArray[OverallJS.GetRandomNumBetween(0, 27)];
            else value = numArray[OverallJS.GetRandomNumBetween(0, 9)];
            if (value == undefined) value = '0';
            if (isSplitted == false || isSplitted == undefined)
                alphanum = alphanum + value;
            else
                alphanum = alphanum + value + ",";
        }
        if (isSplitted == true)
            alphanum.substring(0, alphanum.length - 1);

        return alphanum;
    },
    /*Method to get a random alpha-numeric(upper case) string based on number of digits*/
    GetRandomAlphaCapsNum: function (digits) {
        return OverallJS.GetRandomAlphaSmallNum(digits).toUpperCase();
    },
    /*Method to get a random of given list*/
    GetRandomFromUserArray: function (userdefinedString) {
        try {
            var userDefinedArray = userdefinedString.split(',');
            return userDefinedArray[OverallJS.GetRandomNumBetween(0, userDefinedArray.length)];
        } catch (exception) { }
    },

    //Generate Random random array
    OxyRandomArray: function (arrayLength) {
        return OverallJS.GetRandomAlphaSmallAndUpperNum(arrayLength, true).split(',');
    },

    //Timer in milliseconds
    OxyStartTimer: function () {
        _StartTime = new Date().getTime();
    },

    OxyEndTimer: function () {
        _EndTime = new Date().getTime();
        var time = _EndTime - _StartTime;
        return time;
    },



    // Sorting Functionalities
    /**InsertionSort**/
    OxyInsertionSort: function (InputArray) {
        try {
            var max = InputArray.length;
            for (var i = 1; i < max; i++) {
                var j = i;
                while (j > 0) {
                    if (InputArray[j - 1] > InputArray[j]) {
                        var temp = InputArray[j - 1];
                        InputArray[j - 1] = InputArray[j];
                        InputArray[j] = temp;
                        j--;
                    } else break;
                }

            }
            return InputArray;
        } catch (exception) {
            return exception.message;
        }
    },


    /**SelectionSort**/
    OxySelectionSort: function (InputArray) {
        try {
            var max = InputArray.length,
             tmp, min_key;
            for (var j = 0; j < max - 1; j++) {
                min_key = j;

                for (var k = j + 1; k < max; k++) {
                    if (InputArray[k] < InputArray[min_key]) {
                        min_key = k;
                    }
                }

                tmp = InputArray[min_key];
                InputArray[min_key] = InputArray[j];
                InputArray[j] = tmp;
            }
            return InputArray;
        } catch (exception) {
            return exception.message;
        }
    },


    /**bubbleSort**/
    OxyBubbleSort: function (InputArray) {
        try {
            var max = InputArray.length;
            for (var i = 1; i < max; i++) {
                var j = i;
                while (j > 0) {
                    if (InputArray[j - 1] > InputArray[j]) {
                        var temp = InputArray[j - 1];
                        InputArray[j - 1] = InputArray[j];
                        InputArray[j] = temp;
                        j--;
                    }
                    else
                        break;
                }

            }
            return InputArray;
        } catch (exception) {
            return exception.message;
        }
    }
}
