require 'test_helper'

class SketchControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get sketch_url
    assert_response :success
  end

end
