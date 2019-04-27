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
    var returnobj={};
    if (x.hasOwnProperty('type')) {
        switch (x.type) {
            case "string": {
                returnobj =x;
                
                break;
            };
            case "number": {
                break;
            };
            case "null": {
                break;
            };
            case "boolean": {
                break;
            };
            case "integer": {
                break;
            };
            case "array": {
                function arranditems();
                break;
            };
            case "object": {

            }
        }
    } else if (x.hasOwnProperty('$ref')) {
        var na = x[$ref].slice('/definitions/'.length)
        origin.x = origin[na]


    } else {

    }

}

function rep(obj){
    return Object.keys(obj).forEach(o=>{
        replaceRef(obj,o);
        
    })
    
}
