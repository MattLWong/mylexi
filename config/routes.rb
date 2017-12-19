Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :feed, only: [:show]
    resource :session, only: [:create, :destroy]
    resource :user, only: [:create, :show, :destroy]
    resources :words, only: [:create, :index, :show, :update, :destroy]
    resources :sentences, only: [:index, :show, :create, :destroy, :update]
  end


  root 'static_pages#root'
end
