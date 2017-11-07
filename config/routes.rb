Rails.application.routes.draw do

  get 'brain_leader' => 'brain_leader#index'
  get 'destroyers' => 'destroyers#index'
  get 'react_one' => 'react_one#index'
  get 'resume' => 'resume#index'
  get 'sketch' => 'sketch#index'
  get 'welcome/index'
  root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
