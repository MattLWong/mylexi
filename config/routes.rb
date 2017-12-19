Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :feed, only: [:show]
    resource :session, only: [:create, :destroy]
    resources :user, only: [:create, :show, :destroy]
    resources :words, only: [:create, :index, :show, :update, :destroy] do
      resources :sentences, only: [:index]
    end
    resources :sentences, only: [:show, :destroy, :update]
  end


  root 'static_pages#root'
end
