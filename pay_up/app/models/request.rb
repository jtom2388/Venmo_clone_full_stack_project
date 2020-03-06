# == Schema Information
#
# Table name: requests
#
#  id           :bigint           not null, primary key
#  amount       :float            not null
#  body         :string           not null
#  requestor_id :integer          not null
#  requestee_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Request < ApplicationRecord

    validates :amount, :body, :requestor_id, :requestee_id, presence: true
    validates :amount, numericality: true

    validate :valid_request

    belongs_to :requestor,
        foreign_key: :requestor_id,
        class_name: :User

    belongs_to :requestee_id,
        foreign_key: :requestee_id,
        class_name: :User

    private
    def valid_request
        requestor_id != requestee_id
    end
end
