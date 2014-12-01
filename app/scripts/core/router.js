define([
    'core/app',
    'jquery',
    'underscore',
    'backbone'
], function (app) {
    'use strict';
    app.Routers.Main = Backbone.Router.extend({

        routes: {
            "dashboard": "dashboard",
            "login": "login"
            //"entitlements(/:page)": "entitlements",
            //"entitlement/:entitlementId": "entitlement",
            //"api/entitlement/json(/:query)": "entitlement_list",
            //"users(/:page)": "users",
            //"user/:userId": "user"
        },

        dashboard: function () {
            app.core.switchToReactView('chart');
        },

        login: function () {
            //app.core.switchToView(app.Views.Login);
            app.core.switchToReactView('login');
        },

        entitlements: function (page) {
            app.core.switchToView(app.Views.EntitlementList, {page: page});
        },

        entitlement: function (entitlementId) {
            app.core.switchToView(app.Views.EntitlementEdit, {entitlementId: entitlementId});
        },

        entitlement_list: function (query) {
            console.log('api/entitlement/list!!!');
            var json = {
                "response": true,
                "users": [{
                    "lastLogin": "2014-08-18T04:17:00.653Z",
                    "password": true,
                    "email": "test2542687@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "fcd07573ab4733d4930097ff600765fcacb965fc",
                        "expireDate": "2034-08-18T04:17:00.531Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-08-18T04:16:58.891Z",
                    "address": {"postalCode": "26278"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "53f17e3a81f54e2d26b0fc22",
                    "role": "user"
                }, {
                    "lastLogin": "2014-08-26T17:53:18.918Z",
                    "password": true,
                    "email": "aaa@gmail.com",
                    "exported": true,
                    "magplus": [{"expireDate": "2014-08-27T17:53:18.681Z"}],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-08-26T17:53:18.680Z",
                    "address": {"postalCode": "5646"},
                    "name": {"first": "alexx", "last": "puaa"},
                    "id": "53fcc98e84f53e52069cc348",
                    "role": "user"
                }, {
                    "lastLogin": "2014-08-26T18:08:36.695Z",
                    "password": true,
                    "email": "aaa1@gmail.com",
                    "exported": true,
                    "magplus": [{"expireDate": "2014-08-27T18:08:36.467Z"}],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-08-26T18:08:36.466Z",
                    "address": {"postalCode": "5646"},
                    "name": {"first": "alexx", "last": "puaa"},
                    "id": "53fccd2484f53e52069cc349",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-15T18:30:13.278Z",
                    "password": true,
                    "email": "test9261198@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "9335eefcb8fd7a63f758fcee2682ebbea1a66506",
                        "_id": "541730340c38b0c40b0b9e9a",
                        "expireDate": "2034-09-15T18:30:12.142Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-15T18:30:10.474Z",
                    "address": {"postalCode": "04966"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "541730320c38b0c40b0b9e95",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:17:31.281Z",
                    "password": true,
                    "email": "test3629243@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "900070a23a7eb67aa91bd7531d1cd14e8008cfc6",
                        "_id": "54181c4a2eb27dae07a50f06",
                        "expireDate": "2034-09-16T11:17:30.137Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:17:28.402Z",
                    "address": {"postalCode": "45499"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54181c482eb27dae07a50f01",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:18:46.877Z",
                    "password": true,
                    "email": "test3875813@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "4b6a8b1870836392419756e1afa9a010c70436e8",
                        "_id": "54181c95a92099bb07cd21f1",
                        "expireDate": "2034-09-16T11:18:45.736Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:18:44.074Z",
                    "address": {"postalCode": "15114"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54181c94a92099bb07cd21ec",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:19:33.687Z",
                    "password": true,
                    "email": "test2082285@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "36fea0ea21ebbb575126a77dc922382ff2844bbb",
                        "_id": "54181cc4f2ac66c807ff215d",
                        "expireDate": "2034-09-16T11:19:32.545Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:19:30.873Z",
                    "address": {"postalCode": "90880"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54181cc2f2ac66c807ff2158",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:21:13.997Z",
                    "password": true,
                    "email": "test2616163@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "1b590179646ed90292abcc7c136fd5085c005c9a",
                        "_id": "54181d28907d3cd507de2726",
                        "expireDate": "2034-09-16T11:21:12.856Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:21:11.175Z",
                    "address": {"postalCode": "85684"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54181d27907d3cd507de2721",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:22:32.830Z",
                    "password": true,
                    "email": "test8833499@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "8b444b8f3253d390e6db4bfb59a00cd866d9dfed",
                        "_id": "54181d77615f31e2073a7def",
                        "expireDate": "2034-09-16T11:22:31.673Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:22:30.010Z",
                    "address": {"postalCode": "56590"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54181d76615f31e2073a7dea",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:22:50.951Z",
                    "password": true,
                    "email": "test5930918@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "6df8b783501cebc9ba4da32e3eb8f7ab75ac0ad5",
                        "_id": "54181d89a9ccd7ee07c4ab77",
                        "expireDate": "2034-09-16T11:22:49.801Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:22:48.110Z",
                    "address": {"postalCode": "36133"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54181d88a9ccd7ee07c4ab72",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:24:50.001Z",
                    "password": true,
                    "email": "test9364333@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "69dd2d1d4bcf0509104fc79bf064b5e0f692aef4",
                        "_id": "54181e002a58a7fb07d8f912",
                        "expireDate": "2034-09-16T11:24:48.854Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:24:47.168Z",
                    "address": {"postalCode": "61561"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54181dff2a58a7fb07d8f90d",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:26:15.372Z",
                    "password": true,
                    "email": "test2766095@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "528cecba027f2ef3feb3e8d0ed396a1c09732a84",
                        "_id": "54181e5613606707081ea716",
                        "expireDate": "2034-09-16T11:26:14.172Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:26:12.468Z",
                    "address": {"postalCode": "64560"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54181e5413606707081ea711",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:29:05.927Z",
                    "password": true,
                    "email": "test929080@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "95e35ecae3246bef8becff4b734d8a24194a9402",
                        "_id": "54181efedaf0ef1408f9babd",
                        "expireDate": "2034-09-16T11:29:02.795Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:29:01.129Z",
                    "address": {"postalCode": "42073"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54181efddaf0ef1408f9bab8",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:29:25.261Z",
                    "password": true,
                    "email": "test3660190@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "608ae2ee6d919e7e76d84dfe77d53b41e560c2bc",
                        "_id": "54181f126fa3fc1e0854bc84",
                        "expireDate": "2034-09-16T11:29:22.125Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:29:20.456Z",
                    "address": {"postalCode": "44513"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54181f106fa3fc1e0854bc7f",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:34:33.212Z",
                    "password": true,
                    "email": "test6580272@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "36237899dab33b21263eda3e766aac4e4551da15",
                        "_id": "54182048ff044f3008900b46",
                        "expireDate": "2034-09-16T11:34:32.021Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:34:30.344Z",
                    "address": {"postalCode": "89789"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54182046ff044f3008900b41",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:35:27.481Z",
                    "password": true,
                    "email": "test5796880@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "dc42875a8cdce65d178f27112d41de53aa2b6cad",
                        "_id": "5418207eb81fca3d080f5a32",
                        "expireDate": "2034-09-16T11:35:26.337Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:35:24.661Z",
                    "address": {"postalCode": "21311"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "5418207cb81fca3d080f5a2d",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:38:10.702Z",
                    "password": true,
                    "email": "test5323261@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "ca3fb87310fd118f67f67a093657b23b94fefef6",
                        "_id": "5418211f2ef08c4b08c6ea1b",
                        "expireDate": "2034-09-16T11:38:07.561Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:38:05.869Z",
                    "address": {"postalCode": "25791"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "5418211d2ef08c4b08c6ea16",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:39:48.521Z",
                    "password": true,
                    "email": "test975159@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "89d9ec4d28f9baf1957733e77f67ac50d84c21a5",
                        "_id": "54182174d5188b5908c89eac",
                        "expireDate": "2034-09-16T11:39:32.386Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:39:30.693Z",
                    "address": {"postalCode": "34779"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54182172d5188b5908c89ea7",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:47:04.583Z",
                    "password": true,
                    "email": "test1863839@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "e0ecd98be1f8e3ebe0e01c8a37771ec3682fff19",
                        "_id": "54182337f002e58508537d4c",
                        "expireDate": "2034-09-16T11:47:03.434Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:47:01.768Z",
                    "address": {"postalCode": "59475"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54182335f002e58508537d47",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:54:16.595Z",
                    "password": true,
                    "email": "test6287169@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "f10688ab78f792653230f75b9614dc67ee1b4adc",
                        "_id": "541824e7dd32139b08973cb9",
                        "expireDate": "2034-09-16T11:54:15.449Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:54:13.769Z",
                    "address": {"postalCode": "10055"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "541824e5dd32139b08973cb4",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:54:51.198Z",
                    "password": true,
                    "email": "test7257707@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "8104edcaed14e0b9c1b96d0550becedcfcdc9fae",
                        "_id": "5418250a9a1dc3a808317ad8",
                        "expireDate": "2034-09-16T11:54:50.049Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:54:48.375Z",
                    "address": {"postalCode": "39209"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "541825089a1dc3a808317ad3",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:55:16.911Z",
                    "password": true,
                    "email": "test1975304@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "a30280682774fafddd445d72048486849481c657",
                        "_id": "541825147badb6b408876a2a",
                        "expireDate": "2034-09-16T11:55:00.767Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:54:59.097Z",
                    "address": {"postalCode": "20221"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "541825137badb6b408876a25",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:56:06.896Z",
                    "password": true,
                    "email": "test4123025@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "1ff67fb087d13cdded69309baaa8a6fd21980390",
                        "_id": "54182555cef7f2c008954cdd",
                        "expireDate": "2034-09-16T11:56:05.753Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:56:04.051Z",
                    "address": {"postalCode": "27637"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54182554cef7f2c008954cd8",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:56:27.394Z",
                    "password": true,
                    "email": "test8975196@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "c3341da368b2a0f1c41d8f38cfcb81cb53700ec7",
                        "_id": "5418256a4b3546cd088cd419",
                        "expireDate": "2034-09-16T11:56:26.248Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:56:24.588Z",
                    "address": {"postalCode": "56076"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "541825684b3546cd088cd414",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:56:53.255Z",
                    "password": true,
                    "email": "test9890915@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "8eff5be6a0e9edc5d67ba14e7a24075c23510063",
                        "_id": "54182585325903d90841b73c",
                        "expireDate": "2034-09-16T11:56:53.256Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:56:51.579Z",
                    "address": {"postalCode": "18081"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54182583325903d90841b737",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T11:57:31.027Z",
                    "password": true,
                    "email": "test6885233@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "f1f41afdeddde9674cb89321a780dc1fa35cb1db",
                        "_id": "541825a97a3757e6080a28df",
                        "expireDate": "2034-09-16T11:57:29.878Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T11:57:28.172Z",
                    "address": {"postalCode": "66903"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "541825a87a3757e6080a28da",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T12:00:38.277Z",
                    "password": true,
                    "email": "test7238825@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "a64734af872f8089ab7eecd7945f8bb0e6734e89",
                        "_id": "54182665566f35f508ba2580",
                        "expireDate": "2034-09-16T12:00:37.128Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T12:00:35.471Z",
                    "address": {"postalCode": "56107"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54182663566f35f508ba257b",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T12:01:31.622Z",
                    "password": true,
                    "email": "test6146578@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "5b026e8054f1ea9e039973184c835e13ace807ce",
                        "_id": "5418269aba02f901091e655f",
                        "expireDate": "2034-09-16T12:01:30.473Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T12:01:28.782Z",
                    "address": {"postalCode": "43391"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54182698ba02f901091e655a",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T13:05:30.318Z",
                    "password": true,
                    "email": "test2187403@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "5051fd38642767b92dd7fa4c1b42698dd876958d",
                        "_id": "54183599b8f33b79094cb66a",
                        "expireDate": "2034-09-16T13:05:29.157Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T13:05:27.488Z",
                    "address": {"postalCode": "32669"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54183597b8f33b79094cb665",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-16T13:09:34.321Z",
                    "password": true,
                    "email": "test4922568@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "fb47cba4d14072d84f7d72ddc9506c0084753863",
                        "_id": "5418368d0a766a2c0a7a4e3e",
                        "expireDate": "2034-09-16T13:09:33.163Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-16T13:09:31.480Z",
                    "address": {"postalCode": "12649"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "5418368b0a766a2c0a7a4e39",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T07:19:18.509Z",
                    "password": true,
                    "email": "test8161831@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "ab6a913929f18952c7b7d21d53bfd92a80253ff9",
                        "_id": "541935f550995eb6161b17fd",
                        "expireDate": "2034-09-17T07:19:17.275Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T07:19:15.455Z",
                    "address": {"postalCode": "43137"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "541935f350995eb6161b17f8",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T07:20:04.571Z",
                    "password": true,
                    "email": "test6600272@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "3612892d58edbc9d56e55c1dbba51c55fcf82282",
                        "_id": "54193623989f28c4167e42d2",
                        "expireDate": "2034-09-17T07:20:03.336Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T07:20:01.656Z",
                    "address": {"postalCode": "40731"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54193621989f28c4167e42cd",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T07:21:16.660Z",
                    "password": true,
                    "email": "test2449454@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "3e826953933e0c2d3db1a75244d23aac4dec0340",
                        "_id": "5419366beaa891d216cfa240",
                        "expireDate": "2034-09-17T07:21:15.430Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T07:21:13.737Z",
                    "address": {"postalCode": "02803"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54193669eaa891d216cfa23b",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T07:22:06.479Z",
                    "password": true,
                    "email": "test7146446@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "018711ec19c48ad4be0bceaecf4c6967b518a5a9",
                        "_id": "5419369dacec1cdf160272e6",
                        "expireDate": "2034-09-17T07:22:05.235Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T07:22:03.540Z",
                    "address": {"postalCode": "91638"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "5419369bacec1cdf160272e1",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T07:22:56.291Z",
                    "password": true,
                    "email": "test4113071@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "4e1bf44af1163ace09919326adcadffffaafa497",
                        "_id": "541936cfcaa485ec163390bc",
                        "expireDate": "2034-09-17T07:22:55.041Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T07:22:53.369Z",
                    "address": {"postalCode": "80269"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "541936cdcaa485ec163390b7",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T07:37:41.173Z",
                    "password": true,
                    "email": "test8177564@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "072484a3e1ae06f30dfff2a9b1f5e081bad73dc6",
                        "_id": "54193a435e55532717f0abad",
                        "expireDate": "2034-09-17T07:37:39.848Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T07:37:38.187Z",
                    "address": {"postalCode": "27633"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54193a425e55532717f0aba8",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T07:39:32.251Z",
                    "password": true,
                    "email": "test9895438@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "b37eb7b0f913705b4e4f0232ab37fbf98b77c226",
                        "_id": "54193ab212a484341727c8b5",
                        "expireDate": "2034-09-17T07:39:30.930Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T07:39:29.264Z",
                    "address": {"postalCode": "77651"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54193ab112a484341727c8b0",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T07:40:20.430Z",
                    "password": true,
                    "email": "test9212891@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "b24c24890d3ec6fd7a0289d2ba3b575dafee2d3b",
                        "_id": "54193ae3e5f3a640174e7c3d",
                        "expireDate": "2034-09-17T07:40:19.087Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T07:40:17.402Z",
                    "address": {"postalCode": "89919"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54193ae1e5f3a640174e7c38",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T07:40:42.801Z",
                    "password": true,
                    "email": "test3488453@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "d359fc21422d10622feb42577b04b0f2289faa84",
                        "_id": "54193af9ed32eb4e17dfcad2",
                        "expireDate": "2034-09-17T07:40:41.477Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T07:40:39.777Z",
                    "address": {"postalCode": "38910"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54193af7ed32eb4e17dfcacd",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T08:01:21.729Z",
                    "password": true,
                    "email": "test6844655@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "253bce191626f73d4d3000de2eeec78bea150e79",
                        "_id": "54193fd05fde377a176efc93",
                        "expireDate": "2034-09-17T08:01:20.398Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T08:01:18.695Z",
                    "address": {"postalCode": "11047"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54193fce5fde377a176efc8e",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T08:20:34.729Z",
                    "password": true,
                    "email": "test2979327@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "0b012203ab1e8e5b57b59fedabb99fbfc7add058",
                        "_id": "541944518d996bac176568ab",
                        "expireDate": "2034-09-17T08:20:33.369Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T08:20:31.664Z",
                    "address": {"postalCode": "71514"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "5419444f8d996bac176568a6",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T08:23:13.738Z",
                    "password": true,
                    "email": "test3845670@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "2e2b725077f36058b52cafed14f7c715042ef2f3",
                        "_id": "541944f01da9fabf17af00da",
                        "expireDate": "2034-09-17T08:23:12.375Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T08:23:10.630Z",
                    "address": {"postalCode": "91194"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "541944ee1da9fabf17af00d5",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T08:25:11.443Z",
                    "password": true,
                    "email": "test2425328@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "d0034158dd233dcfe4c223a08c314a873192b589",
                        "_id": "5419456637d0c5cb176779c8",
                        "expireDate": "2034-09-17T08:25:10.075Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T08:25:08.348Z",
                    "address": {"postalCode": "30697"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "5419456437d0c5cb176779c3",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T08:26:22.308Z",
                    "password": true,
                    "email": "test826557@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "e0e024ada8e09df7f6eb8eb2c5070834bf8bcecf",
                        "_id": "541945acdb9637da17fcf936",
                        "expireDate": "2034-09-17T08:26:20.645Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T08:26:18.949Z",
                    "address": {"postalCode": "67563"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "541945aadb9637da17fcf931",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T08:27:47.501Z",
                    "password": true,
                    "email": "test8540501@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "8f6e8838a3d180c1c6dc32580ade1d4d2e200e47",
                        "_id": "541946022ddeb3ed1710847d",
                        "expireDate": "2034-09-17T08:27:46.143Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T08:27:44.443Z",
                    "address": {"postalCode": "78828"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "541946002ddeb3ed17108478",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T10:32:14.854Z",
                    "password": true,
                    "email": "test4075189@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "cd5a52112e15f501b8f37b4ab97ffcd44b688650",
                        "_id": "5419632d57be364219a67100",
                        "expireDate": "2034-09-17T10:32:13.498Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T10:32:11.094Z",
                    "address": {"postalCode": "48117"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "5419632b57be364219a670fb",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T13:27:25.360Z",
                    "password": true,
                    "email": "test7852082@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "a1c734d11c66db19f4136f9369bdff3cd4bd0200",
                        "_id": "54198c3beb7be9eb1915203d",
                        "expireDate": "2034-09-17T13:27:23.963Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T13:27:22.060Z",
                    "address": {"postalCode": "20026"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54198c3aeb7be9eb19152038",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T13:43:10.105Z",
                    "password": true,
                    "email": "test3028615@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "bb37c1dd4feafcb29847351de634bc0f97361d24",
                        "_id": "54198fec42c445781a6f04ba",
                        "expireDate": "2034-09-17T13:43:08.697Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T13:43:06.653Z",
                    "address": {"postalCode": "45032"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "54198fea42c445781a6f04b5",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-17T13:46:05.101Z",
                    "password": true,
                    "email": "test3249524@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "28be57e9ef357d203d48bf808e23fc4a09c67b93",
                        "_id": "5419909b4ec7f9bb1ae65591",
                        "expireDate": "2034-09-17T13:46:03.686Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-17T13:46:01.683Z",
                    "address": {"postalCode": "32729"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "541990994ec7f9bb1ae6558c",
                    "role": "user"
                }, {
                    "lastLogin": "2014-09-18T08:14:37.281Z",
                    "password": true,
                    "email": "test6083549@acme.com",
                    "exported": true,
                    "magplus": [{
                        "token": "a2412f848a27255bff23a209754e91103050bb55",
                        "_id": "541a946b17297877144f54df",
                        "expireDate": "2034-09-18T08:14:35.903Z"
                    }],
                    "entitlements": [],
                    "favorite": {"athlete": [], "team": [], "sport": []},
                    "accessLevel": 1,
                    "created": "2014-09-18T08:14:34.171Z",
                    "address": {"postalCode": "69149"},
                    "name": {"first": "John", "last": "Doe"},
                    "id": "541a946a17297877144f54da",
                    "role": "user"
                }],
                "amount": 194
            };
            var AppView = Backbone.View.extend({
                el: 'html',

                initialize: function () {
                    this.render();
                },

                render: function () {
                    this.$el.html(JSON.stringify(json));
                }
            });

            var appView = new AppView();
        },

        users: function (page) {
            app.core.switchToView(app.Views.UserList, {page: page});
        },

        user: function (userId) {
            console.log(userId);
            app.core.switchToView(app.Views.UserEdit, {userId: userId});
        }

    });

});
