Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'react_one' => 'react_one#index'
  get 'resume' => 'resume#index'
  get 'welcome/index'
  root 'welcome#index'
end
