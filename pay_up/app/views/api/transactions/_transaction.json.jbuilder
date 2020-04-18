json.extract! transaction, :id, :amount, :body, :created_at, :payer_id
json.payer transaction.payer.username
json.recipient transaction.recipient.username