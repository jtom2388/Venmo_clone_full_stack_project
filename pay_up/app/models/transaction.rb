# == Schema Information
#
# Table name: transactions
#
#  id           :bigint           not null, primary key
#  amount       :float            not null
#  body         :string           not null
#  payer_id     :integer          not null
#  recipient_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Transaction < ApplicationRecord

    validates :amount, :body, :payer_id, :recipient_id, presence: true
    validates :amount, numericality: true
    validates :body, length: { maximum: 50 }

    validate :valid_payment

    belongs_to :payer,
        foreign_key: :payer_id,
        class_name: :User

    belongs_to :recipient,
        foreign_key: :recipient_id,
        class_name: :User

    def payment(payer, recipient)
        payer.balance = payer.balance - self.amount
        recipient.balance = recipient.balance + self.amount
    end

    private
    def valid_payment
        payer_id != recipient_id
    end
end
