class AddAccountNumberToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :account_number, :bigint
  end
end
