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
require 'test_helper'

class RequestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
