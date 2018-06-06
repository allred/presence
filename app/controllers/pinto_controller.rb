class PintoController < ApplicationController
  require 'ipaddr'
  skip_before_action :verify_authenticity_token, :only => [:create]

  def index
    @results = ["index"]
    render json: @results
  end

  def show
    @results = ["show"]
    render json: @results
  end

  def create
    @results = {
      lat: params['lat'],
      lng: params['lng'],
      ip: request.remote_ip,
      t: Time.now.strftime("%Y%m%d %H%M%S"),
      c: ip_to_color(request.remote_ip),
    }
    render json: @results
  end

  private

  def ip_to_color(ip)
    hex = IPAddr.new(ip).to_i.to_s(16)
    components = []
    hex.scan(/(\w\w)/).each do |c|
      components.push(c.first)
    end
    return components[1,3].join('')
  end
end
