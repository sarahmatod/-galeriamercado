Rails.application.routes.draw do
  # devise_for :users
  devise_for :user, :path => '', :path_names => { :sign_in => "login" }

  #resources :contacts, only: [:new, :create, :index]

  root to: 'contacts#new'

  # Read all
  get "contatos", to: "contacts#index"

  # Create
  post "contacts", to: "contacts#create"


end
