# Rails 5 upgrade: make sure all models inherit from this
class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
end
