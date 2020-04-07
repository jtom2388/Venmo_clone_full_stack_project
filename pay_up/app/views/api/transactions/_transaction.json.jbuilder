json.extract! transaction, :id, :amount, :body, :created_at
json.payer transaction.payer.username
json.recipient transaction.recipient.username