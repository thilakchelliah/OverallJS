/*
* **********************************************************
* OxygenJS v1.0
* Copyright (C) 2015  Thilak49(thilak.chelliah49@gmail.com)
* Licensed under http://www.apache.org/licenses/LICENSE-2.0
* **********************************************************
*/
/**********Global Varibles*******/
var _AlphabetsSmall = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,i,o,p,q,r,s,t,u,v,w,x,y,z',
    _AlphabetsCaps = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z',
    _MonthName = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec',
    _Number = '0,1,2,3,4,5,6,7,8,9',
    _UserDefinedGlobVar = '';
var Oxygenjs = {
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
            if (Oxygenjs.GetRandomNumBetween(1, 2) == 1) value = aphaArray[Oxygenjs.GetRandomNumBetween(0, 27)];
            else value = numArray[Oxygenjs.GetRandomNumBetween(0, 9)];
            alphanum = alphanum + value;
        }
        return alphanum;
    },
    /*Method to get a random alpha-numeric(small as well as upper case) string based on number of digits*/
    GetRandomAlphaSmallAndUpperNum: function (digits) {
        var aphaSmallArray = _AlphabetsSmall.split(','),
            aphaUpperArray = _AlphabetsCaps.split(','),
            numArray = _Number.split(','),
             alphanum = "";
        for (var i = 1; i <= digits; i++) {
            var value = '',
                chosenType = Oxygenjs.GetRandomNumBetween(1, 3);
            if (chosenType == 1) value = aphaSmallArray[Oxygenjs.GetRandomNumBetween(0, 27)];
            else if (chosenType == 2) value = aphaUpperArray[Oxygenjs.GetRandomNumBetween(0, 27)];
            else value = numArray[Oxygenjs.GetRandomNumBetween(0, 9)];
            if (value == undefined)
                value = '0';
            alphanum = alphanum + value;
        }
        return alphanum;
    },
    /*Method to get a random alpha-numeric(upper case) string based on number of digits*/
    GetRandomAlphaCapsNum: function (digits) {
        return Oxygenjs.GetRandomAlphaSmallNum(digits).toUpperCase();
    },

    /*Method to get a random of given list*/
    GetRandomFromUserArray: function (userdefinedString) {
        try {
            var userDefinedArray = userdefinedString.split(',');
            return userDefinedArray[Oxygenjs.GetRandomNumBetween(0, userDefinedArray.length)];
        }
        catch (exception) {
        }
    }
}