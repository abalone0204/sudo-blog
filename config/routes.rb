Rails.application.routes.draw do
  root 'posts#index'

  resources :posts do
    resources :comments
  end

  get :about , controller: :pages
  get :profile, controller: :pages
end
