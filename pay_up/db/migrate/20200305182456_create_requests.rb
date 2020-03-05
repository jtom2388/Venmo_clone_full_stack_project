class CreateRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do |t|
      t.float :amount, null: false
      t.string :body, null: false
      t.integer :requestor_id, null: false
      t.integer :requestee_id, null: false

      t.timestamps
    end
  end
end
