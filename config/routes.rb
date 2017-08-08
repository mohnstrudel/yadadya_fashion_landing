Rails.application.routes.draw do
  scope module: :front do
    root 'static_pages#home'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
