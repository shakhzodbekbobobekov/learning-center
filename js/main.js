System.register("myClass", [], function (exports_1, context_1) {
    "use strict";
    var MyClass;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            MyClass = class MyClass {
                constructor() {
                    this.name = "John";
                    this.age = 22;
                }
            };
            exports_1("MyClass", MyClass);
        }
    };
});
System.register("main", ["myClass"], function (exports_2, context_2) {
    "use strict";
    var myClass_1;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (myClass_1_1) {
                myClass_1 = myClass_1_1;
            }
        ],
        execute: function () {
            console.log(myClass_1.MyClass);
        }
    };
});
