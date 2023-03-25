Rails.application.routes.draw do
  resources :guests
  resources :employees
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/signup", to: "sessions#create"
  get "/all", to: "sessions#show"
  post "/login", to: "sessions#login"
  get "/employees", to: "employees#index"
  post "/createmp", to: "employees#create"
  post"/delemp", to: "employees#delete"
  get "/guests", to: "guests#index"
  post "/creategst", to: "guests#create"
end 
