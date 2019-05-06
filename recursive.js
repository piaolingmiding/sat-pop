var source = {
    "x1": {
        "type": "string"
    },
    "x2": {
        "$ref": "#/definitions/x1"
    },
    "x3": {
        "type": "object",
        "properties": {
            "mavel": {
                "type": "number"
            }
        }
    },
    "x4": {
        "type": "object",
        "properties": {
            "greenbook": {
                "type": "object",
                "properties": {
                    "author": "Attila"
                }
            }
        }
    },
    "x5": {
        "type": "object",
        "properties": {
            "mavel": {
                "type": "number"
            },
            "bieke": {
                "$ref": "/definitions/x3"
            }
        }
    },
    "x6": {
        "type": "array",
        "items": {
            "type": "string"
        }
    }
}

function arranditems() {
    console.log("array and items")
}
function replaceRef(origin) {
    var returnobj={};
    if(typeof origin =='object'){
        returnobj=origin;
        Object.keys(origin).forEach(k => {
            console.log("1 k:", k,origin);
            if (typeof origin[k] == 'object'){
                var x = origin[k]
                console.log('1.1 x:',x);
                if (x.hasOwnProperty('type')) {
                    switch (x.type) {
                        case "string": 
                        
                        
                        case "number":                    
                        
                        
                        
                        case "boolean": 
                            
                        
                        case "integer": 
                            returnobj[k]=origin[k];    
                            console.log('2 returnobj:',returnobj);
                            break;
                        case "null": 
                            returnobj[k].type=null;
                            console.log('3 returnobj null:',returnobj);
                            
                            break;
                        
                        case "array": 
                            arranditems();
                            break;
                        
                        case "object": {
                            console.log("4 prooerties:", x["properties"]);
                            Object.keys(x["properties"]).forEach(o => {
                                console.log("5 iteration o:", o);
                                replaceRef(o);
                            })
                        }
                    }
                } else if (x.hasOwnProperty('$ref')) {
                    var na = x['$ref'].slice('/definitions/'.length);
                    returnobj.x = origin[na];
                    console.log("6 ref returno:", returnobj);
                    
                } else {
                    console.log('7 else :')
                }
            
            }else{
                console.log('9: else:',typeof origin.k,"  ddd: ",typeof origin[k] )
            }
        })
    }
    
    
    console.log('8 return obj:', returnobj);
    return returnobj
}


var source = {
    "x1": {
        "type": "string"
    },
    "x5": {
        "type": "object",
        "properties": {
            "mavel": {
                "type": "number"
            },
            "bieke": {
                "$ref": "#/definitions/x1"
            }
        }
    },
    "x2": {
        "$ref": "#/definitions/x1"
    },
    "x3": {
        "type": "object",
        "properties": {
            "mavel": {
                "type": "number"
            }
        }
    },
    "x4": {
        "type": "object",
        "properties": {
            "greenbook": {
                "type": "object",
                "properties": {
                    "author": "Attila"
                }
            }
        }
    },
   
    "x6": {
        "type": "array",
        "items": {
            "type": "string"
        }
    }
}

function arranditems() {
    console.log("array and items")
}
function replaceRef(origin) {
    var returnobj={};
    console.log("0 ORIGIN:",origin);
    if(typeof origin =='object'){
        returnobj=origin;
        Object.keys(origin).forEach(k => {
            console.log("1 k:", k,origin);
            if (typeof origin[k] == 'object'){
                var x = origin[k]
                console.log('1.1 x:',x);
                if (x.hasOwnProperty('type')) {
                    switch (x.type) {
                        case "string": 
                        case "number": 
                        case "boolean":
                        case "integer": 
                            returnobj[k]=origin[k];    
                            console.log('2 returnobj:',returnobj);
                            break;
                        case "null": 
                            returnobj[k].type=null;
                            console.log('3 returnobj null:',returnobj);                            
                            break;                        
                        case "array": 
                            arranditems();
                            break;                        
                        case "object": {
                            console.log("4 prooerties:", x["properties"]);
                            Object.keys(x["properties"]).forEach(o => {
                                var tempobj={}
                                tempobj[o]={};
                                console.log("5 iteration o:", o, "  k  ",k, "    ",x["properties"][o],"   ",tempobj);
                                te
                                return replaceRef(tempobj);
                            })
                        }
                    }
                } else if (x.hasOwnProperty('$ref')) {
                    var na = x['$ref'].slice('#/definitions/'.length);
                    console.log("6 ref returno:", na,"   x   ",x,"  k ",k);
                    returnobj[k] = origin[na];
                    console.log("6。1 ref returno:", returnobj);
                    
                } else {
                    console.log('7 else :')
                }
            
            }else{
                console.log('9: else:', origin[k],"  ddd: ",typeof origin[k] )
            }
        })
    }
    console.log('8 return obj:', returnobj);
    return returnobj
}



