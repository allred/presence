class DestroyersController < ApplicationController
  def index
    path_file_html = Rails.root + "public/report_destroyers.html"
    @mtime = File.mtime(path_file_html)
    @data_html = File.read(path_file_html)

    @data_html.gsub!(%r%
      ^<html>$
      |^</html>$
      |^<body>$
      |^</body>$
    %x, '')

    @data_html.gsub!('<table>', '<table class="table table-striped table-hover">')
    @data_html.gsub!(/(http.*?)</, '<a href="\1" target="_blank">intel</a><')
  end
end
