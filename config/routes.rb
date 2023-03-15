Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/signup", to: "sessions#create"
  get "/all", to: "sessions#show"
  post "/login", to: "sessions#login"
end 