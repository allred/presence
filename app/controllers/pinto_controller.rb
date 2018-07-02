class PintoController < ApplicationController
  require 'aws-sdk'
  require 'ipaddr'
  skip_before_action :verify_authenticity_token, :only => [:create]

  def index
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
    if params['lat'] =~ /^\-*\d+\.\d+$/ && params['lng'] =~ /^\-*\d+\.\d+$/
      dynamo_data = {
        ip: request.remote_ip,
        date: Time.now.to_s,
        etime: Time.now.to_i,
        lat: params['lat'],
        lng: params['lng'],
        color: ip_to_color(request.remote_ip),
      }
      #logger.debug dynamo_data
      dynamo_put(dynamo_data)
    end
    render json: @results
  end

  private

  def dynamo_put(item)
    client = Aws::DynamoDB::Client.new(region: 'us-east-1')
    client.put_item({
      table_name: 'pinto_gps',
      item: item,
    })
  end

  def ip_to_color(ip)
    hex = IPAddr.new(ip).to_i.to_s(16)
    components = []
    hex.scan(/(\w\w)/).each do |c|
      components.push(c.first)
    end
    return components[1,3].join('')
  end
end
