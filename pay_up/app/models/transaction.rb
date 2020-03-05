class Transaction < ApplicationRecord

    validates :amount, :body, :payer_id, :recipient_id, presence: true
    validates :amount, numericality: true

    belongs_to :payer,
        foreign_key: :payer_id,
        class_name: :User

    belongs_to :recipient,
        foreign_key: :recipient_id,
        class_name: :User
end
