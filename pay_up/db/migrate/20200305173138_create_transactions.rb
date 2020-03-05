class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.float :amount, null: false
      t.string :body, null: false
      t.integer :payer_id, null: false
      t.integer :recipient_id, null: false

      t.timestamps
    end
  end
end
