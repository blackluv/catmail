GMail::Application.routes.draw do
  get "roots/show"

  root to: 'roots#show'

  scope '/auth' do
    get '/:provider/callback' => 'sessions#create'
    get '/failure'            => 'sessions#fail'
  end

  get '/login' => 'sessions#new', as: :login
  delete '/logout' => 'sessions#destroy', as: :logout
end
