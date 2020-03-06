json.array! @transactions do |transaction|
    json.partial! 'api/transactions/transaction'
end