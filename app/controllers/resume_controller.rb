class ResumeController < ApplicationController
  def index
    path_file_html = Rails.root + "public/mikeallred.html"
    @data_html = File.read(path_file_html)
  end
end
