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
      #t: Time.now.strftime("%Y%m%d %H%M%S"),
      c: ip_to_color(request.remote_ip),
    }
    if validate_params
      dynamo_data = {
        ip: request.remote_ip,
        date: Time.now.to_s,
        etime: Time.now.to_i,
        lat: params['lat'],
        lng: params['lng'],
        color: ip_to_color(request.remote_ip),
      }
      #logger.debug dynamo_data
      if dynamo_put(dynamo_data)
        @results.merge!({s: "+"})
      end
    end
    render json: @results
  end

  private

  def dynamo_put(item)
    client = Aws::DynamoDB::Client.new(region: 'us-east-1')
    client.put_item({
      table_name: 'pinto_gps',
      item: item,
      #return_values: "ALL_OLD",
      #return_item_collection_metrics: "SIZE",
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

  def validate_params
    # lat and lng can be quite lengthy, ie: -73.938018
    return false unless params['lat'] =~ /^\-*\d+\.\d+$/
    return false unless params['lng'] =~ /^\-*\d+\.\d+$/
    # clr is a rrggbb string
    if params['clr']
      return false unless params['clr'] =~ /^\w{6}$/
    end
    return true
  end
end
