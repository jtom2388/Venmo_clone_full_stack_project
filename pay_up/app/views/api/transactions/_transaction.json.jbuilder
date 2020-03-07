json.extract! transaction, :id, :amount, :body
json.payer transaction.payer.username
json.recipient transaction.recipient.username