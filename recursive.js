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
function replaceRef(origin, x) {
    console.log('origin:',origin,' x :',x);
    var returnobj = origin;
    if (x.hasOwnProperty('type')) {
        switch (x.type) {
            case "string": 
                return x;
                break;
            
            case "number": 
                break;
            
            case "null": 
                break;
            
            case "boolean": 
                break;
            
            case "integer": 
                break;
            
            case "array": 
                arranditems();
                break;
            
            case "object": {
                console.log("prooerties:", x["properties"]);
                Object.keys(x["properties"]).forEach(o => {
                    console.log("o:", o);
                    replaceRef(origin, o);
                })
            }
        }
    } else if (x.hasOwnProperty('$ref')) {
        var na = x['$ref'].slice('/definitions/'.length);
        returnobj.x = origin[na];
        return returnobj;
    } else {
        console.log('else :')
    }
    console.log('return obj:', returnobj);
    return returnobj
}

function rep(obj) {
    return Object.values(obj).forEach(o => {
        console.log(o,obj);
        replaceRef(obj, o);

    })

}


