# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Rails.application.load_tasks

task 'dev_start' do
  puts "START task dev_start"
  task 'tmp:cache:clear'
  task 'assets:clobber'
  task 'assets:precompile'
  task 'db:migrate'
  puts "END task dev_start"
end
