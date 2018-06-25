/**
 * Created by pekko1215 on 2017/07/24.
 */

var lotdata = {
    normal: [
        {   name:"リプレイ",
            value:1/7.7},
        {   name:"ベル",
            value:1/7.7},
        {   name:"スイカ",
            value:1/64},
        {   name:"チェリー",
            value:1/32},
        {   name:"BIG",
            value:1/200},
        {   name:"REG",
            value:1/240}
    ],
    "big":[
        {
            name:"JACIN",
            value:1/7.7
        }
    ],
    "jac":[
        {
            name:"JACGAME",
            value:1
        }
    ]
}

var getEffect = {
    "リプレイ":()=>{
        if(rand(128)){return null}
        switch(rand(6)){
            case 0:
                var r = rand(10)<3 ? [[true,true,false],[false,true,true]][rand(2)] : [true,false,false];
                return {
                    timing:0,r
                }
            case 1:
            case 2:
                var r = rand(10)<3 ? [[true,true,false],[false,true,true]][rand(2)] : [true,false,false];
                return {
                    timing:1,
                    r
                }
            case 3:
            case 4:
                var r = rand(10)<3 ? [[true,true,false],[false,true,true]][rand(2)] : [true,false,false];
                return {
                    timing:2,
                    r
                }
            case 5:
                var r = rand(10)<3 ? [[true,true,false],[true,false,true]][rand(2)] : [true,false,false];
                return {
                    timing:3,
                    r
                }
        }
    },
    "ベル":()=>{
        if(rand(12)){return null}
        switch(rand(10)){
            case 0:
                var r = rand(10)<4 ? [[true,true,false],[false,true,true]][rand(2)] : [false,true,false];
                return {
                    timing:0,r
                }
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                var r = rand(10)<2 ? [[true,true,false],[false,true,true]][rand(2)] : [false,true,false];
                return {
                    timing:1,
                    r
                }
            case 8:
                var r = rand(10)<3 ? [[true,true,false],[false,true,true]][rand(2)] : [false,true,false];
                return {
                    timing:2,
                    r
                }
            case 9:
                var r = rand(10)<3 ? [[true,true,false],[false,true,true]][rand(2)] : [false,true,false];
                return {
                    timing:3,
                    r
                }
        }
    },
    "スイカ":()=>{
        if(rand(2)){return null}
        switch(rand(7)){
            case 0:
                var r = rand(10)<6 ? [[false,true,true],[false,true,true]][rand(2)] : [false,false,true];
                return {
                    timing:0,r
                }
            case 1:
            case 2:
                var r = rand(10)<6 ? [[false,true,true],[false,true,true]][rand(2)] : [false,false,true];
                return {
                    timing:1,
                    r
                }
            case 3:
            case 4:
                var r = rand(10)<6 ? [[false,true,true],[false,true,true]][rand(2)] : [false,false,true];
                return {
                    timing:2,
                    r
                }
            case 5:
            case 6:
                var r = rand(10)<6 ? [[false,true,true],[false,true,true]][rand(2)] : [false,false,true];
                return {
                    timing:3,
                    r
                }
        }
    },
    "BIG":()=>{
        if(!rand(3)){return null}
        switch(rand(9)){
            case 0:
            case 1:
            case 3:
                var r = [!rand(2),!rand(2),!rand(2)];
                return {
                    timing:0,r
                }
            case 1:
            case 2:
                var r = [!rand(2),!rand(2),!rand(2)];
                return {
                    timing:1,
                    r
                }
            case 4:
            case 5:
                var r = [!rand(2),!rand(2),!rand(2)];
                return {
                    timing:2,
                    r
                }
            case 6:
            case 7:
            case 8:
                var r = [!rand(2),!rand(2),!rand(2)];
                return {
                    timing:3,
                    r
                }
        }
    }
}