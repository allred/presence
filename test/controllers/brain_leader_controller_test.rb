require 'test_helper'

class BrainLeaderControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get brain_leader_url
    assert_response :success
  end

end
