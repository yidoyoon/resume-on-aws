import boto3

dynamodb = boto3.resource('dynamodb', "ap-northeast-2")
table = dynamodb.Table("resume_visitor")


def update_counter(table_info):
    response = table_info.get_item(
        Key={
            'stats': 'views'
        }
    )

    new_count = response['Item']['count'] + 1

    table_info.put_item(
        Item={
            'stats': 'views',
            'count': new_count
        }
    )
    return new_count


def lambda_handler(event, context):
    new_count = update_counter(table)

    return {
        'statusCode': 200,
        'headers': {
            "Access-Control-Allow-Origin": "https://resume-ko.yibyeongyong.com"
        },
        'body': new_count
    }
