class PintoController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:create]

  def index
    @results = ["index"]
    render json: @results
  end

  def create
    @results = {
      lat: params['lat'],
      lng: params['lng'],
      t: Time.now.strftime("%Y%m%d %H%M%S")
    }
    render json: @results
  end
end
