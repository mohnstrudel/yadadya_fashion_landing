Rails.application.routes.draw do
  devise_for :users
  scope module: :front do
    root 'static_pages#home'
    resources :requests
  end

  namespace :admin do
    get '', to: 'dashboard#home', as: '/'
    resources :requests
    resources :events, except: :show
    resources :speakers, except: :show
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
