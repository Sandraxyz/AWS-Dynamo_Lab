var
    AWS = require("aws-sdk"),
    DDB = new AWS.DynamoDB({
        apiVersion: "2006-08-10",
        region: "us-east-1"
});

(function createDataBaseTable(){
    var
        params = {
            AttributeDefinitions: [{
                AttributeName: "petname",
                AttributeType: "S"
            }],
            KeySchema: [{
                AttributeName: "petname",
                KeyType: "HASH"
            }],
            ProvisionedThroughtout: {
                ReadCapacityUnits: 1,
                WriteCapacityUnits: 1
            },
            TableNAme: "lostcats"
        };
    DDB.createTable(params, function(err, data){
        console.log(err, data);
    })
})();