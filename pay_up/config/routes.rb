Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show, :update, :edit]
    resource :session, only: [:create, :destroy]
    resources :transactions, except: [:new, :update, :edit, :destroy]
    resources :requests, except: [:new, :update, :edit]
  end
  
  root to: 'static_pages#root'
end
