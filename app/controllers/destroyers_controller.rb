class DestroyersController < ApplicationController
  def index
    path_file_html = Rails.root + "public/report_destroyers.html"
    @data_html = File.read(path_file_html)

    %w% <html> </html> <body> </body> %.each do |w|
      @data_html.gsub!(w, '')
    end
  end
end
