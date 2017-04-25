/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {  
    // Application Constructor
    initialize:function () {
        // Initialize device
        alert('initialize');
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        // Initialize jquery
        alert('onDeviceReady');
        $(document).ready(app.ready);
    },
    ready:function () {
        alert('ready');
        // Event Listeners
        $('#fb-login').on('click', fb.login);
        $('#fb-dialog').on('click', fb.showDialog);
        $('#fb-api').on('click', fb.apiTest);
        $('#fb-purchase').on('click', fb.logPurchase);
        $('#fb-event').on('click', fb.logEvent);
        $('#fb-token').on('click', fb.getAccessToken);
        $('#fb-status').on('click', fb.getStatus);
        $('#fb-logout').on('click', fb.logout);
    }
}

// Initialize App
app.initialize();

// Facebook Plugin 
var fb = {
    login:function () {
        if (!window.cordova) {
            var appId = prompt("1342764925806270", "");
            facebookConnectPlugin.browserInit(appId);
        }
        facebookConnectPlugin.login( ["email"],
            function (response) { alert(JSON.stringify(response)) },
            function (response) { alert(JSON.stringify(response)) });
    },
    showDialog:function () { 
        facebookConnectPlugin.showDialog( { method: "feed" }, 
            function (response) { alert(JSON.stringify(response)) },
            function (response) { alert(JSON.stringify(response)) });
    },
    apiTest:function () { 
        facebookConnectPlugin.api( "me/?fields=id,email", ["user_birthday"],
            function (response) { alert(JSON.stringify(response)) },
            function (response) { alert(JSON.stringify(response)) }); 
    },
    logPurchase:function () {
        facebookConnectPlugin.logPurchase(1.99, "USD",
            function (response) { alert(JSON.stringify(response)) },
            function (response) { alert(JSON.stringify(response)) });
    },
    logEvent:function () {
        // For more information on AppEvent param structure see
        // https://developers.facebook.com/docs/ios/app-events
        // https://developers.facebook.com/docs/android/app-events
        facebookConnectPlugin.logEvent("Purchased",
            {
                NumItems: 1,
                Currency: "USD",
                ContentType: "shoes",
                ContentID: "HDFU-8452"
            }, null,
            function (response) { alert(JSON.stringify(response)) },
            function (response) { alert(JSON.stringify(response)) });
    },
    getAccessToken:function () { 
        facebookConnectPlugin.getAccessToken( 
            function (response) { alert(JSON.stringify(response)) },
            function (response) { alert(JSON.stringify(response)) });
    },
    getStatus:function () { 
        facebookConnectPlugin.getLoginStatus( 
            function (response) { alert(JSON.stringify(response)) },
            function (response) { alert(JSON.stringify(response)) });
    },
    logout:function () { 
        facebookConnectPlugin.logout( 
            function (response) { alert(JSON.stringify(response)) },
            function (response) { alert(JSON.stringify(response)) });
    }
}
