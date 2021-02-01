const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB({ region: "us-east-1" });

exports.handler = (event, context, callback) => {
  const phoneNumber = event["Details"]["ContactData"]["Attributes"]["numberIn"];
  const params = {
    Key: {
      PhoneNumber: {
        S: phoneNumber
      }
    },
    TableName: "customer"
  };

  dynamodb.getItem(params, function(err, data) {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, {
        greeting:
          Object.keys(data).length > 0
            ? "Hello " + data.Item.FirstName.S
            : "Thank you for calling"
      });
    }
  });
};
