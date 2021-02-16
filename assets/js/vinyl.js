let vinylCollection = (function () {
    let _apiUrl = "https://api.discogs.com/users/bobslee/collection/folders/0/releases";
    let collection;

    let _updateCollection = function () {
        return new Promise((resolve, reject) => {
            $.ajax(
                {
                    url: _apiUrl,
                    type: "GET",
                    data: {
                    },
                    success: function (data) {
                        resolve(data);
                    },
                    error: function (data) {
                        reject(data);
                    }
                });
        });
    }

    let getCollection = function () {
        return new Promise((resolve, reject) => {
            if (collection) {
                resolve(collection);
            } else {
                _updateCollection().then((data) => {
                    collection = data["releases"];
                    
                    resolve(collection);
                }).catch((data) => {
                    console.log("couldn't get vinyl");
                    reject(collection);
                });
            }
        })
    }

    //TODO: Use musicbrains to add album cover
    let placeVinylCard = function () {
        for (let i = 0; i < collection.length; i++) {
            $("<div class=\"col-3 fade1\"> \
                    <div class=\"card\"> \
                        <div class=\"card-body\"> \
                            <h5 class=\"card-title\">" + collection[i]["basic_information"]["artists"]["0"]["name"] + " - " + collection[i]["basic_information"]["title"] + "</h5> \
                            <p class=\"card-text\">Decided to become a Software Engineer</p> \
                        </div> \
                    </div> \
                </div> ").insertAfter("#vinylRecords");
        }
    }

    return {
        getCollection: getCollection,
        placeVinylCard: placeVinylCard
    }
})();

//vinylCollection.getCollection().then(function(data) {console.log(data["0"]["basic_information"]["title"])})

// let vinylCollection = (function () {
//     let _apiUrl = "https://api.discogs.com/users/bobslee/collection/folders/0/releases";
//     let collection;

//     let _getCollection = function () {
//         return new Promise((resolve, reject) => {
//             $.ajax(
//                 {
//                     url: _apiUrl,
//                     type: "GET",
//                     data: {},
//                     success: function (data) {                        
//                         resolve(data);
//                     },
//                     error: function (error) {
//                         reject("Can't get vinyls");
//                     }

//                 });
//         })
//     }

//     function showCollection(){
//         return new Promise(function(resolve,reject){
//             Promise.then(function(values){
//                 collection = JSON.stringify(values)
//                 alert(collection);
//                 resolve();
//             }).
//             catch(function(data){
//                 console.log(data);
//                 reject();
//             })
//         });
//     }



//     return {
//         showCollection: showCollection,
//     }
// })