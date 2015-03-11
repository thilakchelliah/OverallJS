/*
 * **********************************************************
 * OxygenJS v1.0
 * Copyright (C) 2015  Thilak49(thilak.chelliah49@gmail.com)
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 * **********************************************************
 */
Oxygenjs = function() {
    var _Alphabets = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,i,o,p,q,r,s,t,u,v,w,x,y,z',
        _MonthName = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec',
        _Number = '0,1,2,3,4,5,6,7,8,9',
        _UserDefinedGlobVar = '';
    /*Method to get a random number between two numbers*/
    GetRandomBetween = function(a, b) {
        return Math.floor(Math.random() * b) + a
    }
}