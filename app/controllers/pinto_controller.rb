class PintoController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:create]

  def index
    @results = ["index"]
    render json: @results
  end

  def create
    @results = ["create"]
    render json: @results
  end
end
