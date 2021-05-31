var BoxSDK = require('box-node-sdk');

// Initialize the SDK with your app credentials
var sdk = new BoxSDK({
  clientID: 'a9xd4huqhb7vx1or9l3txgt3wj7a08s2',
  clientSecret: 'mLyc2FsmGrDcnCkl00EFSa66RN5nmyYl'
});

// Create a basic API client, which does not automatically refresh the access token
var client = sdk.getBasicClient('HaK6qh8CpOcCNX5V1ymzFrVUZwr5vRZ9');

// Get your own user object from the Box API
// All client methods return a promise that resolves to the results of the API call,
// or rejects when an error occurs
client.users.get(client.CURRENT_USER_ID)
	.then(user => console.log(user))
    .catch(err => console.log('Got an error!', err))

// client.folders
//     .get('0', null)
//     .then(folderInfo => {
//       // console.log("folderInfo", folderInfo.item_collection)
//       // folderName = folderInfo.name;
//       client.folders.getItems('0', { limit: 1000 }).then((res) => {
//           console.log("res", res)
//       });
//     })
    
    client.folders.getItems('0', { limit: 1000 }).then((res) => {
        console.log("res", res);
        client.files.getDownloadURL(res.entries[0].id)
            .then(downloadURL => {
                console.log("downloadURL", downloadURL);
            });
    });


