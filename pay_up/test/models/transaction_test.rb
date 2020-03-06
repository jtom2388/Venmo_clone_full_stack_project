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
require 'test_helper'

class TransactionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
