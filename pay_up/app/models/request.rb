class Request < ApplicationRecord

    validates :amount, :body, :requestor_id, :requestee_id, presence: true
    validates :amount, numericality: true

    belongs_to :requestor,
        foreign_key: :requestor_id,
        class_name: :User

    belongs_to :requestee_id,
        foreign_key: :requestee_id,
        class_name: :User
end
