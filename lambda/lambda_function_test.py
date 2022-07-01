import boto3
from moto import mock_dynamodb2

from lambda_function import update_counter


@mock_dynamodb2
def test():
    dynamodb = boto3.resource("dynamodb", region_name="ap-northeast-2")
    table = dynamodb.Table("mock_table")

    dynamodb.create_table(
        TableName="mock_table",
        KeySchema=[
            {"AttributeName": "stats", "KeyType": "HASH"},
        ],
        AttributeDefinitions=[
            {"AttributeName": "stats", "AttributeType": "S"},
        ],
        ProvisionedThroughput={"ReadCapacityUnits": 5, "WriteCapacityUnits": 5},
    )

    table.put_item(
        Item={
            "stats": "views",
            "count": 141592,
        }
    )

    result = update_counter(table)
    assert result == 141593
