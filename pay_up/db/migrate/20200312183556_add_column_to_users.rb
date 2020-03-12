class AddColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :balance, :float, :default => 1000
  end
end
