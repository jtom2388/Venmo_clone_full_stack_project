class DeleteColumnFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :balance
  end
end
