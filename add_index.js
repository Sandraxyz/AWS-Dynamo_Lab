var
    AWS = require("aws-sdk"),
    DDB = new AWS.DynamoDB({
        apiVersion: "2006-08-10",
        region: "us-east-1"
});

(function addIndex(){
    var
        params = {
            TableName: "lostcats",
            AttributeDefinitions: [{
                AttributeName: "breed",
                AttributeType: "S"
            }],
            GlobalSecondaryIndexUpdates: [{
                Create: {
                    IndexName: "breed_index",
                    KeySchema: [{
                        AttributeType: "breed", 
                        KeyType: "HASH"
                    }],
                    Projection: {
                        ProjectionType: "ALL"
                    },
                    ProvisionedThroughput: {
                        ReadCapacityUnits: 1, 
                        WriteCapacityUnits: 1
                    }
                }
            }]
        };
    DDB.updateTable(params, function(err, data){
        console.log(err, data);
    });
})();

