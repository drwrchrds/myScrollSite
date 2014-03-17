Scrollsite::Application.routes.draw do
  root to: "static_pages#home"
  get '/test1', to: "static_pages#test1"
end
